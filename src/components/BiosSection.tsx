import rebecaImg from "@/assets/rebeca_maia.png";
import lucasImg from "@/assets/lucas.png";

const bios = [
  {
    img: rebecaImg,
    name: "Rebeca Maia",
    role: "Mentora de Gestão",
    bio: "Mentora com 10+ anos de experiência em destravar operações familiares e transformar empresas dependentes do dono em organizações autônomas.",
  },
  {
    img: lucasImg,
    name: "Lucas Nigro",
    role: "Especialista Financeiro",
    bio: "Especialista em gestão financeira de alta complexidade, ajudando empresários a encontrar lucro real e escalar com segurança.",
  },
];

const BiosSection = () => (
  <footer className="py-16 px-6 border-t border-border">
    <div className="container max-w-3xl">
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-10">
        {bios.map((b) => (
          <div
            key={b.name}
            className="flex items-start gap-5 max-w-sm border border-border rounded-xl p-5 bg-card/50"
          >
            <img
              src={b.img}
              alt={b.name}
              className="w-20 h-20 rounded-full object-cover object-top border-2 border-primary/40 flex-shrink-0 shadow-[0_0_15px_hsl(var(--primary)/0.15)]"
            />
            <div>
              <h4 className="text-foreground font-bold text-sm">{b.name}</h4>
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                {b.role}
              </span>
              <p className="text-muted-foreground text-xs leading-relaxed mt-2">
                {b.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-muted-foreground/50 text-xs mt-12">
        © 2026 Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default BiosSection;
