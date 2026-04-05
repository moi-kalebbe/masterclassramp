import { CheckCircle2, XCircle } from "lucide-react";
import CtaButton from "./CtaButton";

const paraVoce = [
  "Você é o dono ou sócio de uma empresa com operação rodando",
  "Sua empresa já fatura, mas o lucro não acompanha o crescimento",
  "A empresa depende da sua presença para funcionar e isso te preocupa",
  "Você quer escalar com controle, não só faturar mais caos",
  "Você tem equipe e quer que ela funcione sem você no centro de cada decisão",
  "Você está pronto para implementar e não apenas ouvir",
];

const naoParaVoce = [
  "Você ainda está no processo de validar seu modelo de negócio",
  "Você é funcionário CLT buscando empreender no futuro",
  "Você procura fórmulas prontas e não está disposto a implementar",
  "Sua empresa está no início e ainda não tem processos ou equipe mínima",
  "Você acredita que vender mais resolve todos os problemas do negócio",
  "Você não tem interesse em profissionalizar a gestão e quer crescer a qualquer custo",
];

const ParaVoceSection = () => (
  <section className="relative overflow-hidden px-6 py-20 sm:py-28">
    <div className="absolute inset-0 bg-card/30" />

    <div className="relative container max-w-5xl">
      <span className="mb-3 block text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Antes de se inscrever
      </span>
      <h2 className="mb-3 text-center text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        Esta masterclass é <span className="text-primary">para você?</span>
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
        Ela foi desenhada para um perfil muito específico de empresário. Veja se você se encaixa.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border/50 bg-background/60 p-6 backdrop-blur-sm sm:p-8">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <CheckCircle2 className="h-3.5 w-3.5" /> É para você se...
          </span>
          <ul className="space-y-4">
            {paraVoce.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border/50 bg-background/60 p-6 backdrop-blur-sm sm:p-8">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-muted-foreground/30 bg-muted/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <XCircle className="h-3.5 w-3.5" /> Não é para você se...
          </span>
          <ul className="space-y-4">
            {naoParaVoce.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground/60" />
                <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="mb-6 text-sm text-muted-foreground sm:text-base">
          Se você se identificou com o lado esquerdo, esta masterclass foi feita para você.
        </p>
        <CtaButton />
      </div>
    </div>
  </section>
);

export default ParaVoceSection;
