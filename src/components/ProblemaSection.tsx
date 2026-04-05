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

const ProblemaSection = () => (
  <section className="relative overflow-hidden px-6 py-20 sm:py-28">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-3xl" />

    <div className="relative container max-w-3xl">
      <h2 className="mb-4 text-center text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        Por que sua empresa <span className="text-primary">parou de crescer?</span>
      </h2>
      <p className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
        Para cada 10% de crescimento no faturamento, a complexidade operacional cresce 50%. Sem a estrutura certa, o
        crescimento vira caos e o lucro desaparece.
      </p>
      <div className="space-y-4">
        {problems.map((problem) => (
          <div
            key={problem.text}
            className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.06)] sm:p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <problem.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="pt-1.5 text-sm leading-relaxed text-foreground sm:text-base">{problem.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <CtaButton />
      </div>
    </div>
  </section>
);

export default ProblemaSection;
