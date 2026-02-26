import rebecaImg from "@/assets/rebeca_maia.png";
import lucasImg from "@/assets/lucas.png";

const bios = [
  {
    img: rebecaImg,
    name: "Rebeca Maia",
    bio: "Mentora com 10+ anos de experiência em destravar operações familiares e transformar empresas dependentes do dono em organizações autônomas.",
  },
  {
    img: lucasImg,
    name: "Lucas Nigro",
    bio: "Especialista em gestão financeira de alta complexidade, ajudando empresários a encontrar lucro real e escalar com segurança.",
  },
];

const BiosSection = () => (
  <footer className="py-16 px-6 border-t border-border">
    <div className="container max-w-3xl">
      <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16">
        {bios.map((b) => (
          <div key={b.name} className="flex items-start gap-4 max-w-xs">
            <img
              src={b.img}
              alt={b.name}
              className="w-16 h-16 rounded-full object-cover object-top border-2 border-primary/30 flex-shrink-0"
            />
            <div>
              <h4 className="text-foreground font-semibold text-sm">{b.name}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed mt-1">
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
