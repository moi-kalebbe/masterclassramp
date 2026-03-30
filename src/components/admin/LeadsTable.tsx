import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import type { Enums } from "@/integrations/supabase/types";
import LeadDetail from "./LeadDetail";

type Lead = Tables<"leads">;
type LeadStatus = Enums<"lead_status">;

interface LeadsTableProps {
  leads: Lead[];
  onRefresh: () => void;
  onSendWhatsApp: (lead: Lead, message: string) => void;
  selectedLeads: string[];
  onToggleSelect: (id: string) => void;
  onSelectAll: () => void;
}

const STATUS_LABELS: Record<LeadStatus, string> = {
  novo: "Novo",
  contactado: "Contactado",
  em_negociacao: "Em Negociação",
  convertido: "Convertido",
  perdido: "Perdido",
};

const STATUS_COLORS: Record<LeadStatus, string> = {
  novo: "bg-blue-500/20 text-blue-400",
  contactado: "bg-yellow-500/20 text-yellow-400",
  em_negociacao: "bg-purple-500/20 text-purple-400",
  convertido: "bg-green-500/20 text-green-400",
  perdido: "bg-red-500/20 text-red-400",
};

const LeadsTable = ({ leads, onRefresh, onSendWhatsApp, selectedLeads, onToggleSelect, onSelectAll }: LeadsTableProps) => {
  const [detailLead, setDetailLead] = useState<Lead | null>(null);

  const updateStatus = async (id: string, status: LeadStatus) => {
    await supabase.from("leads").update({ status }).eq("id", id);
    onRefresh();
  };

  return (
    <>
      <div className="rounded-xl border border-border/30 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/30 bg-card/30">
                <th className="p-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedLeads.length === leads.length && leads.length > 0}
                    onChange={onSelectAll}
                    className="rounded"
                  />
                </th>
                <th className="p-3 text-left text-xs text-muted-foreground uppercase tracking-wider">Nome</th>
                <th className="p-3 text-left text-xs text-muted-foreground uppercase tracking-wider hidden md:table-cell">Email</th>
                <th className="p-3 text-left text-xs text-muted-foreground uppercase tracking-wider hidden lg:table-cell">WhatsApp</th>
                <th className="p-3 text-left text-xs text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Ramo</th>
                <th className="p-3 text-left text-xs text-muted-foreground uppercase tracking-wider">Qualificado</th>
                <th className="p-3 text-left text-xs text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="p-3 text-left text-xs text-muted-foreground uppercase tracking-wider hidden md:table-cell">Data</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-border/20 hover:bg-card/30 cursor-pointer transition-colors"
                  onClick={() => setDetailLead(lead)}
                >
                  <td className="p-3" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={selectedLeads.includes(lead.id)}
                      onChange={() => onToggleSelect(lead.id)}
                      className="rounded"
                    />
                  </td>
                  <td className="p-3 font-medium text-foreground">{lead.nome} {lead.sobrenome}</td>
                  <td className="p-3 text-muted-foreground hidden md:table-cell">{lead.email}</td>
                  <td className="p-3 text-muted-foreground hidden lg:table-cell">{lead.whatsapp}</td>
                  <td className="p-3 text-muted-foreground hidden lg:table-cell">{lead.ramo === "Outro" ? lead.ramo_outro : lead.ramo}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${lead.qualified ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                      {lead.qualified ? "Sim" : "Não"}
                    </span>
                  </td>
                  <td className="p-3" onClick={(e) => e.stopPropagation()}>
                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead.id, e.target.value as LeadStatus)}
                      className={`px-2 py-1 rounded-lg text-xs font-medium border-0 cursor-pointer ${STATUS_COLORS[lead.status]}`}
                    >
                      {Object.entries(STATUS_LABELS).map(([key, label]) => (
                        <option key={key} value={key}>{label}</option>
                      ))}
                    </select>
                  </td>
                  <td className="p-3 text-muted-foreground text-xs hidden md:table-cell">
                    {new Date(lead.created_at).toLocaleDateString("pt-BR")}
                  </td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-muted-foreground">Nenhum lead encontrado</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {detailLead && (
        <LeadDetail
          lead={detailLead}
          onClose={() => setDetailLead(null)}
          onSendWhatsApp={onSendWhatsApp}
          onStatusChange={(status) => {
            updateStatus(detailLead.id, status);
            setDetailLead({ ...detailLead, status });
          }}
        />
      )}
    </>
  );
};

export default LeadsTable;
