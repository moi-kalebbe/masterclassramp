import { EyeOff, TrendingDown } from "lucide-react";

const PontoCegoSection = () => (
  <section className="py-16 sm:py-24 px-6">
    <div className="container max-w-4xl">
      <div className="relative border border-primary/30 rounded-xl p-8 sm:p-12 border-glow bg-card/50 overflow-hidden">
        {/* Background decorative icon */}
        <EyeOff className="absolute -right-6 -top-6 w-40 h-40 text-primary/[0.04]" />

        <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <EyeOff className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                O Ponto Cego do Lucro e o{" "}
                <span className="text-primary">Dono-Gargalo</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Escalar o caos é o caminho mais rápido para a falência. Quando o
              faturamento sobe, mas a margem líquida é consumida por custos
              invisíveis e decisões baseadas apenas na intuição, o risco do dono
              aumenta na mesma proporção das vendas.
            </p>
          </div>

          {/* Stat highlight */}
          <div className="flex flex-row md:flex-col gap-4">
            <div className="border border-border rounded-xl p-4 text-center bg-secondary/30 min-w-[120px]">
              <TrendingDown className="w-5 h-5 text-primary mx-auto mb-2" />
              <span className="block text-2xl font-black text-primary">80%</span>
              <span className="text-muted-foreground text-xs leading-tight block mt-1">
                dos empresários não conhecem sua margem real
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PontoCegoSection;
