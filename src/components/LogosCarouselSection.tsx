import amcham from "@/assets/logos/amcham.png";
import toyota from "@/assets/logos/toyota.png";
import greenjoy from "@/assets/logos/greenjoy.png";
import unesco from "@/assets/logos/unesco.png";
import espacolaser from "@/assets/logos/espacolaser.png";
import oboticario from "@/assets/logos/oboticario.png";
import cardinigro from "@/assets/logos/cardinigro.png";
import caracol from "@/assets/logos/caracol.png";
import subway from "@/assets/logos/subway.png";
import saocamilo from "@/assets/logos/saocamilo.png";

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
    <div className="container max-w-4xl px-6 mb-10 text-center">
      <p className="text-sm sm:text-base text-muted-foreground tracking-wide">
        Métodos aplicados em diversas empresas como...
      </p>
    </div>

    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-logos-scroll">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-6 sm:px-10 flex items-center justify-center min-w-[120px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 sm:h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogosCarouselSection;
