import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { signIn, isAdmin, user, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect when fully loaded and confirmed admin
  useEffect(() => {
    if (!loading && user && isAdmin) {
      navigate("/admin", { replace: true });
    }
  }, [loading, user, isAdmin, navigate]);

  // Show "not admin" feedback after login resolves
  useEffect(() => {
    if (!loading && user && !isAdmin && submitting) {
      setError("Esta conta não possui acesso administrativo.");
      setSubmitting(false);
    }
  }, [loading, user, isAdmin, submitting]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const { error } = await signIn(email, password);
    if (error) {
      setError("Email ou senha inválidos.");
      setSubmitting(false);
    }
  };

  if (loading && !submitting) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-black text-foreground uppercase tracking-tight">Admin</h1>
          <p className="text-sm text-muted-foreground">Acesse o painel de gestão de leads</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-foreground block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="admin@email.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground block mb-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wide transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] disabled:opacity-50"
          >
            {submitting ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
