import StarIcon from "@/icons/Star";

type PRLink = { url: string; title: string };
type Contribution = {
  owner: string;
  repo: string;
  name: string;
  description: string;
  language: string;
  repoUrl: string;
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

export default async function OpenSource() {
  // For now we only feature the first item, but the structure supports more.
  const featured = CONTRIBUTIONS[0];
  const liveStars = await fetchStars(featured.owner, featured.repo);

  return (
    <section id="open-source" className="band" aria-labelledby="oss-heading">
      <div className="frame">
        <div className="section-head">
          <h2 id="oss-heading">Também contribuo com código aberto.</h2>
          <p>
            Pull requests meus em ferramentas que a comunidade de
            desenvolvimento usa todos os dias.
          </p>
        </div>

        <div className="oss">
          <div className="oss-project">
            <h3>
              <a href={featured.repoUrl} target="_blank" rel="noreferrer">
                {featured.name}
              </a>
            </h3>
            <p>{featured.description}</p>
            <div className="oss-meta mono">
              {liveStars !== null && (
                <span>
                  <StarIcon />
                  {liveStars.toLocaleString("pt-BR")} estrelas
                </span>
              )}
              <span>{featured.language}</span>
            </div>
          </div>

          {featured.prs?.length ? (
            <table className="schedule revisions">
              <caption className="sr-only">
                Pull requests de William em {featured.name}
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="col-rev caps">PR</th>
                  <th scope="col" className="caps">Alteração</th>
                </tr>
              </thead>
              <tbody>
                {featured.prs.map((pr) => (
                  <tr key={pr.url}>
                    <td className="col-rev mono">
                      #{pr.url.split("/").pop()}
                    </td>
                    <td>
                      <a href={pr.url} target="_blank" rel="noreferrer">
                        {pr.title}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </section>
  );
}
