import LinkedInIcon from "@/icons/LinkedIn";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {year} Koller Nexus. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a
            href="https://kollernexus.com.br"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            kollernexus.com.br
          </a>
          <a
            href="https://www.linkedin.com/in/williamkoller"
            className="footer-link inline-flex items-center gap-1"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil no LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
