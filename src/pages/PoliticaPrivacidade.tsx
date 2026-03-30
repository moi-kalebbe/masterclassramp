import { Link } from "react-router-dom";

export default function PoliticaPrivacidade() {
  return (
    <div className="bg-background min-h-screen py-16 px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');
        .legal-body { max-width: 740px; margin: 0 auto; font-family: 'DM Sans', sans-serif; }
        .legal-body h1 { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 42px; text-transform: uppercase; line-height: 1; margin-bottom: 8px; }
        .legal-body h2 { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 20px; text-transform: uppercase; margin: 40px 0 12px; letter-spacing: 0.04em; border-left: 2px solid hsl(var(--primary)); padding-left: 12px; }
        .legal-body p { font-size: 15px; line-height: 1.75; margin-bottom: 14px; }
        .legal-body ul { margin: 0 0 14px 0; padding-left: 20px; }
        .legal-body ul li { font-size: 15px; line-height: 1.75; margin-bottom: 6px; }
        .legal-body a { text-underline-offset: 3px; }
      `}</style>

      <div className="legal-body">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary no-underline mb-10 hover:opacity-80 transition">
          ← Voltar para a página principal
        </Link>

        <h1 className="text-foreground">Política de Privacidade</h1>
        <p className="text-xs text-muted-foreground/50 tracking-wider mb-12">Última atualização: 29 de março de 2026</p>

        <h2 className="text-foreground">1. Quem somos</h2>
        <p className="text-muted-foreground/70">
          Esta Política de Privacidade é aplicada pela <strong className="text-foreground">RM Desenvolvimento Humano e Educação Corporativa LTDA</strong>,
          inscrita no CNPJ sob o número <strong className="text-foreground">49.585.305/0001-00</strong>, com nome fantasia
          <strong className="text-foreground"> Rumo à Máxima Potência</strong>, doravante denominada simplesmente "nós" ou "a empresa".
        </p>
        <p className="text-muted-foreground/70">
          Somos responsáveis pelo tratamento dos dados pessoais coletados por meio das páginas e formulários associados
          à Masterclass "Da Operação Caótica ao Comando Estratégico" e demais iniciativas educacionais da marca.
        </p>

        <h2 className="text-foreground">2. Quais dados coletamos</h2>
        <p className="text-muted-foreground/70">Ao preencher o formulário de inscrição em nossas páginas, coletamos os seguintes dados pessoais:</p>
        <ul className="text-muted-foreground/70">
          <li>Nome e sobrenome</li>
          <li>Endereço de e-mail</li>
          <li>Número de WhatsApp (telefone celular)</li>
          <li>Nome da empresa</li>
          <li>Informações sobre o perfil da empresa (faturamento, número de colaboradores)</li>
          <li>Desafios e interesses declarados voluntariamente no formulário</li>
        </ul>
        <p className="text-muted-foreground/70">
          Não coletamos dados sensíveis como origem racial, convicções religiosas, dados de saúde ou dados financeiros
          além dos declarados voluntariamente no formulário de qualificação.
        </p>

        <h2 className="text-foreground">3. Para que usamos seus dados</h2>
        <p className="text-muted-foreground/70">Seus dados são utilizados exclusivamente para as seguintes finalidades:</p>
        <ul className="text-muted-foreground/70">
          <li>Confirmar e gerenciar sua inscrição na masterclass ou evento solicitado</li>
          <li>Enviar informações relevantes sobre o evento, como link de acesso, data e horário</li>
          <li>Entrar em contato por WhatsApp ou e-mail com conteúdos educacionais relacionados aos temas da masterclass</li>
          <li>Avaliar o perfil de qualificação do inscrito para fins de curadoria do grupo VIP</li>
          <li>Aprimorar nossos conteúdos e ofertas com base nos interesses declarados</li>
        </ul>
        <p className="text-muted-foreground/70">
          Não utilizamos seus dados para fins de publicidade de terceiros, nem os vendemos ou cedemos a parceiros
          comerciais sem o seu consentimento explícito.
        </p>

        <h2 className="text-foreground">4. Como armazenamos seus dados</h2>
        <p className="text-muted-foreground/70">
          Os dados coletados por meio dos nossos formulários são armazenados em planilhas no
          <strong className="text-foreground"> Google Sheets</strong>, serviço da Google LLC, protegido por controles de
          acesso restritos aos membros da equipe responsável pela operação da masterclass.
        </p>
        <p className="text-muted-foreground/70">
          O Google Sheets está em conformidade com o Regulamento Geral de Proteção de Dados (GDPR) europeu e adota
          práticas compatíveis com a Lei Geral de Proteção de Dados (LGPD) brasileira. Os dados ficam armazenados em
          servidores da Google, podendo estar localizados fora do Brasil, com proteção equivalente à legislação nacional.
        </p>
        <p className="text-muted-foreground/70">
          Mantemos seus dados pelo prazo necessário para cumprir as finalidades descritas nesta política ou até que
          você solicite a exclusão, o que ocorrer primeiro.
        </p>

        <h2 className="text-foreground">5. Compartilhamento de dados</h2>
        <p className="text-muted-foreground/70">Seus dados podem ser acessados pelos seguintes agentes, sempre dentro das finalidades descritas:</p>
        <ul className="text-muted-foreground/70">
          <li><strong className="text-foreground">Google LLC</strong> — armazenamento via Google Sheets</li>
          <li><strong className="text-foreground">Equipe interna da Rumo à Máxima Potência</strong> — para gestão das inscrições e contato com inscritos</li>
        </ul>
        <p className="text-muted-foreground/70">
          Não compartilhamos seus dados com plataformas de publicidade, corretores de dados ou quaisquer terceiros
          fora do escopo acima sem o seu consentimento.
        </p>

        <h2 className="text-foreground">6. Seus direitos como titular dos dados</h2>
        <p className="text-muted-foreground/70">Em conformidade com a LGPD (Lei nº 13.709/2018), você tem direito a:</p>
        <ul className="text-muted-foreground/70">
          <li>Confirmar a existência de tratamento dos seus dados pessoais</li>
          <li>Acessar os dados que temos sobre você</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação dos seus dados</li>
          <li>Revogar o consentimento dado a qualquer momento</li>
          <li>Solicitar a portabilidade dos seus dados</li>
        </ul>
        <p className="text-muted-foreground/70">
          Para exercer qualquer um desses direitos, entre em contato conosco pelo e-mail:{" "}
          <a href="mailto:privacidade@rumoamaximapotencia.com.br" className="text-primary underline">privacidade@rumoamaximapotencia.com.br</a>.
          Responderemos em até 15 dias úteis.
        </p>

        <h2 className="text-foreground">7. Cookies e rastreamento</h2>
        <p className="text-muted-foreground/70">
          Nossas páginas podem utilizar cookies de sessão e ferramentas de análise de tráfego (como o Meta Pixel e
          Google Analytics) para mensurar o desempenho das campanhas e melhorar a experiência do usuário.
          Esses cookies não coletam dados pessoais identificáveis sem o seu consentimento.
        </p>
        <p className="text-muted-foreground/70">
          Você pode configurar seu navegador para bloquear cookies a qualquer momento, sem prejuízo ao acesso
          ao conteúdo das nossas páginas.
        </p>

        <h2 className="text-foreground">8. Base legal para o tratamento</h2>
        <p className="text-muted-foreground/70">
          O tratamento dos seus dados é realizado com base no seu <strong className="text-foreground">consentimento</strong> expresso
          ao preencher o formulário de inscrição, conforme previsto no art. 7º, inciso I da LGPD, e na
          <strong className="text-foreground"> execução do contrato</strong> de prestação de serviços educacionais (art. 7º, inciso V).
        </p>

        <h2 className="text-foreground">9. Alterações nesta política</h2>
        <p className="text-muted-foreground/70">
          Podemos atualizar esta Política de Privacidade periodicamente. Quando isso ocorrer, a data de "última
          atualização" no topo desta página será revisada. Recomendamos que você consulte esta página regularmente.
          O uso continuado dos nossos serviços após as alterações implica na aceitação da versão atualizada.
        </p>

        <h2 className="text-foreground">10. Contato</h2>
        <p className="text-muted-foreground/70">
          Para dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais, entre em contato:
        </p>
        <ul className="text-muted-foreground/70">
          <li><strong className="text-foreground">Empresa:</strong> RM Desenvolvimento Humano e Educação Corporativa LTDA</li>
          <li><strong className="text-foreground">Nome fantasia:</strong> Rumo à Máxima Potência</li>
          <li><strong className="text-foreground">CNPJ:</strong> 49.585.305/0001-00</li>
          <li><strong className="text-foreground">E-mail:</strong> <a href="mailto:privacidade@rumoamaximapotencia.com.br" className="text-primary underline">privacidade@rumoamaximapotencia.com.br</a></li>
        </ul>

        <div className="w-10 h-0.5 bg-primary my-12" />
        <p className="text-xs text-muted-foreground/40">
          Esta política foi elaborada em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
          e com as diretrizes de privacidade do Meta Platforms, Inc.
        </p>
      </div>
    </div>
  );
}