<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project guidance

This project uses Next.js 16, React 19, and Tailwind CSS 4. Prefer TypeScript and follow the existing project structure and patterns.

### React and Next.js

- Before changing Next.js code, read the relevant guide in `node_modules/next/dist/docs/`. The installed docs are authoritative for this version; do not rely on conventions from older Next.js versions.
- Use the App Router conventions already present in the project. Keep components as Server Components by default; add `'use client'` only for interactivity, browser APIs, or client-side state, and keep client boundaries narrow.
- Keep server-only data access and secrets out of client modules. Pass only the data needed by Client Components across the server/client boundary.
- Avoid async waterfalls: run independent work concurrently, defer work until needed, and use Suspense boundaries where streaming improves the interface.
- Keep bundles small: avoid unnecessary dependencies and broad barrel imports; dynamically load genuinely heavy, non-critical client features when appropriate.
- Follow the detailed performance guidance in [React Best Practices](.agents/skills/vercel-react-best-practices/SKILL.md), especially for data fetching, bundle size, rendering, and state updates.

### Tailwind CSS and UI

- This repository uses Tailwind CSS 4 with `@tailwindcss/postcss`. Follow the v4 CSS-first setup and the existing global stylesheet and design tokens; do not introduce Tailwind v3 configuration or directives unless the project is deliberately migrated.
- Prefer responsive Tailwind utilities and shared theme tokens over one-off styles. Keep class names statically discoverable; use explicit class mappings instead of building utility names dynamically.
- Preserve the existing visual language and component patterns when changing UI. Make interfaces accessible and responsive, including semantic HTML, keyboard behavior, visible focus, and reduced-motion preferences where relevant.
- For substantial UI design or review work, use the [Impeccable skill](.agents/skills/impeccable/SKILL.md) and follow its project-context and craft guidance. Do not invoke its UI workflow for unrelated backend changes.

### TypeSafe

- When a feature needs programmable judgments (routing, ranking, extraction, verification, or replacing a prompt-and-parse step), use the [TypeSafe skill](.agents/skills/typesafe-ai/SKILL.md) and follow its live docs before writing an integration.

### Verification

- Run the narrowest relevant checks after code changes. Available project scripts include `npm run lint` and `npm run build`.
- Do not update framework setup or generated Next.js agent-rule blocks without a task-related reason.
