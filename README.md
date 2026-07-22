# sean-portfolio

Personal portfolio site for Sean Octavo — a single-page site built with the Next.js App Router.

## Stack

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com)** (via `@tailwindcss/postcss`)
- **[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** — Anton, Archivo, Archivo Black, and Space Mono
- **[SVGR](https://react-svgr.com)** for importing SVGs as components

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page auto-updates as you edit.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/          # App Router: layout.tsx, page.tsx, globals.css
├── components/   # Reusable primitives (AsciiBackground, AsciiPanel, Reveal)
├── sections/     # Page sections (Hero, About, Projects, Experience, Contact…)
└── data/         # portfolio.ts — site content, separated from presentation
```

`src/app/page.tsx` composes the page from `sections/`, and all editable content
(bio, projects, experience, etc.) lives in `src/data/portfolio.ts`.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a production deploy.
