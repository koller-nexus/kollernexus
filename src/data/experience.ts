// Experience entries shown in the "Experiência" section.
// NOTE: Dates are approximate for some roles — William should fine-tune later.

export type Experience = {
  role: string;
  company: string;
  range: string; // e.g., "Abr 2026 – Atual"
  location?: string;
  summary: string; // 1–3 sentence pt-BR summary
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Coopersystem",
    range: "Abr 2026 – Atual",
    summary:
      "Engenharia de plataforma e backend com foco em Go, Kubernetes e integração entre serviços. Entregas orientadas a métricas, confiabilidade e observabilidade ponta a ponta.",
  },
  {
    role:
      "Senior Software Engineer Golang & Software Architect · DevOps & Cloud Native",
    company: "BRQ Digital Solutions",
    range: "Out 2025 – Fev 2026 · São Paulo",
    summary:
      "Arquitetura e desenvolvimento em Go para soluções de alto throughput. Padrões cloud native, pipelines GitHub Actions e IaC. Melhoria de observabilidade e custos.",
  },
  {
    role:
      "Senior Software Engineer Golang & Software Architect · DevOps & Cloud Native",
    company: "Banco Itaú",
    range:
      "Nov 2025 – Fev 2026 (aprox.; confirmar) · via BRQ",
    summary:
      "Atuação em modernização de arquivo digital com foco em Golang, EKS, Terraform e GitHub Actions, com monitoramento Datadog. Ênfase em qualidade, segurança e escalabilidade.",
  },
  {
    role:
      "Staff Software Engineer · Tech Lead · DevOps, Observability & Cloud Infrastructure",
    company: "RPC (Rede Paranaense de Comunicação)",
    range: "Mar 2025 – Set 2025 · Curitiba",
    summary:
      "Liderança técnica de plataforma: padronização de deploys, métricas e tracing; custos e performance em Kubernetes; automação de infraestrutura e qualidade operacional.",
  },
  {
    role:
      "Senior Backend Software Engineer · DevOps, Observability & Cloud Infrastructure",
    company: "AmorSaúde Brasil",
    range: "2023 – 2025",
    summary:
      "Soluções backend com Go e NestJS; observabilidade com Datadog; Kubernetes/Docker/OCI; práticas de SRE e qualidade contínua ao longo do ciclo de produto.",
  },
  {
    role: "Software Engineer",
    company: "Meritt Informação Educacional",
    range: "— Jul 2021",
    summary:
      "Desenvolvimento de funcionalidades e integrações. Colaboração com squads de produto e dados. Base sólida de engenharia para etapas seguintes da carreira.",
  },
];

