import { AlertTriangle, Lock, BatteryLow } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    text: "Muitos negócios que alcançaram um faturamento expressivo caíram em uma armadilha invisível: o dono se tornou o motor, a engrenagem e o único combustível da operação.",
  },
  {
    icon: Lock,
    text: "Se você sente que a empresa trava ou perde o ritmo quando você não está no centro de cada decisão, você não tem uma empresa; você tem uma centralização de crises.",
  },
  {
    icon: BatteryLow,
    text: "Para romper o teto invisível que impede empresas promissoras de chegarem aos 7 ou 8 dígitos, você precisa de métodos que não dependam da sua energia vital 24 horas por dia.",
  },
];

const ProvocacaoSection = () => (
  <section className="py-20 sm:py-28 px-6">
    <div className="container max-w-5xl">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
        {/* Left — text */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
            Você construiu uma empresa ou um{" "}
            <span className="text-primary">emprego de luxo</span> para si mesmo?
          </h2>

          <div className="space-y-6">
            {painPoints.map((p, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — decorative quote */}
        <div className="hidden md:block max-w-xs">
          <div className="border-l-2 border-primary pl-6 sticky top-32">
            <p className="text-foreground text-base leading-relaxed italic">
              "O sucesso que te trouxe até aqui não é o mesmo que te levará ao próximo nível."
            </p>
          </div>
        </div>
      </div>

      {/* Mobile quote */}
      <div className="md:hidden border-l-2 border-primary pl-6 mt-10">
        <p className="text-foreground text-base leading-relaxed italic">
          "O sucesso que te trouxe até aqui não é o mesmo que te levará ao próximo nível."
        </p>
      </div>
    </div>
  </section>
);

export default ProvocacaoSection;
