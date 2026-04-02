import rebecaImg from "@/assets/rebeca-bio.webp";
import lucasImg from "@/assets/lucas-bio.webp";
import CtaButton from "./CtaButton";

const mentors = [
  {
    img: lucasImg,
    name: "Lucas Nigro",
    bio: "Especialista em inteligência financeira de alta complexidade e engenharia de indicadores de performance. Lucas foca na estruturação financeira como pilar de escala, ajudando empresários a identificarem a margem de lucro real e a blindarem o caixa contra decisões intuitivas. Através de metodologias que transformam dados brutos em previsibilidade matemática, ele capacita fundadores a liderarem com segurança financeira, garantindo que o crescimento do faturamento se converta efetivamente em aumento de patrimônio líquido e sustentabilidade do negócio.",
  },
  {
    img: rebecaImg,
    name: "Rebeca Maia",
    bio: "Conselheira consultiva e mentora de empresários com mais de uma década dedicada à aceleração de negócios através da gestão estratégica. Especialista em conduzir a transição de empresas dependentes de seus fundadores para organizações de alta performance e autonomia operacional. Com vasta experiência em operações familiares e governança, Rebeca desenha processos que eliminam gargalos de produtividade, permitindo que o empresário se desvincule do operacional para focar na expansão e na visão de longo prazo do seu negócio.",
  },
];

interface MetodosSectionProps {
  onCtaClick?: () => void;
}

const MetodosSection = ({ onCtaClick }: MetodosSectionProps) => (
  <section className="py-16 sm:py-24 px-6">
    <div className="container max-w-5xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-12 text-center uppercase tracking-tight">
        Quem estará <span className="text-primary">com você</span>
      </h2>

      <div className="flex flex-col gap-10">
        {mentors.map((m, i) => (
          <div
            key={m.name}
            className={`flex flex-col ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} items-center gap-6 sm:gap-10 border border-border rounded-2xl p-6 sm:p-8 bg-card/40`}
          >
            <img
              src={m.img}
              alt={m.name}
              loading="lazy"
              decoding="async"
              className="w-52 h-64 sm:w-64 sm:h-80 rounded-xl object-cover object-top flex-shrink-0 border-2 border-primary/20"
              width={256}
              height={320}
              fetchPriority="low"
            />
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-primary mb-3">
                {m.name}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {m.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <CtaButton onClick={onCtaClick} />
      </div>
    </div>
  </section>
);

export default MetodosSection;
