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
  <section className="py-16 sm:py-20 overflow-hidden" style={{ contentVisibility: "auto", containIntrinsicSize: "640px" }}>
    <div className="container max-w-4xl px-6 mb-12 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground uppercase tracking-tight">
        Métodos aplicados em <span className="text-primary">diversas empresas</span>
      </h2>
      <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        Com uma metodologia pautada em métricas de alto desempenho, Lucas e Rebeca acumulam um portfólio de empresas que alcançaram novos patamares de eficiência e resultados.
      </p>
    </div>

    <div className="relative" style={{ contain: "layout style paint" }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-logos-scroll items-center" style={{ willChange: "transform", contain: "layout style" }}>
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-10 sm:px-14 flex items-center justify-center"
            style={{ width: 280 }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-44 sm:h-52 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              decoding="async"
              width={200}
              height={208}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogosCarouselSection;
