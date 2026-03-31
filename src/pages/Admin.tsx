import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import type { Tables, Enums } from "@/integrations/supabase/types";
import DashboardCards from "@/components/admin/DashboardCards";
import LeadsTable from "@/components/admin/LeadsTable";
import CsvExport from "@/components/admin/CsvExport";
import { toast } from "@/hooks/use-toast";

type Lead = Tables<"leads">;
type LeadStatus = Enums<"lead_status">;

const TEMPLATES = [
  { name: "Boas-vindas", text: "Olá {nome}, tudo bem? Vi que você se inscreveu para a Masterclass Rumo à Máxima Potência. Seja muito bem-vindo(a)! Em breve você receberá todas as informações." },
  { name: "Lembrete", text: "Oi {nome}! Lembrando que a Masterclass está chegando. Não perca essa oportunidade única de escalar sua empresa com estratégia e inteligência financeira." },
  { name: "Follow-up", text: "Oi {nome}, passando para saber se ficou alguma dúvida sobre a Masterclass. Estou à disposição para te ajudar!" },
];

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<LeadStatus | "all">("all");
  const [filterQualified, setFilterQualified] = useState<"all" | "yes" | "no">("all");
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [bulkTemplate, setBulkTemplate] = useState(TEMPLATES[0].name);
  const [loadingData, setLoadingData] = useState(true);

  // Only redirect after auth fully resolves
  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login", { replace: true });
    }
  }, [user, isAdmin, loading, navigate]);

  const fetchLeads = async () => {
    setLoadingData(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Erro ao carregar leads", description: error.message, variant: "destructive" });
    }
    setLeads(data || []);
    setLoadingData(false);
  };

  useEffect(() => {
    if (!loading && user && isAdmin) fetchLeads();
  }, [user, isAdmin, loading]);

  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      const matchSearch =
        !search ||
        `${l.nome} ${l.sobrenome} ${l.email} ${l.whatsapp}`.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filterStatus === "all" || l.status === filterStatus;
      const matchQualified =
        filterQualified === "all" ||
        (filterQualified === "yes" && l.qualified) ||
        (filterQualified === "no" && !l.qualified);
      return matchSearch && matchStatus && matchQualified;
    });
  }, [leads, search, filterStatus, filterQualified]);

  const toggleSelect = (id: string) => {
    setSelectedLeads((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedLeads((prev) =>
      prev.length === filteredLeads.length ? [] : filteredLeads.map((l) => l.id)
    );
  };

  const sendWhatsApp = async (lead: Lead, message: string) => {
    const formatted = message.replace("{nome}", lead.nome);
    const phone = lead.whatsapp.replace(/\D/g, "");
    const waUrl = `https://wa.me/55${phone}?text=${encodeURIComponent(formatted)}`;
    window.open(waUrl, "_blank");

    await supabase.from("message_logs").insert({
      lead_id: lead.id,
      template: "Manual",
      message: formatted,
      status: "sent",
    });

    toast({ title: "Mensagem enviada", description: `WhatsApp aberto para ${lead.nome}` });
  };

  const sendBulk = () => {
    const template = TEMPLATES.find((t) => t.name === bulkTemplate);
    if (!template || selectedLeads.length === 0) return;
    const selected = leads.filter((l) => selectedLeads.includes(l.id));
    selected.forEach((lead) => sendWhatsApp(lead, template.text));
    setSelectedLeads([]);
  };

  if (loading || (user && isAdmin && loadingData)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  if (!user || !isAdmin) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/30 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-black text-foreground uppercase tracking-tight">Painel de Leads</h1>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">{user?.email}</span>
          <button onClick={signOut} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Sair
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <DashboardCards leads={leads} />

        <div className="flex flex-wrap gap-3 items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome, email..."
            className="flex-1 min-w-[200px] rounded-xl border border-border/60 bg-background/60 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as LeadStatus | "all")}
            className="rounded-xl border border-border/60 bg-background/60 px-3 py-2 text-sm text-foreground"
          >
            <option value="all">Todos os Status</option>
            <option value="novo">Novo</option>
            <option value="contactado">Contactado</option>
            <option value="em_negociacao">Em Negociação</option>
            <option value="convertido">Convertido</option>
            <option value="perdido">Perdido</option>
          </select>
          <select
            value={filterQualified}
            onChange={(e) => setFilterQualified(e.target.value as "all" | "yes" | "no")}
            className="rounded-xl border border-border/60 bg-background/60 px-3 py-2 text-sm text-foreground"
          >
            <option value="all">Todos</option>
            <option value="yes">Qualificados</option>
            <option value="no">Não Qualificados</option>
          </select>
          <CsvExport leads={filteredLeads} />
          <button onClick={fetchLeads} className="px-4 py-2 rounded-xl border border-border/40 text-sm text-foreground hover:bg-card/50 transition-colors">
            Atualizar
          </button>
        </div>

        {selectedLeads.length > 0 && (
          <div className="flex items-center gap-3 p-4 rounded-xl border border-primary/30 bg-primary/5">
            <span className="text-sm text-foreground font-medium">{selectedLeads.length} selecionado(s)</span>
            <select
              value={bulkTemplate}
              onChange={(e) => setBulkTemplate(e.target.value)}
              className="rounded-xl border border-border/60 bg-background/60 px-3 py-2 text-sm text-foreground"
            >
              {TEMPLATES.map((t) => (
                <option key={t.name} value={t.name}>{t.name}</option>
              ))}
            </select>
            <button
              onClick={sendBulk}
              className="px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-bold hover:bg-green-700 transition-colors"
            >
              Enviar WhatsApp em Massa
            </button>
          </div>
        )}

        <LeadsTable
          leads={filteredLeads}
          onRefresh={fetchLeads}
          onSendWhatsApp={sendWhatsApp}
          selectedLeads={selectedLeads}
          onToggleSelect={toggleSelect}
          onSelectAll={selectAll}
        />
      </div>
    </div>
  );
};

export default Admin;
