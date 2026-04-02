import amcham from "@/assets/logos/amcham.webp";
import toyota from "@/assets/logos/toyota.webp";
import greenjoy from "@/assets/logos/greenjoy.webp";
import unesco from "@/assets/logos/unesco.webp";
import espacolaser from "@/assets/logos/espacolaser.webp";
import oboticario from "@/assets/logos/oboticario.webp";
import cardinigro from "@/assets/logos/cardinigro.webp";
import caracol from "@/assets/logos/caracol.webp";
import subway from "@/assets/logos/subway.webp";
import saocamilo from "@/assets/logos/saocamilo.webp";

const logos = [
  { src: amcham, alt: "Amcham" },
  { src: toyota, alt: "Toyota" },
  { src: greenjoy, alt: "Greenjoy" },
  { src: unesco, alt: "UNESCO" },
  { src: espacolaser, alt: "Espaço Laser" },
  { src: oboticario, alt: "O Boticário" },
  { src: cardinigro, alt: "Cardi Nigro" },
  { src: caracol, alt: "Caracol" },
  { src: subway, alt: "Subway" },
  { src: saocamilo, alt: "São Camilo" },
];

const LogosCarouselSection = () => (
  <section className="py-16 sm:py-20 overflow-hidden">
    <div className="container max-w-4xl px-6 mb-12 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground uppercase tracking-tight">
        Métodos aplicados em <span className="text-primary">diversas empresas</span>
      </h2>
      <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        Com uma metodologia pautada em métricas de alto desempenho, Lucas e Rebeca acumulam um portfólio de empresas que alcançaram novos patamares de eficiência e resultados.
      </p>
    </div>

    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div
        className="flex w-max items-center animate-logos-drift hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ willChange: "transform", transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
      >
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="flex shrink-0 items-center gap-3 pr-3 sm:gap-6 sm:pr-6"
            aria-hidden={copyIndex === 1}
          >
            {logos.map((logo) => (
              <div
                key={`${copyIndex}-${logo.alt}`}
                className="flex min-w-[148px] sm:min-w-[208px] md:min-w-[220px] flex-shrink-0 items-center justify-center px-4 sm:px-6"
              >
                <img
                  src={logo.src}
                  alt={copyIndex === 0 ? logo.alt : ""}
                  className="block h-20 sm:h-24 md:h-28 w-auto object-contain opacity-70"
                  loading="lazy"
                  decoding="async"
                  width={200}
                  height={208}
                  sizes="(max-width: 640px) 132px, (max-width: 1024px) 176px, 208px"
                  style={{ backfaceVisibility: "hidden" }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogosCarouselSection;
