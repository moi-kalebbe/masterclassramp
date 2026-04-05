interface CtaButtonProps {
  className?: string;
}

const CTA_HREF = "https://bbot.rumoamaximapotencia.com.br/masterclass";

const CtaButton = ({ className = "" }: CtaButtonProps) => (
  <a
    href={CTA_HREF}
    className={`inline-block w-full sm:w-auto text-center bg-primary text-primary-foreground font-bold text-sm sm:text-base px-8 py-4 sm:py-5 rounded-lg btn-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide ${className}`}
  >
    Quero Minha Vaga
  </a>
);

export default CtaButton;
