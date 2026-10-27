<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- `npm run dev` — dev server (Turbopack; CSS loads via the `@tailwindcss/turbopack` rule in `next.config.ts`).
- `npm run lint` — runs `eslint` with no path args; flat config in `eslint.config.mjs` lints the whole repo. It exits 0 on warnings, so read the output instead of trusting the exit code.
- `npx tsc --noEmit` — typecheck. There is no `typecheck` script in `package.json`.
- `npm run build` — production build; verified to pass.
- **No test runner, tests, hooks, or CI** (`.github/` does not exist). `npm test` does not exist — don't add an expectation for it. Verification order: `lint → tsc → build`.
- Use npm only (`package-lock.json` is the lockfile; the yarn/pnpm/bun lines in README are boilerplate).

## Structure

- Next.js 16 App Router, single package, all code under `src/` (README still says `app/` — it's untouched create-next-app boilerplate).
- `src/app/page.tsx` is the entire landing page: it composes section components from `src/components/`. The only other route is `src/app/projects/[slug]/page.tsx`, which is SSG via `generateStaticParams`.
- **Content source of truth is `src/data/projects.ts`** — typed `Project[]` plus `getProject()`. Both the project cards and the slug page render from it. Adding/editing a project means editing that file and dropping a screenshot in `public/projects/`; don't hardcode content in components.
- Image paths in `projects.ts` must match `public/` filenames **exactly, including case** — the file is `public/projects/fitlog.JPG` but data references `/projects/fitlog.jpg`, which works on Windows and 404s on case-sensitive hosts (Vercel). Keep new references case-exact.
- `liveUrl`/`githubUrl` use the sentinel `"#"` for "not available"; the slug page renders a disabled button when it sees it.
- Path alias `@/*` → `src/*`.
- No `.env` files or env vars anywhere; contact is a `mailto:` link (no form backend).

## Conventions

- Tailwind v4 is CSS-first: there is no `tailwind.config.*` and creating one has no effect. Theme/custom CSS lives in `src/app/globals.css` under `@theme inline`.
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`, `babel-plugin-react-compiler` in devDependencies): don't add manual `useMemo`/`useCallback` memoization.
- Only framer-motion components (`Hero`, `Navbar`, `Reveal`, `FloatingIcons`) are client components (`"use client"`). Keep new components server-side unless they need state, effects, or event handlers.
