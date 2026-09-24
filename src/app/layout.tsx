import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kollernexus.com.br"),
  title: {
    default: "Koller Nexus — Engenharia de Software",
    template: "%s · Koller Nexus",
  },
  description:
    "Engenharia de software minimalista e escalável: Backend, Frontend, Mobile, DevOps e IA. Produtos prontos para produção, com observabilidade e foco em resultados.",
  openGraph: {
    title: "Koller Nexus — Engenharia de Software",
    description:
      "Backend, Frontend, Mobile, DevOps e IA com foco em qualidade, velocidade e observabilidade.",
    url: "https://kollernexus.com.br",
    siteName: "Koller Nexus",
    images: [
      {
        url: "/koller-nexus-og.jpg",
        width: 1280,
        height: 720,
        alt: "Símbolo KN em azul sobre fundo branco",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koller Nexus — Engenharia de Software",
    description:
      "Soluções modernas em Backend, Frontend, Mobile, DevOps e IA.",
    images: ["/koller-nexus-og.jpg"],
  },
  icons: {
    icon: "/koller-nexus-icon.png",
    apple: "/koller-nexus-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 button-primary"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
