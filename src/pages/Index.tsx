import HeroSection from "@/components/HeroSection";
import ProblemaSection from "@/components/ProblemaSection";
import SolucaoSection from "@/components/SolucaoSection";
import MetodosSection from "@/components/MetodosSection";
import CtaButton from "@/components/CtaButton";

const Index = () => (
  <main className="bg-background min-h-screen">
    <HeroSection />
    <ProblemaSection />
    <SolucaoSection />
    <MetodosSection />

    {/* CTA final + Footer */}
    <section className="py-16 px-6 text-center">
      <div className="container max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Pronto para profissionalizar sua gestão?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed">
          Solicite seu convite e descubra se seu perfil é compatível com a
          masterclass.
        </p>
        <CtaButton />
      </div>
    </section>

    <footer className="py-8 px-6 border-t border-border">
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Masterclass — Todos os direitos reservados.
      </p>
    </footer>
  </main>
);

export default Index;
