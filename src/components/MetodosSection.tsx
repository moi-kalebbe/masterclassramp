import rebecaImg from "@/assets/rebeca-bio-card.webp";
import lucasImg from "@/assets/lucas-bio-card.webp";
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

const MetodosSection = () => (
  <section className="px-6 py-16 sm:py-24">
    <div className="container max-w-5xl">
      <h2 className="mb-12 text-center text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        Quem estará <span className="text-primary">com você</span>
      </h2>

      <div className="flex flex-col gap-10">
        {mentors.map((mentor, index) => (
          <div
            key={mentor.name}
            className={`flex flex-col items-center gap-6 rounded-2xl border border-border bg-card/40 p-6 sm:gap-10 sm:p-8 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
          >
            <img
              src={mentor.img}
              alt={mentor.name}
              loading="lazy"
              decoding="async"
              className="h-64 w-52 flex-shrink-0 rounded-xl border-2 border-primary/20 object-cover object-top sm:h-80 sm:w-64"
              width={256}
              height={320}
              fetchPriority="low"
              sizes="(max-width: 640px) 208px, 256px"
            />
            <div>
              <h3 className="mb-3 text-2xl font-normal text-primary sm:text-3xl lg:text-4xl">{mentor.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{mentor.bio}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <CtaButton />
      </div>
    </div>
  </section>
);

export default MetodosSection;
