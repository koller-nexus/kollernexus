export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="frame footer-inner">
        <div className="footer-cell">
          <p className="caps">Koller Nexus</p>
          <p>© {year} William Koller</p>
        </div>
        <div className="footer-cell">
          <p className="caps">Site</p>
          <a href="https://kollernexus.com.br">kollernexus.com.br</a>
        </div>
        <div className="footer-cell">
          <p className="caps">Código</p>
          <a href="https://github.com/williamkoller" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div className="footer-cell">
          <p className="caps">Perfil</p>
          <a
            href="https://www.linkedin.com/in/williamkoller"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
