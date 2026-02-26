import { Users, CalendarDays, Radio } from "lucide-react";
import CtaButton from "./CtaButton";

const badges = [
  { icon: Users, label: "200+ empresários" },
  { icon: CalendarDays, label: "03 de Março" },
  { icon: Radio, label: "Ao vivo" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    />
    <div className="absolute inset-0 bg-background/85" />
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

    <div className="relative z-10 container max-w-4xl text-center px-6 py-24">
      <div className="animate-fade-up">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-6">
          Masterclass Exclusiva
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-foreground">
          Da operação caótica ao{" "}
          <span className="text-primary text-glow">comando estratégico</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          O plano de intervenção para empresários que já validaram seu modelo de
          negócio e agora precisam profissionalizar a gestão e o lucro para
          sustentar a próxima escala.
        </p>

        {/* Stats badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-muted-foreground"
            >
              <b.icon className="w-4 h-4 text-primary" />
              <span>{b.label}</span>
            </div>
          ))}
        </div>

        <CtaButton />
      </div>
    </div>
  </section>
);

export default HeroSection;
