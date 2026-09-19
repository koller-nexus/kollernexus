import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(250,247,242,0.8)] glass">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-3" aria-label="Koller Nexus">
          <Image
            src="/logo-kn.png"
            alt="Koller Nexus"
            width={36}
            height={36}
            className="rounded-sm"
            priority
          />
          <span className="text-base font-semibold tracking-tight">Koller Nexus</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <a href="#servicos" className="hover:opacity-80">
                Serviços
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:opacity-80">
                Projetos
              </a>
            </li>
            <li>
              <a href="#open-source" className="hover:opacity-80">
                Open Source
              </a>
            </li>
            <li>
              <a href="#experiencia" className="hover:opacity-80">
                Experiência
              </a>
            </li>
            <li>
              <a href="#processo" className="hover:opacity-80">
                Como trabalhamos
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:opacity-80">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:opacity-80">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contato" className="btn-primary">
            Fale com a gente
          </a>
        </div>
      </div>
    </header>
  );
}

