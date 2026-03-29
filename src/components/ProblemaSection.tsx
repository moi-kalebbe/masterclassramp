import { TrendingUp, AlertTriangle, Lock } from "lucide-react";

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
  <section className="py-16 sm:py-24 px-6">
    <div className="container max-w-3xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
        Por que sua empresa parou de crescer?
      </h2>
      <p className="text-muted-foreground text-center text-sm sm:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
        Para cada 10% de crescimento no faturamento, a complexidade operacional
        cresce 50%. Sem a estrutura certa, o crescimento vira caos — e o lucro
        desaparece.
      </p>
      <div className="space-y-4">
        {problems.map((p) => (
          <div
            key={p.text}
            className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-all"
          >
            <p.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="text-foreground text-sm sm:text-base leading-relaxed">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemaSection;
