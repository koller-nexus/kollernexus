type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
};

const FALLBACK: Repo[] = [
  { id: 1, name: "clean-ts-api", html_url: "https://github.com/williamkoller/clean-ts-api", description: null, stargazers_count: 46, language: "TypeScript", fork: false },
  { id: 2, name: "my-readings", html_url: "https://github.com/williamkoller/my-readings", description: null, stargazers_count: 31, language: "TypeScript", fork: false },
  { id: 3, name: "golang-payment-stripe", html_url: "https://github.com/williamkoller/golang-payment-stripe", description: null, stargazers_count: 24, language: "Go", fork: false },
  { id: 4, name: "clean-arch-node-api", html_url: "https://github.com/williamkoller/clean-arch-node-api", description: null, stargazers_count: 17, language: "TypeScript", fork: false },
  { id: 5, name: "configuration-nodejs-linux-dev", html_url: "https://github.com/williamkoller/configuration-nodejs-linux-dev", description: null, stargazers_count: 16, language: "Shell", fork: false },
  { id: 6, name: "tdd-exchange-api", html_url: "https://github.com/williamkoller/tdd-exchange-api", description: null, stargazers_count: 13, language: "TypeScript", fork: false },
  { id: 7, name: "arch-ddd-nestjs", html_url: "https://github.com/williamkoller/arch-ddd-nestjs", description: null, stargazers_count: 12, language: "TypeScript", fork: false },
  { id: 8, name: "my-books", html_url: "https://github.com/williamkoller/my-books", description: null, stargazers_count: 12, language: null, fork: false },
  { id: 9, name: "ts-node-kafka-express", html_url: "https://github.com/williamkoller/ts-node-kafka-express", description: null, stargazers_count: 10, language: "TypeScript", fork: false },
  { id: 10, name: "ddd-php", html_url: "https://github.com/williamkoller/ddd-php", description: null, stargazers_count: 9, language: "PHP", fork: false },
  { id: 11, name: "cloud-architecture-golang", html_url: "https://github.com/williamkoller/cloud-architecture-golang", description: null, stargazers_count: 8, language: "Go", fork: false },
  { id: 12, name: "global-holidays-service", html_url: "https://github.com/williamkoller/global-holidays-service", description: null, stargazers_count: 8, language: "TypeScript", fork: false },
];

async function fetchRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/williamkoller/repos?per_page=100&sort=updated",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        // Revalidate a cada hora para evitar rate-limit e manter atualizado
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    const data = (await res.json()) as Repo[];
    return data;
  } catch {
    return FALLBACK;
  }
}

function sortAndTake(repos: Repo[]): Repo[] {
  return repos
    .filter((r) => !r.fork && r.name.toLowerCase() !== "williamkoller")
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 12);
}

export default async function Projects() {
  const repos = sortAndTake(await fetchRepos());

  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Projetos</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Código aberto que impulsiona nossas soluções.
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Repositórios públicos do GitHub de <strong>@williamkoller</strong>, ordenados por estrelas.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="card hover:translate-y-[-2px] transition-transform"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{repo.name}</h3>
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  <StarIcon />
                  {repo.stargazers_count}
                </span>
              </div>
              {repo.description && (
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {repo.description}
                </p>
              )}
              <div className="mt-4 text-sm text-[var(--color-muted)]">
                {repo.language ?? "—"}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
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

