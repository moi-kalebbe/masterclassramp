import rebecaImg from "@/assets/rebeca_maia.png";
import lucasImg from "@/assets/lucas.png";

const mentors = [
  {
    img: rebecaImg,
    title: "Arquitetura de Gestão",
    name: "Com Rebeca Maia",
    text: "Como desenhar processos e formar uma equipe que pensa e decide por você, eliminando a fadiga de decisão e devolvendo o seu tempo estratégico.",
  },
  {
    img: lucasImg,
    title: "Inteligência Financeira",
    name: "Com Lucas Nigro",
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
            className="border border-border rounded-xl overflow-hidden bg-card hover:border-primary/40 transition-colors duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary flex items-end justify-center">
              <img
                src={m.img}
                alt={m.name}
                className="w-64 sm:w-72 object-cover object-top"
              />
            </div>
            <div className="p-6 sm:p-8">
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
