import { EXPERIENCES } from "@/data/experience";
import LinkedInIcon from "@/icons/LinkedIn";

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Experiência</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Senior Backend & Platform Engineer
            </h2>
            <p className="mt-3 text-[var(--color-muted)]">
              Go • Kubernetes • Kafka • Docker • Sistemas Distribuídos
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/williamkoller"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:opacity-80"
            aria-label="Ver perfil no LinkedIn"
            title="Ver no LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
            Ver no LinkedIn
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="card">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="mt-1 text-sm">{exp.company}</p>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
                {exp.range}
              </p>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                {exp.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

