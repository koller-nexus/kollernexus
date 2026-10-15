---
name: Koller Nexus
description: Prancha técnica assinada por um engenheiro de software, com trabalho medido e contato direto.
colors:
  paper: "#f6f7f4"
  sheet: "#ffffff"
  ink: "#1a1f27"
  body: "#3b434e"
  muted: "#5c6470"
  brand: "#0b4688"
  brand-hover: "#073a74"
  diazo: "#a9bfdb"
  diazo-strong: "#6f8fb8"
  diazo-wash: "#edf2f8"
  rule: "#d9dee3"
  field-rule: "#7d8fa6"
  focus: "#2f7fd1"
  success: "#176143"
  error: "#a53131"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6.6vw, 5.4rem)"
    fontWeight: 640
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 86"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.15rem)"
    fontWeight: 630
    lineHeight: 1.05
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 88"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2rem)"
    fontWeight: 630
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 88"
  title-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 640
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.08rem, 1.4vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.09em"
    fontVariation: "'wdth' 118"
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.85rem"
    fontWeight: 400
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
  control: "4px"
  marker: "50%"
spacing:
  frame-max: "1200px"
  frame-gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  band-block: "clamp(4rem, 9vw, 7.5rem)"
  hero-block: "clamp(3.5rem, 8vw, 6.5rem)"
  cell: "0.75rem 1rem"
  header-height: "64px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.2rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "{colors.sheet}"
  button-primary-header:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.control}"
    padding: "0.5rem 0.95rem"
    height: "40px"
  text-link:
    textColor: "{colors.brand}"
  text-link-hover:
    textColor: "{colors.brand-hover}"
  site-header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.body}"
    height: "64px"
  title-block:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  schedule-row-hover:
    backgroundColor: "{colors.diazo-wash}"
  detail-marker:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.marker}"
    size: "2.5rem"
  form-field:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1rem 0.6rem"
  form-field-focus:
    backgroundColor: "{colors.diazo-wash}"
---

# Design System: Koller Nexus

## Overview

**Creative North Star: "A Prancha Técnica"**

O site é uma folha de desenho técnico assinada: papel de desenho branco-frio, linhas em tinta grafite, traços azul-diazo para réguas, cotas e chamadas, e um carimbo com a foto, o nome e o cargo de quem responde pelo trabalho. A referência é o jogo de pranchas do modernismo brasileiro em cópia heliográfica, lido como documento de engenharia e não como fantasia. Cada linha na página mede ou aponta algo real: a cota em cadeia mede as cinco disciplinas da oferta, o quadro de projetos lista repositórios ordenados ao vivo pelo GitHub, o processo aparece como chamadas de detalhe numeradas.

A densidade é de prancha, não de vitrine: uma moldura única corre a altura inteira da página, as seções são faixas separadas por uma régua diazo, e o conteúdo vive em células com bordas de tinta e rótulos em versalete minúsculo. Não há cartões, sombras, gradientes, vidro nem brilho escuro. A única cor sólida preenchida é o azul da marca, e ela pertence à ação de contato.

A voz é sempre a primeira pessoa de William ("Construo", "Quem lê e responde sou eu"). A página recusa o splash genérico de portfólio dev (hero com gradiente, grade de cartões, glow escuro) e a voz impessoal de agência.

**Key Characteristics:**
- Moldura única de até 1200px com bordas laterais diazo, do cabeçalho ao rodapé.
- Faixas (bands) empilhadas, separadas por uma régua diazo de 1px.
- Carimbo, quadro de especificação, quadro de revisões e formulário em células com borda de tinta de 1,5px.
- Archivo variável com eixo de largura: títulos estreitados, rótulos em versalete alargados.
- Geist Mono com algarismos tabulares para tudo que é medida.
- Um único momento de movimento autoral: a cota em cadeia se desenha uma vez ao carregar.

## Colors

Paleta de prancha heliográfica: papel quase neutro, tinta grafite levemente azulada, linhas diazo e um único azul de marca saturado.

### Primary
- **Azul Koller** (brand): a única cor sólida preenchida. Botão "Falar comigo" no cabeçalho, botão "Conversar sobre seu projeto" no hero e "Enviar mensagem" no formulário. Também é a cor de texto dos links (text-link, links do carimbo e do rodapé), dos ícones de estrela e dos ícones de contato, e o fundo da seleção de texto.
- **Azul Koller Fundo** (brand-hover): hover do botão primário e dos text-links, só em ponteiro fino.

### Secondary
- **Diazo** (diazo): a linha de construção. Bordas laterais da moldura, régua entre faixas, borda inferior do cabeçalho e sublinhado em repouso dos links.
- **Diazo Forte** (diazo-strong): a linha que mede. Traço da cota em cadeia, linha de chamada que liga os marcadores do processo e o polegar da barra de rolagem.
- **Lavagem Diazo** (diazo-wash): o único tom de preenchimento além do papel. Hover das linhas do quadro de projetos e campo do formulário em foco.

### Neutral
- **Papel** (paper): fundo da página e do cabeçalho fixo; fundo do marcador de detalhe para que ele corte a linha de chamada.
- **Folha** (sheet): o branco das peças desenhadas sobre o papel (carimbo, quadros, formulário) e o texto sobre o azul.
- **Tinta Grafite** (ink): títulos, nomes, valores e as bordas estruturais de 1,5px; os traços oblíquos da cota.
- **Texto Corrido** (body): cor padrão do corpo e da navegação.
- **Lápis** (muted): rótulos em versalete, textos de apoio, descrições do quadro e legendas.
- **Régua Fina** (rule): divisórias internas entre linhas e células do carimbo, quadros, serviços e rodapé.
- **Régua de Campo** (field-rule): divisórias do formulário, mais fortes que a régua fina para que os campos sejam legíveis como campos.
- **Foco** (focus): contorno de 2px com afastamento de 3px em todo elemento interativo com focus-visible; no formulário, contorno interno da célula.
- **Sucesso** (success) e **Erro** (error): apenas texto das mensagens de status do formulário, nunca preenchimento.

### Named Rules
**The One Solid Fill Rule.** O azul da marca é a única cor preenchida em blocos, e só nos botões que levam ao contato ou o enviam. Nenhuma outra superfície recebe cor sólida; o resto é papel, folha e linha.

**The Diazo Measures Rule.** Diazo é cor de linha, não de superfície. Use diazo para molduras e réguas, diazo-strong para linhas que medem ou apontam, e diazo-wash só como resposta a estado (hover, foco).

## Typography

**Display Font:** Archivo variável com eixo `wdth` (com system-ui, sans-serif)
**Body Font:** Archivo (com system-ui, sans-serif)
**Label/Mono Font:** Geist Mono (com ui-monospace, monospace), sempre com algarismos tabulares

**Character:** Uma grotesca de engenharia usada em duas larguras: estreitada (wdth 86–88) e pesada para títulos que parecem letreiro de prancha, alargada (wdth 118) em versalete minúsculo para rótulos de carimbo. A mono entra só onde há número que mede.

### Hierarchy
- **Display** (640, clamp(2.75rem, 6.6vw, 5.4rem), 0.98, wdth 86, -0.03em): só o h1 do hero, em primeira pessoa, até 13ch, `text-wrap: balance`. No celular cai para clamp(2.5rem, 12vw, 3.4rem).
- **Headline** (630, clamp(2rem, 4vw, 3.15rem), 1.05, wdth 88, -0.025em): h2 de cada faixa, até 20ch, balanceado. Sempre uma frase com ponto final ("O que eu faço.").
- **Title** (630, clamp(1.5rem, 2.6vw, 2rem), 1.1, wdth 88, -0.02em): nomes de disciplina no quadro de serviços.
- **Title pequeno** (640, 1.2rem, 1.3, -0.01em): h3 dos passos do processo; o nome do projeto open source usa 1.45rem e o nome no carimbo 1.3rem / 650, mesmas regras.
- **Lead** (400, clamp(1.08rem, 1.4vw, 1.22rem), 1.6): parágrafo do hero, até 54ch.
- **Body** (400, 1.0625rem, 1.6): texto corrido em body; textos de apoio em muted, 52–58ch.
- **Label** (600, 0.68rem, wdth 118, 0.09em, maiúsculas): rótulos de célula do carimbo e do rodapé, cabeçalhos dos quadros, rótulos de campo do formulário e os segmentos da cota. Rotula um dado; nunca antecede um título como sobretítulo.
- **Mono** (Geist Mono, 0.8–0.95rem, tabular-nums): números de linha do quadro (01, 02…), contagem de estrelas, números de PR e os algarismos dos marcadores de detalhe.

### Named Rules
**The Two Widths Rule.** Títulos são estreitos (wdth 86–88), rótulos são largos (wdth 118). Corpo fica na largura padrão. Nunca inverta.

**The Mono Measures Rule.** Geist Mono só aparece em número que mede, conta ou identifica (folha, escala, revisão, nº, estrelas, PR). Texto corrido nunca é mono.

## Layout

**A moldura (frame).** Uma única coluna de largura `min(100% - 2rem, 1200px)`, centralizada, com bordas laterais de 1px em diazo e gutter interno clamp(1.25rem, 4vw, 3.5rem). Cabeçalho, todas as faixas e o rodapé usam a mesma moldura, então as bordas laterais correm sem interrupção do topo ao fim. Abaixo de 640px as bordas laterais somem.

**As faixas (bands).** Cada seção é uma faixa com régua superior diazo de 1px e respiro vertical clamp(4rem, 9vw, 7.5rem). O hero usa clamp(3.5rem, 8vw, 6.5rem).

**Grades internas.** Proporções em doze avos: hero 7/5 (texto e carimbo), open source 5/7, contato 5/7, sobre 1/1, serviços 4/8 (termo e descrição), cabeçalho de seção 1fr / 0.75fr alinhado pela base. O processo usa quatro colunas.

**Responsivo.** Em 960px o hero empilha (carimbo até 520px), a navegação passa para uma segunda linha rolável, o processo vai para duas colunas e a linha de chamada some, e open source empilha. Em 640px tudo vira coluna única, as ações do hero empilham, o quadro de projetos vira grade de três colunas por linha (nº, nome/linguagem, estrelas) sem cabeçalho, o botão do formulário ocupa a largura toda e o rodapé reorganiza suas células em 2 colunas.

**Âncoras.** `scroll-padding-top` de 5rem (7rem no celular) compensa o cabeçalho fixo.

## Elevation & Depth

Totalmente plano. Não há `box-shadow`, gradiente, desfoque nem vidro em nenhum lugar. Profundidade é dada por hierarquia de linha: a peça desenhada (carimbo, quadro, formulário) é uma folha branca sobre o papel, contornada por tinta de 1,5px; divisões internas usam régua fina de 1px; o fundo do sistema é papel. O cabeçalho fixo se separa do conteúdo por uma borda diazo e fundo papel opaco, não por sombra.

### Named Rules
**The Line Weight Rule.** Três pesos, três funções: 1,5px em tinta contorna uma peça, 1px em tinta separa cabeçalho de corpo dentro dela, 1px em régua fina divide linhas e células. Diazo 1px é a construção da página.

**The Flat Sheet Rule.** Nada flutua. Se um elemento precisa se destacar, ele ganha uma borda de tinta ou o azul da ação, nunca uma sombra.

## Shapes

Quadrado por padrão. Peças, células, campos e quadros têm cantos de 0px. Só duas exceções, ambas funcionais: controles acionáveis (botão primário e o atalho "pular para o conteúdo") têm canto de 4px, e os marcadores de detalhe do processo são círculos (50%) com borda de tinta de 1,5px, como a bolha de chamada de detalhe numa prancha. Os traços oblíquos da cota são segmentos de 1×13px girados 45°.

## Components

### Buttons
Firme e único: o botão é a única mancha de cor da página.
- **Shape:** canto levemente quebrado (4px).
- **Primary:** fundo brand, texto sheet, 600, 0.95rem, altura mínima 48px, padding 0.75rem 1.2rem, seta opcional de 18px à direita.
- **Header CTA:** mesma peça compacta, altura 40px (38px no celular), 0.88rem.
- **Hover / Focus:** hover (só ponteiro fino) troca para brand-hover em 150ms e empurra a seta 3px para a direita em 180ms com ease-out. Pressionar aplica `scale(0.97)` em 140ms. Foco: contorno focus de 2px afastado 3px. Desabilitado (envio em andamento): opacidade 0.7, cursor de espera.

### Text Link
- Texto brand, 600, sublinhado diazo de 1px afastado 0.22em; seta opcional. Hover em ponteiro fino: brand-hover e sublinhado na cor do texto. É a ação secundária ao lado de todo botão primário.

### Navigation
- **Cabeçalho:** borda da folha, fixo no topo, 64px, fundo papel e borda inferior diazo. À esquerda a marca KN (30px) e "Koller Nexus" em 650 ink; ao centro a navegação simples por seção (0.9rem, 500, body; hover brand); à direita o CTA "Falar comigo". Sem códigos de índice de folha. Abaixo de 960px a navegação desce para uma segunda linha (rolável, depois quebrando em 640px).

### Cota em cadeia (signature)
- Lista ordenada das cinco disciplinas sob o lead do hero, em label caps muted, segmentos de largura igual. Cada segmento tem um traço de 1px em diazo-strong na base e um traço oblíquo de tinta a 45° em cada junta, com um traço final no último segmento. Mede a oferta; nunca vira régua decorativa em pixels. No celular: 0.7rem, wdth 76.

### Carimbo (title block)
- Peça folha com contorno de tinta de 1,5px. Foto do responsável (retrato fornecido por ele) em 1:1, separada por 1px de tinta. Linhas de células com régua fina: "Responsável técnico" com nome e cargo; duas células, Cidade (Curitiba, PR) e Atendimento (Remoto); "Onde me encontrar" com links brand (GitHub, LinkedIn, WhatsApp) e ícones de 16px. Cada célula: rótulo caps muted sobre o valor em ink, padding 0.75rem 1rem.

### Quadro de especificação (projetos)
- Tabela de largura total sobre folha, com régua de tinta de 1,5px em cima e embaixo e 1px de tinta sob o cabeçalho. Colunas fixas: Nº (mono, 01…), Repositório (nome ink 600 + descrição muted até 62ch), Linguagem, Estrelas (mono, alinhado à direita, estrela brand de 12px). Linhas divididas por régua fina; hover em ponteiro fino pinta a linha com diazo-wash e sublinha o nome em brand. Legenda abaixo: título em negrito ink + explicação muted + text-link.

### Quadro de chamadas (serviços)
- Lista de definição entre réguas de tinta de 1,5px; cada disciplina em Title à esquerda (4/8) e a descrição em primeira pessoa, muted, à direita; itens separados por régua fina.

### Quadro de revisões (open source)
- Mesma peça do quadro de especificação com duas colunas: PR (mono, #número) e Alteração (link ink com sublinhado diazo, hover brand). Ao lado, o projeto destacado com h3, descrição e metadados mono (estrelas ao vivo, linguagem).

### Marcadores de detalhe (processo)
- Quatro passos numerados em grade de quatro colunas, ligados por uma linha de chamada horizontal de 1px em diazo-strong. Cada marcador é um círculo de 2.5rem, borda de tinta de 1,5px, fundo papel, algarismo mono 600. Abaixo: h3 em Title pequeno e descrição muted.

### Inputs / Fields (formulário de células)
- **Style:** o formulário é uma peça folha com contorno de tinta de 1,5px; cada campo é uma célula com rótulo caps muted e entrada sem borda própria, divididas por field-rule. Nome e e-mail dividem uma linha em duas células.
- **Focus:** a célula inteira ganha fundo diazo-wash (150ms) e, com foco de teclado, contorno focus de 2px interno.
- **Rodapé do formulário:** nota de privacidade muted (0.82rem) e botão primário à direita.
- **Status:** linha abaixo com régua fina; texto success ou error, sem preenchimento.

### Faixa de título (rodapé)
- Régua de tinta de 1,5px no topo e uma linha de células como o carimbo: Koller Nexus (©), Site, Código, Perfil, com rótulos caps muted e links brand 600 (sublinham no hover). Proporção 2/1/1/1, células divididas por régua fina.

### Motion
- Um único momento autoral: ao carregar, cada segmento da cota se desenha (scaleX de 0 a 1, 640ms, ease-out `cubic-bezier(0.23, 1, 0.32, 1)`, 70ms de defasagem entre segmentos a partir de 120ms) e os traços oblíquos aparecem em 240ms. Sem revelações por seção.
- Microinterações: cor em 120–150ms, seta 180ms ease-out, pressão do botão 0.97. Todo hover fica atrás de `(hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion: reduce` desliga animações, reduz transições a 0.01ms e desliga a rolagem suave; a cota aparece estática e completa.

## Do's and Don'ts

### Do:
- **Do** manter tudo dentro da moldura única de até 1200px, com faixas separadas por régua diazo de 1px.
- **Do** desenhar peças (carimbo, quadros, formulário) como folha branca com contorno de tinta de 1,5px e células divididas por régua fina.
- **Do** reservar o preenchimento brand para os botões que levam ao contato ou o enviam.
- **Do** fazer cada linha medir ou apontar algo real: cota que mede disciplinas, linha de chamada que liga passos, régua que separa dados.
- **Do** rotular dados com caps em wdth 118 e escrever medidas em Geist Mono tabular.
- **Do** escrever em primeira pessoa, com a voz de William, e títulos como frases com ponto final.
- **Do** manter o desenho da cota como o único movimento de entrada e respeitar prefers-reduced-motion.
- **Do** colocar hover atrás de `(hover: hover) and (pointer: fine)` e dar feedback de pressão com scale(0.97).

### Don't:
- **Don't** usar sombras, gradientes, vidro, desfoque ou brilho escuro.
- **Don't** usar cartões arredondados nem grades de cartões; cantos são quadrados, exceto controles (4px) e marcadores de detalhe (círculo).
- **Don't** preencher qualquer superfície com azul ou outra cor sólida além do botão de contato; diazo-wash só como estado.
- **Don't** adicionar linhas, réguas ou cotas decorativas que não medem nada (régua de pixels, códigos de índice de folha na navegação).
- **Don't** colocar sobretítulos (eyebrows) acima dos títulos; o versalete rotula dados em células.
- **Don't** usar mono em texto corrido nem animar seções ao rolar.
- **Don't** escrever na voz impessoal de agência ("nossa equipe", "nossos especialistas").
