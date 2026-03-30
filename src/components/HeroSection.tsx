import mentorsImg from "@/assets/beca_e_lucas.png";
import bgImg from "@/assets/background.png";
import CtaButton from "./CtaButton";

const HeroSection = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    {/* Network background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    />
    <div className="absolute inset-0 bg-background/40" />
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

    <div className="relative z-10 container max-w-5xl px-6 py-20 sm:py-28">
      <div className="flex flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm">
          Vagas Limitadas • Masterclass Exclusiva
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] mb-6 text-foreground uppercase tracking-tight">
          A Arquitetura
          <br />
          <span className="text-primary text-glow">do Lucro</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
          Como Estruturar Gestão e Finanças para Escalar sua empresa
          com previsibilidade e lucro real.
        </p>


        {/* Mentor image */}
        <div className="w-48 sm:w-56 md:w-64 lg:w-72 mb-10">
          <img
            src={mentorsImg}
            alt="Rebeca Maia e Lucas Nigro — Mentores da Masterclass"
            className="w-full h-auto drop-shadow-[0_0_40px_hsl(var(--primary)/0.2)]"
            loading="eager"
            decoding="async"
          />
        </div>

        <CtaButton />
      </div>
    </div>
  </section>
);

export default HeroSection;
