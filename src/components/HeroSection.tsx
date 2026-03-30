import mentorsImg from "@/assets/beca_e_lucas.png";
import bgImg from "@/assets/background.png";
import CtaButton from "./CtaButton";

const HeroSection = () => (
  <section className="relative flex flex-col overflow-hidden">
    {/* Network background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    />
    <div className="absolute inset-0 bg-background/40" />

    {/* Content */}
    <div className="relative z-10 flex flex-col flex-1">
      {/* Top: Badge + Title + Subtitle */}
      <div className="flex flex-col items-center text-center pt-12 sm:pt-16 px-6">
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
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Como Estruturar Gestão e Finanças para Escalar sua empresa
          com previsibilidade e lucro real.
        </p>
      </div>

      {/* Bottom: CTA + Date on the left, Mentors spanning bottom */}
      <div className="relative pt-2">
        {/* Gradient glow behind mentors */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container max-w-6xl px-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-end gap-6">
            {/* Left: CTA + Date */}
            <div className="flex flex-col items-start gap-4 pb-8 sm:pb-12 lg:pb-16 z-10">
              <CtaButton />
              <p className="text-foreground font-semibold text-sm sm:text-base tracking-wide">
                09 de Abril | 19H | Online
              </p>
            </div>

            {/* Right: Mentors image */}
            <div className="flex-1 flex justify-center sm:justify-end">
              <img
                src={mentorsImg}
                alt="Rebeca Maia e Lucas Nigro — Mentores da Masterclass"
                className="w-[320px] sm:w-[420px] md:w-[500px] lg:w-[580px] h-auto drop-shadow-[0_0_60px_hsl(var(--primary)/0.15)]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
  </section>
);

export default HeroSection;
