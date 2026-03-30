import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables, Enums } from "@/integrations/supabase/types";

type Lead = Tables<"leads">;
type MessageLog = Tables<"message_logs">;
type LeadStatus = Enums<"lead_status">;

interface LeadDetailProps {
  lead: Lead;
  onClose: () => void;
  onSendWhatsApp: (lead: Lead, message: string) => void;
  onStatusChange: (status: LeadStatus) => void;
}

const STATUS_LABELS: Record<LeadStatus, string> = {
  novo: "Novo",
  contactado: "Contactado",
  em_negociacao: "Em Negociação",
  convertido: "Convertido",
  perdido: "Perdido",
};

const LeadDetail = ({ lead, onClose, onSendWhatsApp, onStatusChange }: LeadDetailProps) => {
  const [logs, setLogs] = useState<MessageLog[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    supabase
      .from("message_logs")
      .select("*")
      .eq("lead_id", lead.id)
      .order("sent_at", { ascending: false })
      .then(({ data }) => setLogs(data || []));
  }, [lead.id]);

  const handleSend = () => {
    if (!message.trim()) return;
    onSendWhatsApp(lead, message);
    setMessage("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="w-full max-w-lg bg-card border border-border/30 rounded-2xl p-6 space-y-5 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-foreground">{lead.nome} {lead.sobrenome}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X className="w-5 h-5" /></button>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div><span className="text-muted-foreground">Email:</span> <span className="text-foreground">{lead.email}</span></div>
          <div><span className="text-muted-foreground">WhatsApp:</span> <span className="text-foreground">{lead.whatsapp}</span></div>
          <div><span className="text-muted-foreground">Ramo:</span> <span className="text-foreground">{lead.ramo === "Outro" ? lead.ramo_outro : lead.ramo}</span></div>
          <div><span className="text-muted-foreground">Colaboradores:</span> <span className="text-foreground">{lead.colaboradores}</span></div>
          <div><span className="text-muted-foreground">Faturamento:</span> <span className="text-foreground">{lead.faturamento}</span></div>
          <div><span className="text-muted-foreground">Qualificado:</span> <span className={lead.qualified ? "text-green-400" : "text-red-400"}>{lead.qualified ? "Sim" : "Não"}</span></div>
        </div>

        {lead.desafios && lead.desafios.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Desafios</p>
            <div className="flex flex-wrap gap-1">
              {lead.desafios.map((d) => (
                <span key={d} className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs">{d}</span>
              ))}
            </div>
          </div>
        )}

        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Status do Pipeline</p>
          <select
            value={lead.status}
            onChange={(e) => onStatusChange(e.target.value as LeadStatus)}
            className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-2 text-sm text-foreground"
          >
            {Object.entries(STATUS_LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>

        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Enviar WhatsApp</p>
          <div className="flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite a mensagem..."
              className="flex-1 rounded-xl border border-border/60 bg-background/60 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-bold hover:bg-green-700 transition-colors"
            >
              Enviar
            </button>
          </div>
        </div>

        {logs.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Histórico de Mensagens</p>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {logs.map((log) => (
                <div key={log.id} className="rounded-lg border border-border/20 bg-background/30 p-3 text-xs">
                  <div className="flex justify-between text-muted-foreground mb-1">
                    <span>{log.template}</span>
                    <span>{new Date(log.sent_at).toLocaleString("pt-BR")}</span>
                  </div>
                  <p className="text-foreground">{log.message}</p>
                  <span className={`text-xs ${log.status === "sent" ? "text-green-400" : log.status === "failed" ? "text-red-400" : "text-yellow-400"}`}>
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadDetail;
