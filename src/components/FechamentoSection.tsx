import CtaButton from "./CtaButton";
import { CalendarDays, FileText, Zap } from "lucide-react";

const perks = [
  { icon: CalendarDays, text: "Link de acesso exclusivo dia 09 de Abril" },
  { icon: FileText, text: "Materiais complementares" },
  { icon: Zap, text: "Prioridade no plano de destrave" },
];

const FechamentoSection = () => (
  <section className="py-20 sm:py-28 px-6">
    <div className="container max-w-3xl text-center">
      <div className="relative border border-primary/30 rounded-2xl p-8 sm:p-14 border-glow bg-card/40 overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10">
          {/* Date highlight */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <CalendarDays className="w-4 h-4 text-primary" />
            <span className="text-primary font-bold text-sm">09 de Abril - Ao Vivo</span>
          </div>

          <span className="block text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Grupo VIP de Antecipação
          </span>
          <p className="text-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Este é um encontro técnico e exclusivo para empresários que buscam
            governança e lucro real. Não faremos uma apresentação teórica, mas sim
            uma <strong className="text-primary">intervenção estratégica</strong>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-8 mb-10">
            {perks.map((p) => (
              <div key={p.text} className="flex items-center gap-3 text-muted-foreground text-sm">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                  <p.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-left">{p.text}</span>
              </div>
            ))}
          </div>

          <CtaButton />
        </div>
      </div>
    </div>
  </section>
);

export default FechamentoSection;
