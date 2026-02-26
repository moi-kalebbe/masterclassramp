import CtaButton from "./CtaButton";
import { CalendarDays, FileText, Zap } from "lucide-react";

const perks = [
  { icon: CalendarDays, text: "Link de acesso exclusivo dia 03 de Março" },
  { icon: FileText, text: "Materiais complementares" },
  { icon: Zap, text: "Prioridade no plano de destrave" },
];

const FechamentoSection = () => (
  <section className="py-20 sm:py-28 px-6">
    <div className="container max-w-3xl text-center">
      <div className="border border-primary/30 rounded-2xl p-8 sm:p-14 border-glow bg-card/40">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 inline-block">
          Grupo VIP de Antecipação
        </span>
        <p className="text-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Este é um encontro técnico e exclusivo para empresários que buscam
          governança e lucro real. Não faremos uma apresentação teórica, mas sim
          uma <strong className="text-primary">intervenção estratégica</strong>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10">
          {perks.map((p) => (
            <div key={p.text} className="flex items-center gap-2 text-muted-foreground text-sm">
              <p.icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{p.text}</span>
            </div>
          ))}
        </div>

        <CtaButton />
      </div>
    </div>
  </section>
);

export default FechamentoSection;
