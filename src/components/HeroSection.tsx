import mentorsImg from "@/assets/beca_e_lucas.png";
import CtaButton from "./CtaButton";

const HeroSection = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
    />
    <div className="absolute inset-0 bg-background/90" />
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

    <div className="relative z-10 container max-w-5xl px-6 py-16 sm:py-20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Text */}
        <div className="flex-1 text-center md:text-left animate-fade-up">
          <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest mb-4">
            Masterclass Exclusiva
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 text-foreground">
            A Arquitetura do Lucro:{" "}
            <span className="text-primary text-glow">
              Como Estruturar Gestão e Finanças para Escalar
            </span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed mb-4">
            A masterclass para empresários que já validaram seu modelo de negócio
            e agora precisam profissionalizar a gestão e o lucro para sustentar a
            próxima escala.
          </p>

          {/* Prova social */}
          <p className="text-xs text-muted-foreground/70 mb-8">
            Métodos aplicados em empresas como{" "}
            <span className="text-foreground font-medium">Toyota</span>,{" "}
            <span className="text-foreground font-medium">O Boticário</span> e{" "}
            <span className="text-foreground font-medium">Amcham</span>
          </p>

          <CtaButton />
        </div>

        {/* Mentor image */}
        <div className="flex-shrink-0 w-56 sm:w-64 md:w-72 lg:w-80">
          <img
            src={mentorsImg}
            alt="Rebeca Maia e Lucas Nigro — Mentores da Masterclass"
            className="w-full h-auto drop-shadow-2xl"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
