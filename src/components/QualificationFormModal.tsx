import { useState } from "react";
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

const QualificationFormModal = ({ open, onOpenChange }: QualificationFormModalProps) => {
  const [form, setForm] = useState<FormState>(initial);
  const [result, setResult] = useState<Result>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (key: keyof FormState, value: string | string[]) =>
    setForm((p) => ({ ...p, [key]: value }));

  const toggleDesafio = (d: string) =>
    setForm((p) => ({
      ...p,
      desafios: p.desafios.includes(d)
        ? p.desafios.filter((x) => x !== d)
        : [...p.desafios, d],
    }));

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.nome.trim()) e.nome = "Obrigatório";
    if (!form.sobrenome.trim()) e.sobrenome = "Obrigatório";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email inválido";
    if (!form.whatsapp.trim() || form.whatsapp.replace(/\D/g, "").length < 10)
      e.whatsapp = "WhatsApp inválido";
    if (!form.ramo) e.ramo = "Selecione um ramo";
    if (form.ramo === "Outro" && !form.ramoOutro.trim()) e.ramoOutro = "Especifique";
    if (!form.colaboradores) e.colaboradores = "Selecione";
    if (!form.faturamento) e.faturamento = "Selecione";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const disqualified =
      form.colaboradores === "Só eu" || form.faturamento === "Entre 10k e 50k";
    setResult(disqualified ? "not_qualified" : "qualified");
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setForm(initial);
      setResult(null);
      setErrors({});
    }, 300);
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";
  const errorClass = "text-xs text-red-400 mt-1";
  const labelClass = "text-sm font-semibold text-foreground mb-2 block";
  const radioClass =
    "flex items-center gap-3 px-4 py-2.5 rounded-lg border cursor-pointer transition-all text-sm";

  if (result === "not_qualified") {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-md w-[92vw] border-border bg-card p-8">
          <DialogTitle className="sr-only">Resultado</DialogTitle>
          <div className="text-center space-y-5">
            <div className="text-4xl">🤝</div>
            <h3 className="text-xl font-bold text-foreground">
              Obrigado pelo interesse!
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Analisamos seu perfil e entendemos que, neste momento, o foco da
              masterclass pode não ser o mais indicado para o estágio atual do
              seu negócio. E tudo bem — isso só indica que ainda não é a hora
              certa.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nossa recomendação é seguir fortalecendo a base do negócio,
              especialmente vendas, consistência e operação. Para continuar
              evoluindo, acompanhe os conteúdos:
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://www.instagram.com/lucasnigro.financas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-secondary/50 text-sm text-foreground hover:border-primary/50 transition-all"
              >
                📊 Lucas Nigro — @lucasnigro.financas
              </a>
              <a
                href="https://www.instagram.com/rebecarmaia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-secondary/50 text-sm text-foreground hover:border-primary/50 transition-all"
              >
                ⚙️ Rebeca Maia — @rebecarmaia
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

  if (result === "qualified") {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-md w-[92vw] border-border bg-card p-8">
          <DialogTitle className="sr-only">Convite Aprovado</DialogTitle>
          <div className="text-center space-y-5">
            <div className="text-4xl">🎉</div>
            <h3 className="text-xl font-bold text-foreground">
              Parabéns! Seu perfil foi aprovado.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Você tem o perfil ideal para essa masterclass. Entre no grupo
              exclusivo do WhatsApp para receber todas as informações:
            </p>
            <a
              href="#LINK_WHATSAPP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold text-sm transition-all"
            >
              Entrar no Grupo do WhatsApp
            </a>
            <button
              onClick={handleClose}
              className="mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Fechar
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg w-[95vw] max-h-[90vh] overflow-y-auto border-border bg-card p-6 sm:p-8">
        <DialogTitle className="text-xl font-bold text-foreground text-center mb-1">
          Solicitar Convite
        </DialogTitle>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Preencha para verificar se seu perfil é compatível com a masterclass.
        </p>

        <div className="space-y-5">
          {/* Nome e Sobrenome */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>Nome *</label>
              <input
                className={inputClass}
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => set("nome", e.target.value)}
                maxLength={50}
              />
              {errors.nome && <p className={errorClass}>{errors.nome}</p>}
            </div>
            <div>
              <label className={labelClass}>Sobrenome *</label>
              <input
                className={inputClass}
                placeholder="Seu sobrenome"
                value={form.sobrenome}
                onChange={(e) => set("sobrenome", e.target.value)}
                maxLength={50}
              />
              {errors.sobrenome && <p className={errorClass}>{errors.sobrenome}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>Email *</label>
            <input
              type="email"
              className={inputClass}
              placeholder="seu@email.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              maxLength={100}
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>

          {/* WhatsApp */}
          <div>
            <label className={labelClass}>WhatsApp *</label>
            <input
              type="tel"
              className={inputClass}
              placeholder="(00) 00000-0000"
              value={form.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              maxLength={20}
            />
            {errors.whatsapp && <p className={errorClass}>{errors.whatsapp}</p>}
          </div>

          {/* Ramo */}
          <div>
            <label className={labelClass}>Ramo de atuação *</label>
            <div className="grid grid-cols-2 gap-2">
              {[...RAMO_OPTIONS, "Outro"].map((r) => (
                <label
                  key={r}
                  className={`${radioClass} ${
                    form.ramo === r
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-muted-foreground/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="ramo"
                    value={r}
                    checked={form.ramo === r}
                    onChange={() => set("ramo", r)}
                    className="sr-only"
                  />
                  <span>{r}</span>
                </label>
              ))}
            </div>
            {form.ramo === "Outro" && (
              <input
                className={`${inputClass} mt-2`}
                placeholder="Qual ramo?"
                value={form.ramoOutro}
                onChange={(e) => set("ramoOutro", e.target.value)}
                maxLength={50}
              />
            )}
            {errors.ramo && <p className={errorClass}>{errors.ramo}</p>}
          </div>

          {/* Colaboradores */}
          <div>
            <label className={labelClass}>Quantos colaboradores? *</label>
            <div className="grid grid-cols-2 gap-2">
              {COLABORADORES_OPTIONS.map((c) => (
                <label
                  key={c}
                  className={`${radioClass} ${
                    form.colaboradores === c
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-muted-foreground/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="colaboradores"
                    value={c}
                    checked={form.colaboradores === c}
                    onChange={() => set("colaboradores", c)}
                    className="sr-only"
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
            {errors.colaboradores && <p className={errorClass}>{errors.colaboradores}</p>}
          </div>

          {/* Faturamento */}
          <div>
            <label className={labelClass}>Faturamento mensal *</label>
            <div className="grid grid-cols-1 gap-2">
              {FATURAMENTO_OPTIONS.map((f) => (
                <label
                  key={f}
                  className={`${radioClass} ${
                    form.faturamento === f
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-muted-foreground/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="faturamento"
                    value={f}
                    checked={form.faturamento === f}
                    onChange={() => set("faturamento", f)}
                    className="sr-only"
                  />
                  <span>{f}</span>
                </label>
              ))}
            </div>
            {errors.faturamento && <p className={errorClass}>{errors.faturamento}</p>}
          </div>

          {/* Desafios */}
          <div>
            <label className={labelClass}>Quais seus maiores desafios?</label>
            <div className="grid grid-cols-1 gap-2">
              {DESAFIOS_OPTIONS.map((d) => (
                <label
                  key={d}
                  className={`${radioClass} ${
                    form.desafios.includes(d)
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-muted-foreground/50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={form.desafios.includes(d)}
                    onChange={() => toggleDesafio(d)}
                    className="sr-only"
                  />
                  <span>{d}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-all active:scale-[0.98]"
          >
            Enviar Solicitação
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QualificationFormModal;
