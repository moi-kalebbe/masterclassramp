import { TrendingUp, AlertTriangle, Lock } from "lucide-react";
import CtaButton from "./CtaButton";

const problems = [
  {
    icon: TrendingUp,
    text: "Faturamento cresce, mas o lucro não acompanha na mesma proporção",
  },
  {
    icon: Lock,
    text: "Você é o gargalo: nada funciona sem a sua presença direta",
  },
  {
    icon: AlertTriangle,
    text: "Decisões financeiras são tomadas no escuro, sem indicadores reais",
  },
];

interface ProblemaSectionProps {
  onCtaClick?: () => void;
}

const ProblemaSection = ({ onCtaClick }: ProblemaSectionProps) => (
  <section className="relative py-20 sm:py-28 px-6 overflow-hidden" style={{ contain: "layout style paint", contentVisibility: "auto", containIntrinsicSize: "900px" }}>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

    <div className="relative container max-w-3xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground text-center mb-4 uppercase tracking-tight">
        Por que sua empresa{" "}
        <span className="text-primary">parou de crescer?</span>
      </h2>
      <p className="text-muted-foreground text-center text-sm sm:text-base max-w-2xl mx-auto mb-14 leading-relaxed">
        Para cada 10% de crescimento no faturamento, a complexidade operacional
        cresce 50%. Sem a estrutura certa, o crescimento vira caos e o lucro
        desaparece.
      </p>
      <div className="space-y-4">
        {problems.map((p) => (
          <div
            key={p.text}
            className="flex items-start gap-4 p-5 sm:p-6 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.06)] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <p.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground text-sm sm:text-base leading-relaxed pt-1.5">
              {p.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <CtaButton onClick={onCtaClick} />
      </div>
    </div>
  </section>
);

export default ProblemaSection;
