import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import logoFooter from "@/assets/logo-footer-sm.webp";

const ProblemaSection = lazy(() => import("@/components/ProblemaSection"));
const LogosCarouselSection = lazy(() => import("@/components/LogosCarouselSection"));
const SolucaoSection = lazy(() => import("@/components/SolucaoSection"));
const MetodosSection = lazy(() => import("@/components/MetodosSection"));
const ParaVoceSection = lazy(() => import("@/components/ParaVoceSection"));
const QualificationFormModal = lazy(() => import("@/components/QualificationFormModal"));

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="bg-background min-h-screen">
      <HeroSection onCtaClick={openModal} />
      <Suspense fallback={null}>
        <ProblemaSection onCtaClick={openModal} />
        <LogosCarouselSection />
        <SolucaoSection />
        <MetodosSection onCtaClick={openModal} />
        <ParaVoceSection onCtaClick={openModal} />
      </Suspense>

      <footer className="py-10 px-6 border-t border-border/30 flex flex-col items-center gap-6">
        <img src={logoFooter} alt="Rumo à Máxima Potência" className="h-10 w-40" width={160} height={40} />
        <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
          <Link to="/termos-de-uso" className="hover:text-primary transition underline underline-offset-2">Termos de Uso</Link>
          <span>•</span>
          <Link to="/politica-de-privacidade" className="hover:text-primary transition underline underline-offset-2">Política de Privacidade</Link>
        </div>
        <p className="text-center text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Masterclass. Todos os direitos reservados.
        </p>
      </footer>

      {modalOpen ? (
        <Suspense fallback={null}>
          <QualificationFormModal open={modalOpen} onOpenChange={setModalOpen} />
        </Suspense>
      ) : null}
    </main>
  );
};

export default Index;
