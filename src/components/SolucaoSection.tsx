import { Settings, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Settings,
    title: "Arquitetura de Processos",
    mentor: "com Rebeca Maia",
    description:
      "Como desenhar processos e formar uma equipe que pensa e decide por você, eliminando a fadiga de decisão e devolvendo seu tempo estratégico.",
  },
  {
    icon: BarChart3,
    title: "Engenharia de Caixa",
    mentor: "com Lucas Nigro",
    description:
      "Como dominar seus indicadores para encontrar o lucro que está fugindo do seu controle e garantir que cada movimento de escala seja financeiramente viável.",
  },
];

const SolucaoSection = () => (
  <section className="py-16 sm:py-24 px-6 bg-card/50">
    <div className="container max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
        A Solução: Dois Pilares para Escalar com Lucro
      </h2>
      <p className="text-muted-foreground text-center text-sm sm:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
        Uma masterclass que une gestão operacional e inteligência financeira num
        plano integrado de intervenção.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="relative p-6 sm:p-8 rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.08)] transition-all duration-300"
          >
            <p.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
              {p.title}
            </h3>
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              {p.mentor}
            </span>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-4">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolucaoSection;
