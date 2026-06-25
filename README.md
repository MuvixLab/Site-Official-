# MuvixLab Technology — Documentação do Projeto

> Site institucional premium para a startup de tecnologia **MuvixLab Technology**.

---

## 1. Visão Geral

Este projeto é um site institucional one-page desenvolvido com foco em:

- **Identidade visual premium**: glassmorphism, gradientes, animações suaves e efeitos modernos.
- **Dark/Light Mode**: tema escuro por padrão, com persistência em `localStorage` e alternância instantânea.
- **Performance e SEO**: meta tags dinâmicas, fontes pré-carregadas, lazy loading de imagens e código otimizado.
- **Acessibilidade**: navegação por teclado, labels ARIA, contraste adequado e semântica HTML correta.
- **Mobile First**: design totalmente responsivo, do mobile ao desktop.

### Público-alvo

Microempreendedores, pequenas empresas e startups que precisam de soluções digitais sob medida.

### Serviços divulgados

- Desenvolvimento de Software
- Sistemas Web
- Aplicativos Mobile
- Automação de Processos
- Integrações e APIs
- Consultoria Tecnológica

---

## 2. Stack Tecnológica

| Camada | Tecnologia |
|-------------|-----------|
| Framework --| [TanStack Start v1](https://tanstack.com/start) (React 19 + SSR/SSG) |
| Build Tool -| Vite 8 |
| Estilização | Tailwind CSS v4 (`src/styles.css`) |
| Animações --| CSS keyframes + IntersectionObserver (scroll reveal) |
| Ícones -----| Lucide React |
| Fontes -----| Inter, Space Grotesk, JetBrains Mono (Google Fonts) |
| Hospedagem -| Lovable Cloud / Cloudflare Workers |

---

## 3. Estrutura de Pastas

```text
.
├── src/
│   ├── assets/              # Imagens, logos e recursos estáticos
│   │   ├── muvixlab-logo.png.asset.json
│   │   ├── proj-*.jpg        # Imagens do portfólio
│   │   ├── team-*.jpg        # Fotos da equipe
│   │   └── about-tech.jpg
│   ├── components/           # Componentes reutilizáveis
│   │   ├── header.tsx        # Navegação fixa + menu mobile
│   │   ├── hero-visual.tsx   # Mockup 3D interativo com código colorido
│   │   ├── logo.tsx          # Logo dinâmico conforme o tema
│   │   ├── particles.tsx     # Campo de partículas animadas
│   │   ├── reveal.tsx        # Animação de entrada ao scroll
│   │   ├── theme-toggle.tsx  # Botão de alternância de tema
│   │   └── ui/               # Componentes shadcn/ui (prontos para expansão)
│   ├── hooks/                # Hooks customizados
│   │   ├── use-theme.ts      # Gerenciamento do tema claro/escuro
│   │   └── use-mobile.tsx    # Hook utilitário mobile (shadcn)
│   ├── lib/                  # Utilitários e helpers
│   │   ├── utils.ts
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   └── lovable-error-reporting.ts
│   ├── routes/               # Rotas baseadas em arquivo (TanStack Router)
│   │   ├── __root.tsx        # Layout raiz, meta tags, providers
│   │   ├── index.tsx         # Página inicial (todas as seções)
│   │   └── README.md         # Convenções de rotas
│   ├── router.tsx            # Configuração do roteador
│   ├── server.ts             # Middleware de erro do servidor
│   ├── start.ts              # Inicialização do TanStack Start
│   └── styles.css            # Tokens de design, temas e utilidades CSS
├── package.json
├── tsconfig.json
├── vite.config.ts
├── components.json           # Configuração do shadcn/ui
└── README.md                 # Este arquivo
```

---

## 4. Como Executar

### Pré-requisitos

- [Bun](https://bun.sh/) instalado (gerenciador de pacotes utilizado no projeto)
- Node.js compatível (se preferir usar `npm` ou `pnpm`)

### Instalar dependências

```bash
bun install
```

### Ambiente de desenvolvimento

```bash
bun run dev
```

O servidor de desenvolvimento iniciará geralmente em `http://localhost:8080`.

### Build de produção

```bash
bun run build
```

### Pré-visualização da produção

```bash
bun run preview
```

### Lint e formatação

```bash
bun run lint      # ESLint
bun run format    # Prettier
```

---

## 5. Sistema de Temas (Dark/Light)

O tema é controlado pelo hook `useTheme` em `src/hooks/use-theme.ts`.

### Comportamento

- **Padrão**: tema escuro (`dark`).
- **Persistência**: salvo no `localStorage` com chave `muvixlab-theme`.
- **Detecção automática**: tenta respeitar `prefers-color-scheme` se nenhuma preferência estiver salva.
- **Flicker-free**: script inline no `<head>` (`src/routes/__root.tsx`) aplica a classe `dark` antes da renderização.

### Tokens de cor (`src/styles.css`)

| Token | Modo Claro | Modo Escuro |
|-------|-----------|-------------|
| `--background` | `#f8fafc` | `#050816` |
| `--foreground` | `#111827` | `#ffffff` |
| `--card` | `#ffffff` | `#0f172a` |
| `--primary` | `#0a5cff` | `#0a5cff` |
| `--primary-glow` | `#296dff` | `#296dff` |
| `--gold` | `#c99a3a` | `#e6c17a` |
| `--border` | `#e2e8f0` | `rgba(255,255,255,0.08)` |

### Classes utilitárias customizadas

- `.glass` — fundo translúcido com blur e borda sutil.
- `.glass-strong` — variação mais opaca do glassmorphism.
- `.text-gradient` — texto com gradiente animado primary → glow → gold.
- `.bg-grid` — grid de fundo sutil.
- `.glow-primary` — sombra glow usando a cor primária.

---

## 6. Seções da Página Inicial

A página inicial (`src/routes/index.tsx`) é composta pelas seguintes seções, renderizadas em ordem:

| Seção | Componente | Descrição |
|-------|-----------|-----------|
| Header | `Header` | Navegação fixa, responsiva, com menu mobile e toggle de tema |
| Hero | `Hero` | Título de impacto, CTA e mockup tecnológico 3D |
| Stats | `Stats` | Números de impacto (projetos, sistemas, automações, clientes) |
| Serviços | `Services` | Cards com os 6 serviços principais |
| Portfólio | `Portfolio` | Projetos com filtros por categoria (Todos, Web, Mobile, Sistemas, Automações) |
| Tecnologias | `Technologies` | Stack tecnológica agrupada por área |
| Sobre | `About` | Vídeo institucional com placeholder animado |
| Equipe | `Team` | Fotos, cargos e descrições dos membros |
| Processo | `Process` | Timeline de 6 etapas do desenvolvimento |
| Depoimentos | `Testimonials` | Cards de clientes com estrelas |
| CTA | `CTA` | Chamada final para orçamento |
| Footer | `Footer` | Logo, links, redes sociais e copyright |

---

## 7. Componentes Principais

### `Header` (`src/components/header.tsx`)

- Navegação fixa no topo.
- Muda de aparência ao scrollar (`glass-strong` + borda).
- Menu hambúrguer para mobile.
- Botão de orçamento e `ThemeToggle`.

### `HeroVisual` (`src/components/hero-visual.tsx`)

- Mockup de janela de código com **syntax highlighting colorido**.
- Efeito 3D/paralaxe ao mover o mouse.
- Anéis orbitando e pontos flutuantes.
- Cores dos tokens inspiradas no VS Code:
  - Palavras-chave: `#c586c0`
  - Identificadores: `#4fc1ff`
  - Strings: `#ce9178`
  - Funções: `#dcdcaa`
  - Números: `#b5cea8`
  - Comentários: `#6a9955`

### `Logo` (`src/components/logo.tsx`)

- Renderiza a logo original da MuvixLab.
- **Adapta-se automaticamente ao tema**:
  - Modo claro: aplica fundo escuro (`#050816`) e glow azul para preservar a identidade visual.
  - Modo escuro: logo transparente.

### `ParticlesField` (`src/components/particles.tsx`)

- Gera partículas flutuantes com tamanhos, posições e durações aleatórias.
- Usado no Hero e na seção CTA.

### `Reveal` (`src/components/reveal.tsx`)

- Anima elementos ao entrarem na viewport.
- Usa `IntersectionObserver` com threshold de 0.12.
- Suporta `delay` para efeito cascata.

### `ThemeToggle` (`src/components/theme-toggle.tsx`)

- Botão com ícones de Sol/Lua com transição animada.
- ARIA label dinâmico.

---

## 8. Configuração de SEO e Meta Tags

As meta tags estão definidas em `src/routes/__root.tsx` (globais) e em `src/routes/index.tsx` (específicas da home).

### Tags configuradas

- `viewport`: responsivo.
- `title` e `description`.
- `author`: MuvixLab Technology.
- `theme-color`: `#050816`.
- Open Graph (`og:title`, `og:description`, `og:type`).
- Twitter Card (`twitter:card`).
- Pré-conexão com Google Fonts.
- Fontes: Inter, Space Grotesk, JetBrains Mono.

### Dicas para melhorar o SEO

1. Preencha o atributo `poster` do vídeo em `About`.
2. Adicione uma imagem Open Graph (`og:image`) quando houver.
3. Crie páginas separadas para `/servicos`, `/portfolio`, `/sobre` se o conteúdo crescer.

---

## 9. Ativos e Mídia

### Imagens do portfólio

| Arquivo | Projeto |
|---------|---------|
| `proj-erp.jpg` | Sistema de Gestão Empresarial |
| `proj-portal.jpg` | Portal de Atendimento |
| `proj-dashboard.jpg` | Dashboard Inteligente |
| `proj-finance.jpg` | Sistema Financeiro |
| `proj-mobile.jpg` | Aplicativo Mobile |
| `proj-saas.jpg` | Plataforma SaaS |

### Fotos da equipe

| Arquivo | Membro |
|---------|--------|
| `team-1.jpg` | Lucas Almeida — CEO & Co-fundador |
| `team-2.jpg` | Mariana Costa — Head of Design |
| `team-3.jpg` | Pedro Oliveira — Full-Stack Developer |
| `team-4.jpg` | Beatriz Santos — Project Manager |

### Logo

A logo é carregada via `src/assets/muvixlab-logo.png.asset.json` e preserva suas cores originais.

---

## 10. Personalização

### Trocar o vídeo institucional

No componente `About` (`src/routes/index.tsx`), localize o elemento `<video>`:

```tsx
<video controls preload="metadata" poster="/caminho-do-poster.jpg">
  <source src="/caminho-do-video.mp4" type="video/mp4" />
  Seu navegador não suporta vídeos HTML5.
</video>
```

1. Adicione o arquivo de vídeo em `public/` ou em `src/assets/`.
2. Preencha o `src` do `<source>`.
3. Adicione uma imagem de poster para melhor experiência.
4. Remova ou oculte o placeholder animado quando o vídeo estiver pronto.

### Alterar membros da equipe

Edite o array `TEAM` em `src/routes/index.tsx`:

```tsx
const TEAM = [
  { img: team1, name: "Novo Nome", role: "Novo Cargo", desc: "Breve descrição." },
  // ...
];
```

### Alterar cores da marca

Edite as variáveis CSS em `src/styles.css`, dentro de `:root` e `.dark`:

```css
:root {
  --primary: #0a5cff;
  --primary-glow: #296dff;
  --gold: #c99a3a;
}
```

### Adicionar nova seção

1. Crie uma função componente em `src/routes/index.tsx`.
2. Adicione-a à ordem de renderização dentro de `Home`.
3. Opcionalmente, adicione um link no `Header` (`NAV`).

---

## 11. Convenções de Código

- **Componentes**: funções nomeadas exportadas com PascalCase.
- **Hooks**: `use*` em camelCase.
- **Rotas**: arquivo `src/routes/index.tsx` para `/`, siga as convenções do TanStack Router.
- **Imports**: use o alias `@/` para referenciar arquivos de `src/`.
- **Estilos**: prefira classes utilitárias do Tailwind e tokens CSS. Evite cores hardcoded em componentes.
- **Acessibilidade**: sempre inclua `alt` em imagens, labels ARIA em botões e contraste adequado.

---

## 12. Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `bun run dev` | Inicia o servidor de desenvolvimento |
| `bun run build` | Gera build de produção |
| `bun run build:dev` | Build em modo desenvolvimento |
| `bun run preview` | Pré-visualiza o build de produção |
| `bun run lint` | Executa o ESLint |
| `bun run format` | Formata o código com Prettier |

---

## 13. Informações de Contato

- **Site**: [MuvixLab Technology](https://muvixlab.com)
- **E-mail**: contato@muvixlab.com
- **Redes sociais**: Instagram, LinkedIn, GitHub
- **Copyright**: © 2026 MuvixLab Technology. Todos os direitos reservados.

---

## 14. Notas Técnicas Importantes

- **Não use `src/pages/`**: este projeto usa roteamento baseado em arquivos do TanStack Start (`src/routes/`).
- **Não edite `src/routeTree.gen.ts`**: ele é gerado automaticamente pelo plugin do TanStack Router.
- **O root layout (`src/routes/__root.tsx`) precisa sempre conter `<Outlet />`**: sem ele, as rotas filhas não renderizam.
- **Build target**: Cloudflare Workers (configurado por `@lovable.dev/vite-tanstack-config`).

---

## 15. Próximos Passos Sugeridos

- [ ] Adicionar o vídeo institucional real na seção "Sobre".
- [ ] Criar páginas separadas para `/portfolio`, `/servicos` e `/blog`.
- [ ] Implementar formulário de contato funcional (back-end via server functions).
- [ ] Adicionar imagem Open Graph (`og:image`) para compartilhamento social.
- [ ] Configurar analytics (Google Analytics, Plausible, etc.).
- [ ] Internacionalização (i18n) para inglês/espanhol.
# Site-Official-
