interface CtaButtonProps {
  className?: string;
}

const CTA_LINK = "https://wa.me/5500000000000";

const CtaButton = ({ className = "" }: CtaButtonProps) => (
  <a
    href={CTA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block w-full sm:w-auto text-center bg-primary text-primary-foreground font-bold text-sm sm:text-base px-8 py-4 sm:py-5 rounded-lg btn-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide ${className}`}
  >
    Quero profissionalizar minha gestão e entrar no grupo
  </a>
);

export default CtaButton;
