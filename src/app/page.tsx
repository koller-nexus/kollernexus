import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";

const services = [
  {
    name: "Backend",
    description:
      "APIs e microsserviços em Go, arquitetura orientada a domínio, mensageria, dados e observabilidade.",
  },
  {
    name: "Frontend",
    description:
      "Interfaces acessíveis e responsivas com React e Next.js, com atenção à experiência e à performance.",
  },
  {
    name: "Mobile",
    description:
      "Aplicativos nativos ou multiplataforma, com telemetria e publicação automatizada.",
  },
  {
    name: "DevOps",
    description:
      "CI/CD, Kubernetes, infraestrutura como código e segurança para operações previsíveis.",
  },
  {
    name: "Engenharia de IA",
    description:
      "Integração de IA e LLMs em produtos, com guardrails, métricas e avaliação contínua.",
  },
];

const processSteps = [
  {
    title: "Descoberta",
    description:
      "Entendimento do contexto, dos objetivos e das restrições do projeto.",
  },
  {
    title: "Arquitetura",
    description:
      "Definição de domínios, contratos e observabilidade com simplicidade em mente.",
  },
  {
    title: "Entrega iterativa",
    description:
      "Incrementos pequenos, testes e revisão contínua ao longo do desenvolvimento.",
  },
  {
    title: "Operação",
    description:
      "Observabilidade, alertas e feedback para evoluir o produto com segurança.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="arrow-icon"
    >
      <path
        d="M4.25 10h11.5m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div id="top" />

      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="hero-name">Koller Nexus · William Koller</p>
            <h1 id="hero-heading">
              Engenharia de software para construir e evoluir produtos digitais.
            </h1>
            <p className="hero-description">
              Desenvolvimento de ponta a ponta — de APIs e interfaces a mobile,
              DevOps e inteligência artificial — com foco em qualidade e
              operação.
            </p>
            <div className="hero-actions">
              <a href="#contato" className="button-primary">
                Conversar sobre um projeto <ArrowIcon />
              </a>
              <a href="#projetos" className="text-link">
                Ver projetos públicos <ArrowIcon />
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="Perfil profissional">
            <div className="profile-heading">
              <Image
                src="/koller-nexus-mark.png"
                alt=""
                width={480}
                height={480}
                className="profile-logo"
                priority
              />
              <div>
                <p className="profile-name">William Koller</p>
                <p className="profile-role">Engenheiro de software</p>
              </div>
            </div>
            <div className="profile-divider" />
            <p className="profile-label">Áreas de atuação</p>
            <ul className="profile-specialties">
              <li>Backend e APIs</li>
              <li>Frontend e produtos web</li>
              <li>Aplicativos mobile</li>
              <li>DevOps e inteligência artificial</li>
            </ul>
            <a
              href="https://github.com/williamkoller"
              className="profile-link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </aside>
        </div>
      </section>

      <Projects />

      <section id="servicos" className="section services-section">
        <div className="container">
          <div className="section-intro">
            <h2>Competências para todo o ciclo do produto.</h2>
            <p>
              Da primeira decisão de arquitetura à operação, as disciplinas se
              conectam para entregar software claro e sustentável.
            </p>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <article className="service-item" key={service.name}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OpenSource />

      <section id="processo" className="section process-section">
        <div className="container">
          <div className="section-intro">
            <h2>Um processo direto, da descoberta à operação.</h2>
            <p>
              Alinhamento frequente e entregas iterativas mantêm as decisões
              técnicas ligadas aos objetivos do produto.
            </p>
          </div>

          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li className="process-item" key={step.title}>
                <span className="process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="sobre" className="section about-section">
        <div className="container about-layout">
          <div className="about-heading">
            <p className="about-name">William Koller</p>
            <h2>Engenharia com clareza técnica e contexto de negócio.</h2>
            <a
              href="https://www.linkedin.com/in/williamkoller"
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Perfil no LinkedIn <ArrowIcon />
            </a>
          </div>
          <div className="about-copy">
            <p>
              Atuação orientada por Clean Architecture, testes automatizados e
              observabilidade ponta a ponta. Interfaces claras, backends
              robustos e operações previsíveis.
            </p>
            <p>
              O foco está em aproximar a ideia do valor em produção com código
              idiomático, medição e segurança.
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-copy">
            <h2>Vamos conversar sobre o que você está construindo?</h2>
            <p>
              Conte um pouco sobre o produto, o desafio técnico ou a oportunidade.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
