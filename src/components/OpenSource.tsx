type PRLink = { url: string; title: string };
type Contribution = {
  owner: string;
  repo: string;
  name: string;
  description: string;
  language: string;
  repoUrl: string;
  starsFallback: number;
  prs?: PRLink[];
};

const CONTRIBUTIONS: Contribution[] = [
  {
    owner: "rtk-ai",
    repo: "rtk",
    name: "RTK (Rust Token Killer)",
    description:
      "CLI proxy que reduz consumo de tokens em 60–90% em comandos comuns de dev. Binário único em Rust.",
    language: "Rust",
    repoUrl: "https://github.com/rtk-ai/rtk",
    starsFallback: 80000,
    prs: [
      {
        url: "https://github.com/rtk-ai/rtk/pull/1478",
        title: "feat(hook): add support for Kimi AI agent",
      },
      {
        url: "https://github.com/rtk-ai/rtk/pull/3105",
        title: "Feat/kimi uninstall",
      },
    ],
  },
];

async function fetchStars(owner: string, repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number"
      ? data.stargazers_count
      : null;
  } catch {
    return null;
  }
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
      style={{ color: "var(--brand)" }}
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.869 1.402-8.168L.132 9.21l8.2-1.192L12 .587z" />
    </svg>
  );
}

export default async function OpenSource() {
  // For now we only feature the first item, but the structure supports more.
  const featured = CONTRIBUTIONS[0];
  const liveStars =
    (await fetchStars(featured.owner, featured.repo)) ??
    featured.starsFallback;

  return (
    <section id="open-source" className="section open-source-section">
      <div className="container">
        <div className="section-intro">
          <h2>Contribuições em projetos de código aberto.</h2>
          <p>
            Participação pública em ferramentas utilizadas pela comunidade de
            desenvolvimento.
          </p>
        </div>

        <article className="contribution-row">
          <div className="contribution-copy">
            <p className="contribution-label">Projeto em destaque</p>
            <h3>
              <a href={featured.repoUrl} target="_blank" rel="noreferrer">
                {featured.name}
              </a>
            </h3>
            <p className="contribution-description">
              {featured.description}
            </p>
            {featured.prs?.length ? (
              <div className="contribution-prs">
                <h4>Pull requests de William</h4>
                <ul>
                  {featured.prs.map((pr) => (
                    <li key={pr.url}>
                      <a href={pr.url} target="_blank" rel="noreferrer">
                        {pr.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="contribution-meta">
            <span>
              <StarIcon /> {liveStars.toLocaleString("pt-BR")} estrelas
            </span>
            <span>{featured.language}</span>
          </div>
        </article>
      </div>
    </section>
  );
}
