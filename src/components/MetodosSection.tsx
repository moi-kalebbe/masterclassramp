import rebecaImg from "@/assets/rebeca_maia.jpg";
import lucasImg from "@/assets/lucas.jpg";
import { Award } from "lucide-react";

const mentors = [
  {
    img: rebecaImg,
    title: "Arquitetura de Gestão",
    name: "Com Rebeca Maia",
    badge: "10+ anos de experiência",
    text: "Como desenhar processos e formar uma equipe que pensa e decide por você, eliminando a fadiga de decisão e devolvendo o seu tempo estratégico.",
  },
  {
    img: lucasImg,
    title: "Inteligência Financeira",
    name: "Com Lucas Nigro",
    badge: "Especialista em Finanças",
    text: "Como dominar seus indicadores para encontrar o lucro que está fugindo do seu controle e garantir que cada movimento de escala seja financeiramente viável.",
  },
];

const MetodosSection = () => (
  <section className="py-16 sm:py-24 px-6">
    <div className="container max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
        Os Métodos
      </h2>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {mentors.map((m) => (
          <div
            key={m.name}
            className="group border border-border rounded-xl overflow-hidden bg-card hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] transition-all duration-300"
          >
            <div className="aspect-[3/4] overflow-hidden bg-secondary flex items-end justify-center">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary/80 uppercase tracking-wider">
                  {m.badge}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                {m.title}
              </h3>
              <span className="text-primary text-sm font-semibold">
                {m.name}
              </span>
              <p className="text-muted-foreground text-sm sm:text-base mt-3 leading-relaxed">
                {m.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MetodosSection;
