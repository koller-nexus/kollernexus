# Koller Nexus — Landing Page (pt-BR)

Landing page estática de marketing para a Koller Nexus. Visual-first, sem backend ou integração real de contato.

Tecnologias: Next.js (App Router), TypeScript, Tailwind CSS.

## Como rodar localmente

Pré-requisitos: Node.js 18+ (recomendado 20+), npm.

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build de produção

```bash
npm install
npm run build
npm run start
```

## O que está incluso

- Header fixo com logo e navegação por âncoras
- Seções: Hero, Serviços, Como trabalhamos, Sobre, Contato (visual), Footer
- Responsivo, acessível e rápido
- Metadados básicos de SEO (Open Graph e Twitter)
- Logo salvo em `public/logo-kn.png`

## Importante — formulário de contato

O formulário na seção “Contato” é **apenas visual** e **não envia dados**. Ele existe para demonstrar o design. Uma integração real poderá ser adicionada futuramente (API/Email/CRM).

## Marca

- Paleta: fundo creme/off‑white, acentos coral/terracota `#E07A5F`, texto em “charcoal”.
- Logo “KN” aplicado no header e usado como imagem social.
- Domínio no rodapé: `kollernexus.com.br`.

## Estrutura

- `src/app/layout.tsx` — layout global, metadados e fontes
- `src/app/page.tsx` — landing page
- `src/components/` — componentes de layout (Header, Footer)
- `public/` — assets estáticos (logo)

## Licença

Uso interno da Koller Nexus.
