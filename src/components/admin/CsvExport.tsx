import type { Tables } from "@/integrations/supabase/types";

type Lead = Tables<"leads">;

const exportCsv = (leads: Lead[]) => {
  const headers = ["Nome", "Sobrenome", "Email", "WhatsApp", "Ramo", "Colaboradores", "Faturamento", "Desafios", "Qualificado", "Status", "Data"];
  const rows = leads.map((l) => [
    l.nome,
    l.sobrenome,
    l.email,
    l.whatsapp,
    l.ramo === "Outro" ? l.ramo_outro || "" : l.ramo,
    l.colaboradores,
    l.faturamento,
    (l.desafios || []).join("; "),
    l.qualified ? "Sim" : "Não",
    l.status,
    new Date(l.created_at).toLocaleDateString("pt-BR"),
  ]);

  const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `leads_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

interface CsvExportProps {
  leads: Lead[];
}

const CsvExport = ({ leads }: CsvExportProps) => (
  <button
    onClick={() => exportCsv(leads)}
    className="px-4 py-2 rounded-xl border border-border/40 text-sm text-foreground hover:bg-card/50 transition-colors"
  >
    Exportar CSV
  </button>
);

export default CsvExport;
