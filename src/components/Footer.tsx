import LinkedInIcon from "@/icons/LinkedIn";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-20 py-10 text-sm" style={{ borderColor: "var(--color-border)" }}>
      <div className="container flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between">
        <p className="text-muted-foreground">
          © {year} Koller Nexus. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground flex items-center gap-4">
          <a href="https://kollernexus.com.br" className="hover:opacity-80" target="_blank" rel="noreferrer">
            kollernexus.com.br
          </a>
          <a
            href="https://www.linkedin.com/in/williamkoller"
            className="hover:opacity-80 inline-flex items-center gap-1"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil no LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

