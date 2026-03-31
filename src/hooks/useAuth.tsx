import { useState, useEffect, createContext, useContext } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [roleChecked, setRoleChecked] = useState(false);

  // 1. Listener first (synchronous callback — no await inside)
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        // Reset role state so it gets re-checked
        setIsAdmin(false);
        setRoleChecked(false);
        setAuthReady(true);
      }
    );

    // Then get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setAuthReady(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 2. Separate effect to check admin role (non-blocking)
  useEffect(() => {
    if (!authReady) return;

    if (!user) {
      setIsAdmin(false);
      setRoleChecked(true);
      return;
    }

    let cancelled = false;

    const checkRole = async () => {
      try {
        const { data, error } = await supabase.rpc("has_role", {
          _user_id: user.id,
          _role: "admin",
        });
        if (!cancelled) {
          setIsAdmin(error ? false : !!data);
          setRoleChecked(true);
        }
      } catch {
        if (!cancelled) {
          setIsAdmin(false);
          setRoleChecked(true);
        }
      }
    };

    checkRole();
    return () => { cancelled = true; };
  }, [authReady, user?.id]);

  // loading = true until both auth session AND role check are done
  const loading = !authReady || !roleChecked;

  const signIn = async (email: string, password: string) => {
    // Reset states so loading becomes true again
    setRoleChecked(false);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setRoleChecked(true); // no user to check role for
    }
    return { error: error as Error | null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, isAdmin, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
