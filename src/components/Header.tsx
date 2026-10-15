import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="frame header-inner">
        <Link href="#top" className="brand-link" aria-label="Koller Nexus, início">
          <Image
            src="/koller-nexus-kn.png"
            alt=""
            width={480}
            height={480}
            className="brand-logo"
            priority
          />
          <span>Koller Nexus</span>
        </Link>

        <nav aria-label="Navegação principal" className="primary-nav">
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#open-source">Open source</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre mim</a>
        </nav>

        <a href="#contato" className="button-primary header-cta">
          Falar comigo
        </a>
      </div>
    </header>
  );
}
