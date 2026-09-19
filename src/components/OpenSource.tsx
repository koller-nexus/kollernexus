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
    <section id="open-source" className="section bg-white">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Open Source</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Contribuições que movem o ecossistema.
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Destaque para projetos de código aberto aos quais contribuímos. A
            lista abaixo é apenas o começo — preparada para crescer.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={featured.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="card hover:translate-y-[-2px] transition-transform sm:col-span-2 lg:col-span-2"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold">{featured.name}</h3>
                <p className="mt-2 text-[var(--color-muted)]">
                  {featured.description}
                </p>
              </div>
              <div className="text-right">
                <div
                  className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  <StarIcon />
                  {liveStars}
                </div>
                <div className="mt-2 text-xs text-[var(--color-muted)]">
                  {featured.language}
                </div>
              </div>
            </div>
            {featured.prs?.length ? (
              <div className="mt-4">
                <p className="text-sm font-medium">PRs de William:</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-[var(--color-muted)]">
                  {featured.prs.map((pr) => (
                    <li key={pr.url}>
                      <a
                        className="underline hover:opacity-80"
                        href={pr.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {pr.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </a>
        </div>
      </div>
    </section>
  );
}

