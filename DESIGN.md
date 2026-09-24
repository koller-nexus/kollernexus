---
name: Koller Nexus
description: Portfólio profissional de engenharia de software, com projetos verificáveis e contato direto.
colors:
  page: "#ffffff"
  surface: "#f3f7fb"
  surface-strong: "#eaf1f8"
  ink: "#172b46"
  body: "#34445a"
  muted: "#5d6d81"
  brand: "#0b4688"
  brand-hover: "#073a74"
  line: "#d7e0e9"
  focus: "#4c9be0"
  field-border: "#bbc8d6"
  success: "#176143"
  error: "#a53131"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(2.65rem, 5.4vw, 4.65rem)"
    fontWeight: 650
    lineHeight: 1.06
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(1.85rem, 3.5vw, 2.8rem)"
    fontWeight: 620
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 650
    lineHeight: 1.4
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.075em"
rounded:
  field: "5px"
  control: "6px"
  panel: "10px"
spacing:
  xs: "0.35rem"
  sm: "0.7rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.page}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.1rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "{colors.page}"
  contact-input:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.7rem 0.8rem"
    height: "46px"
---

# Design System: Koller Nexus

## Overview

**Creative North Star: “O portfólio de engenharia claro e verificável”**

Koller Nexus apresenta serviços, trabalho público e contato numa linguagem profissional, direta e legível. A estrutura combina papel branco, planos azulados suaves, texto em azul-marinho e azul reservado para ações e referências interativas. Geist dá unidade às mensagens e Geist Mono destaca a numeração técnica do processo. A assinatura usa o recorte quadrado `public/koller-nexus-mark.png`, derivado da imagem fornecida; o social card usa `public/koller-nexus-og.jpg`, e o favicon e Apple icon usam o recorte quadrado. A imagem-fonte `public/koller-nexus.png` é JPEG de 1280×720 apesar da extensão `.png`; foi preservada e recebeu origem embutida.

O ritmo é aberto, com conteúdo alinhado a um container central, títulos concisos e linhas finas separando listas. A navegação, os projetos, as contribuições, as competências e o processo são apresentados como informação concreta, sem efeitos decorativos. O bloco de contato fecha a página em alto contraste, usando a cor de tinta como fundo e um formulário branco.

**Key Characteristics:**
- Superfícies claras com contraste tipográfico profundo.
- Azul usado para ações, links e pequenos marcadores.
- Listas e divisórias substituem cartões elevados.
- Conteúdo responsivo em português brasileiro.

## Colors

A paleta articula branco e azuis pálidos em torno de tinta marinho; o azul de marca fica concentrado em ações e links.

### Primary
- **Azul de ação**: usado em botões, links, marcadores e ícones de metadados.
- **Azul de ação escuro**: estado hover do botão e dos links.
- **Azul de foco**: contorno de foco visível e indicação de foco dos campos.

### Neutral
- **Branco de página**: fundo base, cabeçalho e superfícies dos formulários.
- **Azul névoa**: fundo do hero e das seções de competências e perfil.
- **Azul névoa profundo**: superfície de contribuições open source.
- **Tinta marinho**: títulos e fundo de alto contraste da seção de contato.
- **Texto ardósia**: texto principal corrido.
- **Texto secundário**: descrições, metadados e rótulos de apoio.
- **Linha azul-cinza**: divisórias e bordas dos painéis.
- **Borda de campo**: contorno padrão dos campos.
- **Verde de sucesso** e **vermelho de erro**: estados da resposta do formulário.

### Named Rules
**The Blue-Action Rule.** Reserve o azul de marca para ações, links e pequenos indicadores; mantenha áreas extensas nas superfícies claras ou na tinta marinho já usada no contato.

## Typography

**Display Font:** Geist (com Arial, sans-serif como fallback)
**Body Font:** Geist (com Arial, sans-serif como fallback)
**Label/Mono Font:** Geist Mono (com monospace como fallback, para números do processo)

**Character:** Sans-serif contemporânea, compacta e funcional. Títulos grandes usam peso firme e espaçamento ligeiramente fechado; texto corrido preserva entrelinha confortável.

### Hierarchy
- **Display** (peso 650, `clamp(2.65rem, 5.4vw, 4.65rem)`, linha 1.06): título principal do hero; mantém largura curta e quebra equilibrada.
- **Headline** (peso 620, `clamp(1.85rem, 3.5vw, 2.8rem)`, linha 1.16): títulos de seção e apresentação.
- **Title** (peso 650, `1.05rem`, linha 1.4): itens de serviço e títulos de conteúdo.
- **Body** (peso 400, `1rem`, linha 1.65): texto corrido; descrições frequentemente limitadas a cerca de 55–66 caracteres largos.
- **Label** (peso 700, `0.78rem`, espaçamento `0.075em`, maiúsculas): identificadores curtos do hero e do perfil.

### Named Rules
**The Short-Measure Rule.** Preserve a leitura em blocos curtos: títulos têm largura limitada em `ch`, e descrições não se estendem pela largura inteira do container.

## Layout

O conteúdo usa um container central de no máximo 1160px, com gutters de 24px em telas maiores e 16px em telas estreitas. Seções usam espaçamento vertical fluido, em geral entre 4.5rem e 7rem. No desktop, hero, introduções, sobre e contato dividem conteúdo em duas colunas; projetos e serviços formam listas de duas colunas e o processo usa quatro etapas. Até 900px, navegação ocupa uma linha própria e o processo passa a duas colunas. Até 640px, os layouts principais e listas tornam-se uma coluna; a navegação pode rolar horizontalmente. Metadados permanecem junto aos itens que explicam.

## Elevation & Depth

O sistema é plano: não há sombras decorativas. A profundidade vem da alternância tonal entre superfícies, do fundo marinho do contato, das bordas e da hierarquia tipográfica. Contornos são reservados a painel de perfil, formulário, campos e foco.

### Named Rules
**The Flat-By-Default Rule.** Não introduza sombras para elevar listas ou blocos; use as superfícies e linhas existentes para separar conteúdo.

## Shapes

O vocabulário usa cantos discretos: campos têm arredondamento pequeno (5px), ações têm cantos levemente arredondados (6px) e painéis/formulário têm cantos um pouco mais suaves (10px). Listas de projetos, serviços e processo permanecem abertas, separadas por linhas horizontais finas. O foco tem contorno externo visível, sem transformar o campo em um elemento decorativo.

## Components

### Buttons
- **Shape:** cantos discretos (6px), altura mínima de 48px.
- **Primary:** fundo azul de ação, texto branco e padding vertical/horizontal de 0.7rem 1.1rem; a chamada do cabeçalho é mais compacta.
- **Hover / Focus:** hover escurece o azul; foco visível usa contorno azul de 2px com afastamento de 3px.
- Links textuais usam azul, peso 600 e sublinhado no hover; uma seta fina acompanha as ações principais.

### Cards / Containers
- **Corner Style:** painel de perfil e formulário usam 10px; listas de projeto e serviço não são cartões.
- **Background:** o painel de perfil é branco; o formulário branco aparece sobre o fundo marinho do contato.
- **Shadow Strategy:** sem sombra; linhas e contraste tonal definem os limites.
- **Border:** painel de perfil tem linha azul-cinza; o formulário não tem borda explícita.
- **Internal Padding:** fluido, de 1.25rem a 2rem conforme o componente e a largura.

### Inputs / Fields
- **Style:** fundo branco, texto marinho, borda azul-cinza, cantos de 5px e padding de 0.7rem 0.8rem.
- **Focus:** borda azul de foco e halo externo translúcido de 3px; o foco por teclado também tem contorno visível.
- **States:** campos mantêm labels acima e placeholders discretos; mensagens de sucesso e erro usam verde e vermelho.

### Navigation
- Cabeçalho branco sticky, com linha inferior fina, marca à esquerda, navegação por seções e ação de contato.
- Links usam texto de corpo em tamanho compacto; hover muda para azul de marca.
- Até 900px, os links vão para uma linha própria; em telas estreitas ficam roláveis horizontalmente.

### Project and Contribution Rows
- Projetos aparecem em uma lista dividida por linhas, com nome vinculado, descrição opcional e metadados compactos.
- Contribuições usam uma linha aberta com rótulo de destaque, descrição, links de PR e metadados; em telas estreitas, conteúdo e metadados empilham.

## Do's and Don'ts

### Do:
- **Do** mantenha superfícies brancas e azuladas, texto marinho e azul de ação nos usos já definidos.
- **Do** use linhas finas e listas abertas para organizar projetos, competências e etapas.
- **Do** mantenha a hierarquia Geist e use Geist Mono para numeração técnica.
- **Do** preserve os layouts em uma coluna em telas estreitas e o foco visível nos controles.

### Don't:
- **Don't** adicione gradientes, vidro, sombras decorativas ou ilustrações genéricas.
- **Don't** transforme cada item de lista em cartão elevado.
- **Don't** use o azul de ação como preenchimento de grandes áreas; o contato já possui seu tratamento escuro próprio.
- **Don't** sacrifique labels dos campos, foco visível ou a adaptação responsiva.
