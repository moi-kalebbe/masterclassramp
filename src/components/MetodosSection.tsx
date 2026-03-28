import rebecaImg from "@/assets/rebeca_maia.webp";
import lucasImg from "@/assets/lucas.webp";
import { Award } from "lucide-react";

const mentors = [
  {
    img: rebecaImg,
    title: "Arquitetura de Gestão",
    name: "Rebeca Maia",
    role: "Mentora de Gestão",
    text: "Como desenhar processos e formar uma equipe que pensa e decide por você, eliminando a fadiga de decisão e devolvendo o seu tempo estratégico.",
    bio: "Mentora com 10+ anos de experiência em destravar operações familiares e transformar empresas dependentes do dono em organizações autônomas.",
  },
  {
    img: lucasImg,
    title: "Inteligência Financeira",
    name: "Lucas Nigro",
    role: "Especialista Financeiro",
    text: "Como dominar seus indicadores para encontrar o lucro que está fugindo do seu controle e garantir que cada movimento de escala seja financeiramente viável.",
    bio: "Especialista em gestão financeira de alta complexidade, ajudando empresários a encontrar lucro real e escalar com segurança.",
  },
];

const MetodosSection = () => (
  <section className="py-16 sm:py-24 px-6">
    <div className="container max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
        Mentores
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
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-0.5 tracking-tight">
                {m.name}
              </h3>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {m.role}
              </span>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-1">
                {m.title}
              </h4>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                {m.text}
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-3 border-t border-border pt-3">
                {m.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MetodosSection;
