import { Shield, Search, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "A Transição para o Comando",
    text: "O passo a passo para deixar de apagar incêndios operacionais e assumir o papel de Diretor Estratégico.",
  },
  {
    icon: Search,
    title: "Estancamento de Vazamentos",
    text: "Como identificar a ineficiência financeira silenciosa que drena sua margem mês após mês.",
  },
  {
    icon: TrendingUp,
    title: "Segurança para Escalar",
    text: "O ajuste fino entre Gestão e Finanças para crescer sem que o motor da empresa \"funda\" no caminho.",
  },
];

const DominarSection = () => (
  <section className="py-16 sm:py-24 px-6 bg-card/30">
    <div className="container max-w-3xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
        O que você vai dominar
      </h2>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.title} className="flex gap-5 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-foreground font-semibold text-base sm:text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DominarSection;
