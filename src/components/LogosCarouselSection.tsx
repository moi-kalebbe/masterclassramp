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
    <div className="container max-w-4xl px-6 mb-12 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground uppercase tracking-tight">
        Métodos aplicados em <span className="text-primary">diversas empresas</span>
      </h2>
      <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        Com uma metodologia pautada em métricas de alto desempenho, Lucas e Rebeca acumulam um portfólio de empresas que alcançaram novos patamares de eficiência. A aplicação de estratégias validadas permite que seus métodos atuem diretamente no aumento da performance operacional e na otimização dos resultados financeiros das organizações atendidas.
      </p>
    </div>

    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-logos-scroll items-center">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-10 sm:px-14 flex items-center justify-center min-w-[220px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-44 sm:h-52 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogosCarouselSection;
