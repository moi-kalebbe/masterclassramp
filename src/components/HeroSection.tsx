import mentorsImg from "@/assets/beca_e_lucas.webp";
import mentorsImgMobile from "@/assets/beca_e_lucas-hero.webp";
import bgImg from "@/assets/background.webp";
import { CalendarDays, Clock, Monitor } from "lucide-react";
import CtaButton from "./CtaButton";

const HeroSection = () => (
  <section className="relative flex flex-col overflow-hidden">
    <img
      src={bgImg}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover object-center"
      fetchPriority="high"
      decoding="async"
      width={1200}
      height={800}
    />
    <div className="absolute inset-0 bg-background/40" />

    <div className="relative z-10 flex flex-1 flex-col">
      <div className="flex flex-col items-center px-4 pt-10 text-center sm:px-6 sm:pt-12">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
          Masterclass exclusiva para empresários
        </span>

        <h1 className="mb-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
          A Arquitetura
          <br />
          <span className="text-glow text-primary">do Lucro</span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
          Para empresários que faturam bem e ainda não conseguem sair da operação.
        </p>
      </div>

      <div className="relative pt-1">
        <div className="relative z-10 container max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end">
            <div className="z-10 flex w-full flex-col items-center gap-4 pb-4 sm:w-auto sm:items-start sm:pb-12 lg:pb-16">
              <CtaButton />
              <div className="flex w-full items-center justify-center gap-2 text-sm font-semibold tracking-wide text-foreground sm:justify-start sm:gap-3 sm:text-base">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 backdrop-blur-sm sm:gap-2 sm:px-4">
                  <CalendarDays className="h-4 w-4 text-primary" /> 09/04
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 backdrop-blur-sm sm:gap-2 sm:px-4">
                  <Clock className="h-4 w-4 text-primary" /> 19H
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 backdrop-blur-sm sm:gap-2 sm:px-4">
                  <Monitor className="h-4 w-4 text-primary" /> Online
                </span>
              </div>
            </div>

            <div className="flex flex-1 justify-center sm:justify-end">
              <img
                src={mentorsImgMobile}
                srcSet={`${mentorsImgMobile} 800w, ${mentorsImg} 1200w`}
                alt="Rebeca Maia e Lucas Nigro - Mentores da Masterclass"
                className="h-auto w-[380px] drop-shadow-[0_0_60px_hsl(var(--primary)/0.15)] sm:w-[480px] md:w-[560px] lg:w-[660px]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                sizes="(max-width: 640px) 380px, (max-width: 768px) 480px, (max-width: 1024px) 560px, 660px"
                width={660}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
