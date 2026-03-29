import HeroSection from "@/components/HeroSection";
import ProblemaSection from "@/components/ProblemaSection";
import SolucaoSection from "@/components/SolucaoSection";
import MetodosSection from "@/components/MetodosSection";
import CtaButton from "@/components/CtaButton";
import amchamLogo from "@/assets/amcham.png";

const Index = () => (
  <main className="bg-background min-h-screen">
    <HeroSection />
    <ProblemaSection />
    <SolucaoSection />
    <MetodosSection />

    {/* CTA final */}
    <section className="relative py-20 sm:py-28 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-card/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative container max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-4 uppercase tracking-tight">
          Pronto para <span className="text-primary">escalar?</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mb-10 leading-relaxed">
          Solicite seu convite e descubra se seu perfil é compatível com a
          masterclass.
        </p>
        <CtaButton />
      </div>
    </section>

    <footer className="py-8 px-6 border-t border-border/30">
      <p className="text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Masterclass — Todos os direitos reservados.
      </p>
    </footer>
  </main>
);

export default Index;
