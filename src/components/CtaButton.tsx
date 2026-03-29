import { useState } from "react";
import EduzzCheckoutModal from "./EduzzCheckoutModal";

interface CtaButtonProps {
  className?: string;
}

const CtaButton = ({ className = "" }: CtaButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`inline-block w-full sm:w-auto text-center bg-primary text-primary-foreground font-bold text-sm sm:text-base px-8 py-4 sm:py-5 rounded-lg btn-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide ${className}`}
      >
        Quero profissionalizar minha gestão e entrar no grupo
      </button>
      <EduzzCheckoutModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default CtaButton;
