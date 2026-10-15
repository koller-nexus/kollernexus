import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import ArrowIcon from "@/icons/Arrow";
import GitHubIcon from "@/icons/GitHub";
import LinkedInIcon from "@/icons/LinkedIn";
import WhatsAppIcon from "@/icons/WhatsApp";

const whatsappMessage =
  "Olá, William. Vi o site da Koller Nexus e gostaria de conversar sobre um projeto.";
const whatsappHref = `https://wa.me/5541988682343?text=${encodeURIComponent(whatsappMessage)}`;
const linkedinHref = "https://www.linkedin.com/in/williamkoller";
const githubHref = "https://github.com/williamkoller";

const disciplines = ["Backend", "Frontend", "Mobile", "DevOps", "IA"];

const services = [
  {
    name: "Backend",
    description:
      "Desenho APIs e microsserviços em Go, com arquitetura orientada a domínio, mensageria, dados e observabilidade.",
  },
  {
    name: "Frontend",
    description:
      "Construo interfaces acessíveis e responsivas com React e Next.js, cuidando da experiência e da performance.",
  },
  {
    name: "Mobile",
    description:
      "Desenvolvo aplicativos nativos ou multiplataforma, com telemetria e publicação automatizada.",
  },
  {
    name: "DevOps",
    description:
      "Monto CI/CD, Kubernetes, infraestrutura como código e segurança para a operação ser previsível.",
  },
  {
    name: "Engenharia de IA",
    description:
      "Integro IA e LLMs ao produto com guardrails, métricas e avaliação contínua.",
  },
];

const processSteps = [
  {
    title: "Descoberta",
    description:
      "Começo entendendo o contexto, os objetivos e as restrições do seu projeto.",
  },
  {
    title: "Arquitetura",
    description:
      "Definimos domínios, contratos e observabilidade, sempre pelo caminho mais simples.",
  },
  {
    title: "Entrega iterativa",
    description:
      "Entrego em incrementos pequenos, com testes e revisão contínua do início ao fim.",
  },
  {
    title: "Operação",
    description:
      "Com alertas e feedback em produção, o produto evolui com segurança.",
  },
];

export default function Home() {
  return (
    <>
      <div id="top" />

      <section className="hero" aria-labelledby="hero-heading">
        <div className="frame">
          <div>
            <h1 id="hero-heading">
              Construo software do primeiro esboço à produção.
            </h1>
            <p className="hero-lead">
              Sou William Koller, engenheiro de software. Trabalho de ponta a
              ponta, de APIs e interfaces a apps, infraestrutura e IA, e
              continuo por perto depois do deploy.
            </p>

            <ol className="dimension caps" aria-label="Disciplinas que cubro">
              {disciplines.map((name, i) => (
                <li key={name} style={{ "--i": i } as React.CSSProperties}>
                  {name}
                  {i === disciplines.length - 1 && (
                    <span className="tick-end" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>

            <div className="hero-actions">
              <a href="#contato" className="button-primary">
                Conversar sobre seu projeto <ArrowIcon />
              </a>
              <a href="#projetos" className="text-link">
                Ver o que já publiquei <ArrowIcon />
              </a>
            </div>
          </div>

          <aside className="title-block" aria-label="Sobre o responsável">
            <Image
              src="/william-koller-retrato.jpg"
              alt="William Koller sorrindo, de óculos redondos e jaqueta azul, ao ar livre"
              width={800}
              height={800}
              className="title-block-photo"
              sizes="(width <= 960px) 520px, 440px"
              priority
            />
            <div className="title-block-row">
              <div className="title-block-cell">
                <p className="caps">Responsável técnico</p>
                <p className="title-block-name">William Koller</p>
                <p className="title-block-value">Engenheiro de software</p>
              </div>
            </div>
            <div className="title-block-row" style={{ "--cols": 2 } as React.CSSProperties}>
              <div className="title-block-cell">
                <p className="caps">Cidade</p>
                <p className="title-block-value">Curitiba, PR</p>
              </div>
              <div className="title-block-cell">
                <p className="caps">Atendimento</p>
                <p className="title-block-value">Remoto</p>
              </div>
            </div>
            <div className="title-block-row">
              <div className="title-block-cell">
                <p className="caps">Onde me encontrar</p>
                <div className="title-block-links">
                  <a href={githubHref} target="_blank" rel="noreferrer">
                    <GitHubIcon /> GitHub
                  </a>
                  <a href={linkedinHref} target="_blank" rel="noreferrer">
                    <LinkedInIcon aria-hidden="true" /> LinkedIn
                  </a>
                  <a href={whatsappHref} target="_blank" rel="noreferrer">
                    <WhatsAppIcon /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Projects />

      <section id="servicos" className="band" aria-labelledby="servicos-heading">
        <div className="frame">
          <div className="section-head">
            <h2 id="servicos-heading">O que eu faço.</h2>
            <p>
              Cinco disciplinas que conecto num mesmo projeto, da primeira
              decisão de arquitetura à operação.
            </p>
          </div>

          <dl className="services-list">
            {services.map((service) => (
              <div className="service-item" key={service.name}>
                <dt>{service.name}</dt>
                <dd>{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <OpenSource />

      <section id="processo" className="band" aria-labelledby="processo-heading">
        <div className="frame">
          <div className="section-head">
            <h2 id="processo-heading">Como a gente trabalha junto.</h2>
            <p>
              Conversas frequentes e entregas curtas mantêm cada decisão técnica
              ligada ao que o produto precisa.
            </p>
          </div>

          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li className="process-step" key={step.title}>
                <span className="detail-marker mono" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="sobre" className="band" aria-labelledby="sobre-heading">
        <div className="frame about">
          <h2 id="sobre-heading">
            Gosto de software claro, testado e fácil de operar.
          </h2>
          <div className="about-copy">
            <p>
              Trabalho guiado por Clean Architecture, testes automatizados e
              observabilidade de ponta a ponta. Prefiro interfaces claras,
              backends robustos e operações previsíveis.
            </p>
            <p>
              Meu foco é encurtar a distância entre a ideia e o valor em
              produção, com código idiomático, medição e segurança.
            </p>
            <a
              href={linkedinHref}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Meu perfil no LinkedIn <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="contato" className="band" aria-labelledby="contato-heading">
        <div className="frame contact">
          <div className="contact-copy">
            <h2 id="contato-heading">
              Me conta o que você está construindo.
            </h2>
            <p>
              Pode ser um produto novo, um sistema que precisa de ajuda ou só
              uma ideia. Quem lê e responde sou eu.
            </p>
            <div className="contact-alt">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Prefiro o WhatsApp
              </a>
              <a href={linkedinHref} target="_blank" rel="noreferrer">
                <LinkedInIcon aria-hidden="true" /> Falar pelo LinkedIn
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
