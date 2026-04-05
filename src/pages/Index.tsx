import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ProblemaSection from "@/components/ProblemaSection";
import LogosCarouselSection from "@/components/LogosCarouselSection";
import SolucaoSection from "@/components/SolucaoSection";
import MetodosSection from "@/components/MetodosSection";
import ParaVoceSection from "@/components/ParaVoceSection";
import logoFooter from "@/assets/logo-footer-sm.webp";

const Index = () => (
  <main className="min-h-screen bg-background">
    <HeroSection />
    <ProblemaSection />
    <LogosCarouselSection />
    <SolucaoSection />
    <MetodosSection />
    <ParaVoceSection />

    <footer className="flex flex-col items-center gap-6 border-t border-border/30 px-6 py-10">
      <img src={logoFooter} alt="Rumo à Máxima Potência" className="h-10 w-40" width={160} height={40} />
      <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
        <Link to="/termos-de-uso" className="underline underline-offset-2 transition hover:text-primary">
          Termos de Uso
        </Link>
        <span>•</span>
        <Link to="/politica-de-privacidade" className="underline underline-offset-2 transition hover:text-primary">
          Política de Privacidade
        </Link>
      </div>
      <p className="text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Masterclass. Todos os direitos reservados.
      </p>
    </footer>
  </main>
);

export default Index;
