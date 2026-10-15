import StarIcon from "@/icons/Star";

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
    <section id="projetos" className="band" aria-labelledby="projetos-heading">
      <div className="frame">
        <div className="section-head">
          <h2 id="projetos-heading">O que está publicado no meu GitHub.</h2>
          <p>
            Repositórios públicos que mantenho como <strong>@williamkoller</strong>,
            com código aberto para você ler antes de conversar comigo.
          </p>
        </div>

        <table className="schedule">
          <thead>
            <tr>
              <th scope="col" className="col-num caps">Nº</th>
              <th scope="col" className="caps">Repositório</th>
              <th scope="col" className="col-lang caps">Linguagem</th>
              <th scope="col" className="col-stars caps">Estrelas</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo, index) => (
              <tr key={repo.id}>
                <td className="col-num mono">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td>
                  <a
                    href={repo.html_url}
                    className="schedule-name"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repo.name}
                  </a>
                  {repo.description && (
                    <span className="schedule-desc">
                      {repo.description.replace(/\p{Extended_Pictographic}\uFE0F?\s*/gu, "")}
                    </span>
                  )}
                </td>
                <td className="col-lang">{repo.language ?? "—"}</td>
                <td className="col-stars mono">
                  <StarIcon />
                  {repo.stargazers_count}
                  <span className="sr-only"> estrelas</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="drawing-caption">
          <span>
            <strong>Quadro de projetos.</strong> Ordenado por estrelas, direto da
            API do GitHub e atualizado a cada hora.
          </span>
          <a
            href="https://github.com/williamkoller?tab=repositories"
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            Todos os repositórios
          </a>
        </p>
      </div>
    </section>
  );
}
