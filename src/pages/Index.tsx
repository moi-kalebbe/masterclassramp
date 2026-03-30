import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ProblemaSection from "@/components/ProblemaSection";
import LogosCarouselSection from "@/components/LogosCarouselSection";
import SolucaoSection from "@/components/SolucaoSection";
import MetodosSection from "@/components/MetodosSection";
import ParaVoceSection from "@/components/ParaVoceSection";
import CtaButton from "@/components/CtaButton";
import logoFooter from "@/assets/logo-footer.png";


const Index = () => (
  <main className="bg-background min-h-screen">
    <HeroSection />
    <ProblemaSection />
    <LogosCarouselSection />
    <SolucaoSection />
    <MetodosSection />
    <ParaVoceSection />


    <footer className="py-10 px-6 border-t border-border/30 flex flex-col items-center gap-6">
      <img src={logoFooter} alt="Rumo à Máxima Potência" className="h-10 w-auto" />
      <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
        <Link to="/termos-de-uso" className="hover:text-primary transition underline underline-offset-2">Termos de Uso</Link>
        <span>•</span>
        <Link to="/politica-de-privacidade" className="hover:text-primary transition underline underline-offset-2">Política de Privacidade</Link>
      </div>
      <p className="text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Masterclass — Todos os direitos reservados.
      </p>
    </footer>
  </main>
);

export default Index;
