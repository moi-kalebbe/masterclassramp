import rebecaImg from "@/assets/rebeca_maia.webp";
import lucasImg from "@/assets/lucas.webp";

const MetodosSection = () => (
  <section className="py-16 sm:py-24 px-6">
    <div className="container max-w-3xl text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
        Quem são os Mentores
      </h2>
      <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
        Mais de 10 anos desenhando estratégias para grandes holdings e
        acelerando PMEs com gestão real e inteligência financeira.
      </p>

      <div className="flex justify-center gap-6 mb-8">
        <img
          src={rebecaImg}
          alt="Rebeca Maia"
          loading="lazy"
          decoding="async"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover object-top border-2 border-primary/30"
        />
        <img
          src={lucasImg}
          alt="Lucas Nigro"
          loading="lazy"
          decoding="async"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover object-top border-2 border-primary/30"
        />
      </div>

      <div className="text-left space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <p>
          <span className="text-foreground font-semibold">Rebeca Maia</span> é
          mentora de gestão com mais de uma década transformando empresas
          dependentes do dono em organizações autônomas. Já atuou em operações
          familiares e grandes holdings, desenhando processos que libertam o
          empresário da operação.
        </p>
        <p>
          <span className="text-foreground font-semibold">Lucas Nigro</span> é
          especialista em gestão financeira de alta complexidade. Ajuda
          empresários a encontrar o lucro real dentro do próprio negócio e a
          escalar com segurança, usando indicadores que eliminam decisões no
          escuro.
        </p>
        <p>
          Juntos, unem <span className="text-foreground font-medium">Arquitetura de Processos</span> e{" "}
          <span className="text-foreground font-medium">Engenharia de Caixa</span> num
          plano integrado para empresários que já faturam, mas ainda não
          lucraram de verdade.
        </p>
      </div>
    </div>
  </section>
);

export default MetodosSection;
