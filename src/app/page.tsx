import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Anchor for top */}
      <div id="top" />

      {/* Hero */}
      <section className="section">
        <div className="container grid gap-10 items-center md:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Koller Nexus</p>
            <h1 className="text-4xl/tight sm:text-5xl/tight font-semibold tracking-tight">
              Software que conecta ideias ao resultado.
            </h1>
            <p className="mt-4 text-lg text-[var(--color-muted)]">
              Engenharia de software minimalista e escalável. Entregamos{" "}
              <strong>Backend</strong>, <strong>Frontend</strong>,{" "}
              <strong>Mobile</strong>, <strong>DevOps</strong> e{" "}
              <strong>IA</strong> com foco em qualidade, observabilidade e
              time‑to‑value.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contato" className="btn-primary">
                Fale com a gente
              </a>
              <a
                href="#servicos"
                className="inline-flex h-12 items-center rounded-full px-5 text-sm font-medium border"
                style={{ borderColor: "var(--color-border)" }}
              >
                Ver serviços
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/logo-kn.png"
              alt="Logo Koller Nexus"
              width={360}
              height={360}
              className="w-56 h-auto sm:w-72 md:w-80"
              priority
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Serviços</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Do conceito à produção — com a mesma excelência.
            </h2>
            <p className="mt-3 text-[var(--color-muted)]">
              Damos peso igual a cada disciplina para entregar plataformas
              coerentes, rápidas e fáceis de evoluir.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-xl font-semibold">Backend</h3>
              <p className="mt-2 text-[var(--color-muted)]">
                APIs e microsserviços em Go. Arquiteturas orientadas a domínio,
                filas/eventos, bancos escaláveis e observabilidade de ponta a ponta.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Frontend</h3>
              <p className="mt-2 text-[var(--color-muted)]">
                Interfaces acessíveis e responsivas com React/Next.js. Performance,
                UX clara e design minimalista.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Mobile</h3>
              <p className="mt-2 text-[var(--color-muted)]">
                Aplicativos nativos ou multiplataforma com experiência fluida,
                telemetria e publicação automatizada.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">DevOps</h3>
              <p className="mt-2 text-[var(--color-muted)]">
                CI/CD, Kubernetes, infraestrutura como código e segurança. Entregas
                previsíveis, rápidas e auditáveis.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">AI Engineer</h3>
              <p className="mt-2 text-[var(--color-muted)]">
                Integração de IA/LLMs em produtos com guardrails, métricas e
                avaliação contínua. Do protótipo ao scale‑up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="section">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Como trabalhamos</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Processo claro. Resultados mensuráveis.
            </h2>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li className="card">
              <span className="text-sm font-semibold text-[var(--brand)]">01</span>
              <h3 className="mt-2 font-semibold">Descoberta</h3>
              <p className="mt-2 text-[var(--color-muted)]">
                Entendimento do contexto, objetivos e restrições. Alinhamento de
                métricas de sucesso.
              </p>
            </li>
            <li className="card">
              <span className="text-sm font-semibold text-[var(--brand)]">02</span>
              <h3 className="mt-2 font-semibold">Arquitetura</h3>
              <p className="mt-2 text-[var(--color-muted)]">
                Design simples e escalável. Definição de domínios, contratos e
                observabilidade desde o início.
              </p>
            </li>
            <li className="card">
              <span className="text-sm font-semibold text-[var(--brand)]">03</span>
              <h3 className="mt-2 font-semibold">Entrega Iterativa</h3>
              <p className="mt-2 text-[var(--color-muted)]">
                Incrementos pequenos, testes e revisão contínua. Qualidade como
                padrão.
              </p>
            </li>
            <li className="card">
              <span className="text-sm font-semibold text-[var(--brand)]">04</span>
              <h3 className="mt-2 font-semibold">Operação</h3>
              <p className="mt-2 text-[var(--color-muted)]">
                Observabilidade, alertas e feedback do usuário para evoluir com
                segurança.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section bg-white">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Sobre</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Engenheiros apaixonados por simplicidade e valor de negócio.
            </h2>
          </div>
          <div className="text-[var(--color-muted)]">
            <p>
              Atuamos com princípios de Clean Architecture, testes automatizados e
              observabilidade ponta a ponta. Acreditamos em interfaces claras,
              backends robustos e operações previsíveis.
            </p>
            <p className="mt-3">
              Nosso foco é acelerar o ciclo da ideia ao valor em produção — com
              código idiomático, medição e segurança.
            </p>
          </div>
        </div>
      </section>

      {/* Contato (visual) */}
      <section id="contato" className="section">
        <div className="container max-w-3xl">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Contato</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Vamos conversar sobre o seu projeto?
            </h2>
            <p className="mt-3 text-[var(--color-muted)]">
              Este formulário é apenas visual nesta etapa — o envio não está
              habilitado.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
