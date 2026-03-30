import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface QualificationFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RAMO_OPTIONS = [
  "Comércio",
  "Serviços",
  "Indústria",
  "Saúde",
  "Educação",
  "Tecnologia",
  "Alimentação",
];

const COLABORADORES_OPTIONS = [
  "Só eu",
  "2 a 5",
  "6 a 15",
  "16 a 30",
  "31 a 50",
  "Mais de 50",
];

const FATURAMENTO_OPTIONS = [
  "Entre 10k e 50k",
  "Entre 50k e 150k",
  "Entre 150k e 500k",
  "Entre 500k e 1M",
  "Acima de 1M",
];

const DESAFIOS_OPTIONS = [
  "Falta de processos claros",
  "Equipe desalinhada",
  "Margem de lucro baixa",
  "Dificuldade em delegar",
  "Crescimento estagnado",
  "Fluxo de caixa instável",
  "Falta de indicadores financeiros",
  "Dependência do dono na operação",
];

type FormState = {
  nome: string;
  sobrenome: string;
  email: string;
  whatsapp: string;
  ramo: string;
  ramoOutro: string;
  colaboradores: string;
  faturamento: string;
  desafios: string[];
};

const initial: FormState = {
  nome: "",
  sobrenome: "",
  email: "",
  whatsapp: "",
  ramo: "",
  ramoOutro: "",
  colaboradores: "",
  faturamento: "",
  desafios: [],
};

type Result = "qualified" | "not_qualified" | null;

const TOTAL_STEPS = 4;

const QualificationFormModal = ({ open, onOpenChange }: QualificationFormModalProps) => {
  const [form, setForm] = useState<FormState>(initial);
  const [result, setResult] = useState<Result>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [step, setStep] = useState(0); // 0 = intro, 1-4 = form steps
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const containerRef = useRef<HTMLDivElement>(null);

  const set = (key: keyof FormState, value: string | string[]) =>
    setForm((p) => ({ ...p, [key]: value }));

  const toggleDesafio = (d: string) =>
    setForm((p) => ({
      ...p,
      desafios: p.desafios.includes(d)
        ? p.desafios.filter((x) => x !== d)
        : [...p.desafios, d],
    }));

  const validateStep = (s: number): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (s === 1) {
      if (!form.nome.trim()) e.nome = "Obrigatório";
      if (!form.sobrenome.trim()) e.sobrenome = "Obrigatório";
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = "Email inválido";
      if (!form.whatsapp.trim() || form.whatsapp.replace(/\D/g, "").length < 10)
        e.whatsapp = "WhatsApp inválido";
    }
    if (s === 2) {
      if (!form.ramo) e.ramo = "Selecione um ramo";
      if (form.ramo === "Outro" && !form.ramoOutro.trim()) e.ramoOutro = "Especifique";
    }
    if (s === 3) {
      if (!form.colaboradores) e.colaboradores = "Selecione";
      if (!form.faturamento) e.faturamento = "Selecione";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goNext = () => {
    if (step > 0 && !validateStep(step)) return;
    setDirection("next");
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const goPrev = () => {
    if (step > 0) {
      setDirection("prev");
      setStep(step - 1);
      setErrors({});
    }
  };

  const handleSubmit = async () => {
    const disqualified =
      form.colaboradores === "Só eu" || form.faturamento === "Entre 10k e 50k";
    const qualified = !disqualified;

    // Save lead to Supabase
    try {
      await supabase.from("leads").insert({
        nome: form.nome,
        sobrenome: form.sobrenome,
        email: form.email,
        whatsapp: form.whatsapp,
        ramo: form.ramo,
        ramo_outro: form.ramo === "Outro" ? form.ramoOutro : null,
        colaboradores: form.colaboradores,
        faturamento: form.faturamento,
        desafios: form.desafios,
        qualified,
      });
    } catch (err) {
      console.error("Error saving lead:", err);
    }

    setResult(qualified ? "qualified" : "not_qualified");
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setForm(initial);
      setResult(null);
      setErrors({});
      setStep(0);
    }, 300);
  };

  const inputClass =
    "w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all";
  const errorClass = "text-xs text-red-400 mt-1";
  const labelClass = "text-sm font-semibold text-foreground mb-2 block";
  const chipClass = (active: boolean) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-xl border cursor-pointer transition-all duration-200 text-sm ${
      active
        ? "border-primary/60 bg-primary/10 text-foreground shadow-[0_0_12px_hsl(var(--primary)/0.1)]"
        : "border-border/40 text-muted-foreground hover:border-border hover:bg-card/50"
    }`;

  // ── Not Qualified ──
  if (result === "not_qualified") {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-md w-[92vw] rounded-2xl border-border/40 bg-card/95 backdrop-blur-xl p-8 shadow-[0_0_60px_hsl(var(--background)/0.8)]">
          <DialogTitle className="sr-only">Resultado</DialogTitle>
          <div className="text-center space-y-5">
            <div className="text-4xl">🤝</div>
            <h3 className="text-xl font-bold text-foreground">
              Obrigado pelo interesse!
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Analisamos seu perfil e entendemos que, neste momento, a
              masterclass pode não ser a mais indicada para o estágio atual do
              seu negócio. E tudo bem, isso só indica que ainda não é a hora
              certa.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Siga fortalecendo a base do negócio. Para continuar evoluindo,
              acompanhe os conteúdos:
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://www.instagram.com/lucasnigro.financas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border/40 bg-background/50 text-sm text-foreground hover:border-primary/40 transition-all"
              >
                📊 Lucas Nigro - @lucasnigro.financas
              </a>
              <a
                href="https://www.instagram.com/rebecarmaia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border/40 bg-background/50 text-sm text-foreground hover:border-primary/40 transition-all"
              >
                ⚙️ Rebeca Maia - @rebecarmaia
              </a>
            </div>
            <button
              onClick={handleClose}
              className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Fechar
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // ── Qualified ──
  if (result === "qualified") {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-lg w-[95vw] rounded-2xl border-border/30 bg-card/95 backdrop-blur-xl p-0 shadow-[0_0_80px_hsl(var(--primary)/0.08)] overflow-hidden">
          <DialogTitle className="sr-only">Aplicação Aprovada</DialogTitle>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative px-8 py-10 space-y-6">
            {/* Icon */}
            <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Headline */}
            <div className="text-center space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Aplicação Aprovada</p>
              <h3 className="text-xl sm:text-2xl font-black text-foreground leading-tight">
                Seja bem-vindo à Mesa de Estratégia.
              </h3>
            </div>

            {/* Subheadline */}
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              Analisamos os dados da sua operação e confirmamos que seu momento de negócio está alinhado com a metodologia da Masterclass. Você acaba de garantir seu lugar entre um grupo seleto de empresários focados em escala e alta performance.
            </p>

            <div className="w-12 h-0.5 bg-border/50 mx-auto rounded-full" />

            {/* Corpo */}
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              Para garantir que você receba todos os materiais prévios, o link da transmissão e as ferramentas de análise que utilizaremos ao vivo, você precisa entrar agora no nosso <span className="text-foreground font-semibold">Grupo VIP de Acesso</span>.
            </p>

            {/* O que acontece */}
            <div className="rounded-xl border border-border/40 bg-background/40 p-4 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">O que acontece lá dentro</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Entrega de materiais complementares, avisos importantes e o link exclusivo para a Masterclass.
              </p>
            </div>

            {/* Privacidade */}
            <p className="text-xs text-muted-foreground/70 text-center italic">
              🔒 O grupo é silencioso e focado exclusivamente na sua preparação para o evento.
            </p>

            {/* CTA */}
            <a
              href="https://chat.whatsapp.com/KnqQEFMNzdtIFjuKMQdzmM?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wide transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] active:scale-[0.98]"
            >
              Acessar Grupo VIP no WhatsApp
            </a>

            <button
              onClick={handleClose}
              className="block mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Fechar
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // ── Step content ──
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6 text-center">
            <div className="space-y-3">
              <h3 className="text-lg font-black text-foreground uppercase tracking-tight">
                Aplicação de Acesso
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As vagas são limitadas para garantir o nível técnico do grupo. Preencha os dados abaixo para validarmos se o momento atual da sua empresa está alinhado com nossa estratégia de escala.
              </p>
              <p className="text-sm text-primary font-semibold italic">
                Não é um evento de massa; é uma mesa de decisões.
              </p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Nome *</label>
                <input className={inputClass} placeholder="Seu nome" value={form.nome} onChange={(e) => set("nome", e.target.value)} maxLength={50} />
                {errors.nome && <p className={errorClass}>{errors.nome}</p>}
              </div>
              <div>
                <label className={labelClass}>Sobrenome *</label>
                <input className={inputClass} placeholder="Seu sobrenome" value={form.sobrenome} onChange={(e) => set("sobrenome", e.target.value)} maxLength={50} />
                {errors.sobrenome && <p className={errorClass}>{errors.sobrenome}</p>}
              </div>
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input type="email" className={inputClass} placeholder="seu@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} maxLength={100} />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>
            <div>
              <label className={labelClass}>WhatsApp *</label>
              <input type="tel" className={inputClass} placeholder="(00) 00000-0000" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} maxLength={20} />
              {errors.whatsapp && <p className={errorClass}>{errors.whatsapp}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <label className={labelClass}>Ramo de atuação *</label>
            <div className="grid grid-cols-2 gap-2">
              {[...RAMO_OPTIONS, "Outro"].map((r) => (
                <label key={r} className={chipClass(form.ramo === r)}>
                  <input type="radio" name="ramo" value={r} checked={form.ramo === r} onChange={() => set("ramo", r)} className="sr-only" />
                  <span>{r}</span>
                </label>
              ))}
            </div>
            {form.ramo === "Outro" && (
              <input className={`${inputClass} mt-2`} placeholder="Qual ramo?" value={form.ramoOutro} onChange={(e) => set("ramoOutro", e.target.value)} maxLength={50} />
            )}
            {errors.ramo && <p className={errorClass}>{errors.ramo}</p>}
          </div>
        );
      case 3:
        return (
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Quantos colaboradores? *</label>
              <div className="grid grid-cols-2 gap-2">
                {COLABORADORES_OPTIONS.map((c) => (
                  <label key={c} className={chipClass(form.colaboradores === c)}>
                    <input type="radio" name="colaboradores" value={c} checked={form.colaboradores === c} onChange={() => set("colaboradores", c)} className="sr-only" />
                    <span>{c}</span>
                  </label>
                ))}
              </div>
              {errors.colaboradores && <p className={errorClass}>{errors.colaboradores}</p>}
            </div>
            <div>
              <label className={labelClass}>Faturamento mensal *</label>
              <div className="grid grid-cols-1 gap-2">
                {FATURAMENTO_OPTIONS.map((f) => (
                  <label key={f} className={chipClass(form.faturamento === f)}>
                    <input type="radio" name="faturamento" value={f} checked={form.faturamento === f} onChange={() => set("faturamento", f)} className="sr-only" />
                    <span>{f}</span>
                  </label>
                ))}
              </div>
              {errors.faturamento && <p className={errorClass}>{errors.faturamento}</p>}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <label className={labelClass}>Quais seus maiores desafios?</label>
            <div className="grid grid-cols-1 gap-2">
              {DESAFIOS_OPTIONS.map((d) => (
                <label key={d} className={chipClass(form.desafios.includes(d))}>
                  <input type="checkbox" checked={form.desafios.includes(d)} onChange={() => toggleDesafio(d)} className="sr-only" />
                  <span>{d}</span>
                </label>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg w-[95vw] rounded-2xl border-border/30 bg-card/95 backdrop-blur-xl p-6 sm:p-8 shadow-[0_0_80px_hsl(var(--background)/0.9)]">
        <DialogTitle className="text-xl font-black text-foreground text-center mb-1 uppercase tracking-tight">
          Solicitar Convite
        </DialogTitle>

        {/* Progress bar */}
        {step > 0 && (
          <div className="flex items-center gap-1.5 mb-4">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  i < step ? "bg-primary" : "bg-border/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* Step content with slide animation */}
        <div ref={containerRef} className="overflow-hidden">
          <div
            key={step}
            className={`animate-fade-up`}
            style={{ animationDuration: "0.3s" }}
          >
            {renderStep()}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 gap-3">
          {step > 0 ? (
            <button
              onClick={goPrev}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Voltar
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={goNext}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all active:scale-[0.98] ${
              step === TOTAL_STEPS
                ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] w-full justify-center"
                : step === 0
                ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] mx-auto"
                : "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
            }`}
          >
            {step === 0 ? "Iniciar Aplicação" : step === TOTAL_STEPS ? "Enviar Solicitação" : "Próximo"}
            {step > 0 && step < TOTAL_STEPS && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QualificationFormModal;
