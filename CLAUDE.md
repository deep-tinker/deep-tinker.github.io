# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally

There is no test runner, linter, or formatter configured. Type errors do not block the build — Vite transpiles without type-checking, so rely on the editor / `tsc --noEmit` for type feedback.

## Architecture

Single-page personal portfolio: React 18 + TypeScript + Vite + Tailwind CSS. No router, no backend, no state management — it is one scrolling page assembled in `src/App.tsx` from section components rendered in fixed order (Navbar → Hero → About → Experience → Skills → Projects → Contact → Footer), plus a fixed bottom marquee ticker.

**Content/presentation split is the key convention.** All copy and structured data live in `src/data/*.ts` (one file per section: `hero.ts`, `about.ts`, `experience.ts`, `skills.ts`, `projects.ts`, `contact.ts`), exporting typed objects/arrays. The matching component in `src/components/` imports that data and only handles layout. **To change portfolio content, edit the `data/` file — not the component.** (Note: some content is still inline in components, e.g. About.tsx prose and Projects.tsx image URLs — but the data-file pattern is the intended direction.)

Scroll-reveal animation is done two ways: `App.tsx` has a global `IntersectionObserver` that fades in every `<section>`, and `AnimatedSection.tsx` wraps individual elements with Framer Motion `whileInView`. The Contact form is client-only — it builds a `mailto:` link rather than POSTing anywhere.

`react-hook-form` and `zod` are dependencies but not currently wired into the contact form (it uses local `useState`).

## Design system

The visual language is **Neo-Brutalist**: pure white background, ink-black structure, and a single neon chartreuse accent (`#ccff00`) — zero border-radius, thick borders (3/4/6/8px), and hard zero-blur offset box-shadows. Interactive elements use a hover-lift / active-press shadow choreography. Fonts: Space Grotesk (display/body, heavyweight uppercase) and JetBrains Mono (labels/code), loaded from Google Fonts in `index.html`.

- Reusable brutalist styles (`.brutalist-card`, `.brutalist-card-accent`, `.brutalist-btn`, `.grid-bg`, marquee) live in `src/styles/global.css`.
- The token scale (colors, spacing, type) is in `tailwind.config.js`.
- `DESIGN.md` is a full design-system spec extracted from the source — keep it in sync when changing the visual language.

## Deployment

- Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages via `peaceiris/actions-gh-pages`.
- `deploy-pi.sh` is a separate self-hosted path that pulls and rebuilds on a Raspberry Pi.
- Vite `base` is `'/'` (`vite.config.js`). The deploy history shows the base path being adjusted for hosting — change `base` there if the site moves to a sub-path.
