import { EXPERIENCES } from "@/data/experience";
import LinkedInIcon from "@/icons/LinkedIn";

export default function Experience() {
  const profile = "https://www.linkedin.com/in/williamkoller";
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Experiência</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Senior Backend & Platform Engineer
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Go • Kubernetes • Kafka • Docker • Sistemas Distribuídos
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="card relative">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="mt-1 text-sm">{exp.company}</p>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">
                    {exp.range}
                  </p>
                </div>
                <a
                  href={exp.linkedinUrl || profile}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ver no LinkedIn"
                  className="shrink-0 hover:opacity-80"
                  title="Ver no LinkedIn"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 text-sm text-[var(--color-muted)]">{exp.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

