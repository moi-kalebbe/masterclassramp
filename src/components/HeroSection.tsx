import mentorsImg from "@/assets/beca_e_lucas.png";
import bgImg from "@/assets/background.png";
import { CalendarDays, Clock, Monitor } from "lucide-react";
import CtaButton from "./CtaButton";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => (
  <section className="relative flex flex-col overflow-hidden" style={{ contain: "layout style paint" }}>
    {/* Network background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})`, willChange: "auto" }}
    />
    <div className="absolute inset-0 bg-background/40" />

    {/* Content */}
    <div className="relative z-10 flex flex-col flex-1">
      {/* Top: Badge + Title + Subtitle */}
      <div className="flex flex-col items-center text-center pt-10 sm:pt-12 px-4 sm:px-6">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
          Masterclass exclusiva para empresários
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] mb-4 text-foreground uppercase tracking-tight">
          A Arquitetura
          <br />
          <span className="text-primary text-glow">do Lucro</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
          Como Estruturar Gestão e Finanças para Escalar sua empresa
          com previsibilidade e lucro real.
        </p>
      </div>

      {/* Bottom: CTA + Date on the left, Mentors spanning bottom */}
      <div className="relative pt-1">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container max-w-6xl px-4 sm:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
            {/* Left: CTA + Date */}
            <div className="flex flex-col items-center sm:items-start gap-4 pb-4 sm:pb-12 lg:pb-16 z-10 w-full sm:w-auto">
              <CtaButton onClick={onCtaClick} />
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-foreground font-semibold text-sm sm:text-base tracking-wide w-full">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm">
                  <CalendarDays className="w-4 h-4 text-primary" /> 09/04
                </span>
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm">
                  <Clock className="w-4 h-4 text-primary" /> 19H.
                </span>
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm">
                  <Monitor className="w-4 h-4 text-primary" /> Online
                </span>
              </div>
            </div>

            {/* Right: Mentors image */}
            <div className="flex-1 flex justify-center sm:justify-end">
              <img
                src={mentorsImg}
                alt="Rebeca Maia e Lucas Nigro - Mentores da Masterclass"
                className="w-[380px] sm:w-[480px] md:w-[560px] lg:w-[660px] h-auto drop-shadow-[0_0_60px_hsl(var(--primary)/0.15)]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={660}
                height={600}
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
