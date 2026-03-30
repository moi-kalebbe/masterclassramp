import HeroSection from "@/components/HeroSection";
import ProblemaSection from "@/components/ProblemaSection";
import LogosCarouselSection from "@/components/LogosCarouselSection";
import SolucaoSection from "@/components/SolucaoSection";
import MetodosSection from "@/components/MetodosSection";
import ParaVoceSection from "@/components/ParaVoceSection";
import CtaButton from "@/components/CtaButton";


const Index = () => (
  <main className="bg-background min-h-screen">
    <HeroSection />
    <ProblemaSection />
    <LogosCarouselSection />
    <SolucaoSection />
    <MetodosSection />
    <ParaVoceSection />


    <footer className="py-8 px-6 border-t border-border/30 flex flex-col items-center gap-4">
      
      <p className="text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Masterclass — Todos os direitos reservados.
      </p>
    </footer>
  </main>
);

export default Index;
