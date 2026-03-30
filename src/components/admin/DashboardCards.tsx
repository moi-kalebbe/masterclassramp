import type { Tables } from "@/integrations/supabase/types";

type Lead = Tables<"leads">;

interface DashboardCardsProps {
  leads: Lead[];
}

const DashboardCards = ({ leads }: DashboardCardsProps) => {
  const total = leads.length;
  const qualified = leads.filter((l) => l.qualified).length;
  const notQualified = total - qualified;
  const conversionRate = total > 0 ? Math.round((qualified / total) * 100) : 0;

  const statusCounts = {
    novo: leads.filter((l) => l.status === "novo").length,
    contactado: leads.filter((l) => l.status === "contactado").length,
    em_negociacao: leads.filter((l) => l.status === "em_negociacao").length,
    convertido: leads.filter((l) => l.status === "convertido").length,
    perdido: leads.filter((l) => l.status === "perdido").length,
  };

  const cards = [
    { label: "Total de Leads", value: total, color: "text-foreground" },
    { label: "Qualificados", value: qualified, color: "text-green-400" },
    { label: "Não Qualificados", value: notQualified, color: "text-red-400" },
    { label: "Taxa de Conversão", value: `${conversionRate}%`, color: "text-primary" },
  ];

  const pipeline = [
    { label: "Novo", value: statusCounts.novo, color: "bg-blue-500/20 text-blue-400" },
    { label: "Contactado", value: statusCounts.contactado, color: "bg-yellow-500/20 text-yellow-400" },
    { label: "Em Negociação", value: statusCounts.em_negociacao, color: "bg-purple-500/20 text-purple-400" },
    { label: "Convertido", value: statusCounts.convertido, color: "bg-green-500/20 text-green-400" },
    { label: "Perdido", value: statusCounts.perdido, color: "bg-red-500/20 text-red-400" },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {cards.map((c) => (
          <div key={c.label} className="rounded-xl border border-border/30 bg-card/50 p-4 space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
            <p className={`text-2xl font-black ${c.color}`}>{c.value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {pipeline.map((p) => (
          <div key={p.label} className={`rounded-lg px-3 py-2 text-center ${p.color}`}>
            <p className="text-lg font-bold">{p.value}</p>
            <p className="text-xs">{p.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
