import { Shield, Search, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Shield,
    num: "01",
    title: "A Transição para o Comando",
    text: "O passo a passo para deixar de apagar incêndios operacionais e assumir o papel de Diretor Estratégico.",
  },
  {
    icon: Search,
    num: "02",
    title: "Estancamento de Vazamentos",
    text: "Como identificar a ineficiência financeira silenciosa que drena sua margem mês após mês.",
  },
  {
    icon: TrendingUp,
    num: "03",
    title: "Segurança para Escalar",
    text: "O ajuste fino entre Gestão e Finanças para crescer sem que o motor da empresa \"funda\" no caminho.",
  },
];

const DominarSection = () => (
  <section className="py-16 sm:py-24 px-6 bg-card/30">
    <div className="container max-w-5xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-14">
        O que você vai dominar
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="relative border border-border rounded-xl p-6 sm:p-8 bg-card hover:border-primary/40 transition-colors duration-300 group"
          >
            <span className="absolute top-4 right-4 text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
              {item.num}
            </span>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 mb-5">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-foreground font-bold text-base sm:text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DominarSection;
