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
  <section className="relative py-20 sm:py-28 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-card/30" />

    <div className="relative container max-w-5xl">
      <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
        Antes de se inscrever
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-3 uppercase tracking-tight">
        Esta masterclass é <span className="text-primary">para você?</span>
      </h2>
      <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mb-12 leading-relaxed">
        Ela foi desenhada para um perfil muito específico de empresário. Veja se você se encaixa.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* É para você */}
        <div className="rounded-2xl border border-border/50 bg-background/60 backdrop-blur-sm p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <CheckCircle2 className="w-3.5 h-3.5" /> É para você se...
          </span>
          <ul className="space-y-4">
            {paraVoce.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm sm:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Não é para você */}
        <div className="rounded-2xl border border-border/50 bg-background/60 backdrop-blur-sm p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-muted-foreground/30 bg-muted/20 text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-6">
            <XCircle className="w-3.5 h-3.5" /> Não é para você se...
          </span>
          <ul className="space-y-4">
            {naoParaVoce.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground text-sm sm:text-base mb-6">
          Se você se identificou com o lado esquerdo, esta masterclass foi feita para você.
        </p>
        <CtaButton />
      </div>
    </div>
  </section>
);

export default ParaVoceSection;
