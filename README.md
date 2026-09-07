# 🏗️ Ironmark Construction Group

> **A high-performance marketing site for Ironmark Construction Group** — showcasing 25+ years of commercial, industrial, residential, and infrastructure projects. Built as a fast, accessible, fully responsive single-page application with a bold industrial design system.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![Version](https://img.shields.io/badge/version-1.0.0-orange) ![Tech Stack](https://img.shields.io/badge/stack-React%2018%20%C2%B7%20Vite%206%20%C2%B7%20Tailwind%20v4-61dafb)

---

## 📋 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack & Prerequisites](#-tech-stack--prerequisites)
- [Getting Started](#-getting-started--installation-guide)
- [Usage & Execution](#-usage--execution)
- [Configuration & Environment Variables](#%EF%B8%8F-configuration--environment-variables)
- [Project Architecture](#-project-architecture--directory-structure)
- [Route Reference](#-route-reference)
- [Testing & Diagnostics](#-testing--diagnostics)
- [Contributing](#-contributing--code-of-conduct)
- [License & Acknowledgments](#-license--acknowledgments)

---

## ✨ Key Features

- **⚡ Blazing-fast Vite build** — ~123 kB gzipped JS, production build in under 15 seconds
- **📱 Fully responsive, mobile-first UI** — custom industrial design system (hazard stripes, grid lines, noise textures, safety-orange accents)
- **🎬 Polished motion design** — page transitions, scroll-linked progress bar, staggered menu reveals — all honoring `prefers-reduced-motion`
- **🍔 Accessible mobile navigation** — full-screen dropdown menu with proper `aria-expanded` / `aria-label` semantics, body scroll-locking, and dynamic-viewport-safe sizing
- **🖼️ Project galleries** — per-project detail pages with keyboard-navigable lightbox (`←`/`→`, `Esc`)
- **💼 Working contact & quote forms** — client-side validation with inline field errors
- **🔍 SEO-ready** — per-route `<title>` management, semantic HTML, hash-based routing for static hosting
- **🧪 Component-tested** — vitest + Testing Library unit tests for critical UI (navigation menu)
- **🎚️ Zero-config theming** — design tokens (colors, fonts) declared once via Tailwind CSS v4 `@theme`

---

## 🧰 Tech Stack & Prerequisites

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 (`@theme` tokens, no config file) |
| Routing | React Router DOM v6 (HashRouter) |
| Animation | Framer Motion 11 |
| Charts | Recharts (stats visualizations) |
| Testing | Vitest + Testing Library (jsdom) |
| Language | TypeScript 5.7 (strict) |

**Prerequisites:**

- **Node.js** `20` or `>=22` (required by Vite 6)
- **npm** `10+` (ships with Node 20)
- No database, Docker, or external services required to run locally — all content is served from static TypeScript data modules.

---

## 🚀 Getting Started / Installation Guide

```bash
# 1. Clone the repository
git clone https://github.com/mayorxyz/ironmark-construction-company.git
cd ironmark-construction-company

# 2. Install dependencies
npm install

# 3. Environment variables (optional)
#    The app currently runs with zero configuration — no .env file needed.
#    See the Configuration section below for future-proofing notes.

# 4. Start the dev server
npm run dev
```

The site will be available at **http://localhost:5173**.

> **No migrations or extra build steps are required.** There is no database schema to run; all content (projects, services, company info) lives in `src/data/`.

---

## 🖥️ Usage & Execution

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR (use `-- --host` to test on your phone via LAN IP) |
| `npm run build` | Production build to `dist/` |
| `npm run typecheck` | TypeScript compiler in `--noEmit` mode |
| `npm test` | Run the vitest unit test suite (single run) |

### Typical workflow

```bash
# Develop with hot reload, exposed on your network for mobile testing
npm run dev -- --host

# Verify types before committing
npm run typecheck

# Run unit tests
npm test

# Ship it
npm run build   # outputs static assets to dist/
```

### UI navigation quick tour

- **Navbar** — sticky, condenses on scroll (backdrop blur + shadow). On screens `< lg`, the ☰ button opens a full-screen menu; ✕ or any link closes it.
- **Home** — hero, live incident-free counter, stats marquee, service highlights.
- **Projects** — filterable grid → click a card for the detail page with a lightbox gallery.
- **Contact** — quote request form with inline validation, plus direct phone/email links.

> 📸 *Screenshots placeholder: add `docs/screenshots/home.png`, `projects.png`, `mobile-menu.png` and reference them here.*

---

## ⚙️ Configuration & Environment Variables

**The application currently requires no environment variables.** All copy, project data, and contact details are defined in `src/data/company.ts` and sibling data modules.

For future backend integration (`@supabase/supabase-js` is already a dependency), the following variables are anticipated:

| Variable | Description | Default | Required |
|---|---|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL | — | No (future) |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous/public key | — | No (future) |

> ⚠️ Only variables prefixed with `VITE_` are exposed to the client bundle. Never put secrets in a Vite frontend.

---

## 🏛️ Project Architecture / Directory Structure

```
ironmark-construction-company/
├── index.html                  # SPA entry; inline critical CSS + fonts preload
├── package.json                # Scripts & dependencies
├── tsconfig.json               # Strict TypeScript config
├── vite.config.ts              # Vite + @tailwindcss/vite plugin
├── dist/                       # Production build output (generated)
└── src/
    ├── main.tsx                # React root
    ├── App.tsx                 # Router, ScrollManager, ScrollProgress, routes
    ├── index.css               # Tailwind v4 @theme tokens + custom utilities
    ├── components/             # Reusable UI
    │   ├── Navbar.tsx          # Sticky nav + accessible mobile menu
    │   ├── Footer.tsx          # Site footer
    │   ├── Icons.tsx           # Inline SVG Icon set + Logo
    │   └── Lightbox.tsx        # Keyboard-navigable image gallery overlay
    ├── pages/                  # Route views
    │   ├── Home.tsx            # Hero, stats, marquee, services
    │   ├── Projects.tsx        # Filterable project grid
    │   ├── ProjectDetail.tsx   # Case study + gallery
    │   ├── Services.tsx        # Service catalog
    │   ├── About.tsx           # Company story, team, values
    │   ├── Contact.tsx         # Quote/contact form
    │   └── NotFound.tsx        # 404 view
    ├── data/                   # Static content (single source of truth)
    │   ├── company.ts          # Company info, contact details
    │   ├── projects.ts         # Project records & images
    │   └── services.ts         # Service definitions
    └── lib/
        └── utils.ts            # useBodyLock, usePageTitle, formatters
```

**Design decisions:**

- **Content as code** — all marketing copy/projects are typed TS modules, so there's no CMS or DB to run locally.
- **HashRouter** — enables drop-anywhere static hosting (e.g. GitHub Pages) without server rewrites.
- **Tailwind v4 `@theme`** — brand tokens (`safety` orange, `concrete-deep`, Inter/Manrope/JetBrains Mono) are declared once in CSS and reused everywhere.

---

## 🧭 Route Reference

| Path | View | Notes |
|---|---|---|
| `/` | Home | Hero, stats, services teaser |
| `/projects` | Projects | Filterable portfolio grid |
| `/projects/:slug` | Project detail | Case study + lightbox gallery |
| `/services` | Services | Full service catalog |
| `/about` | About | Story, team, values |
| `/contact` | Contact | Quote form + direct contact links |
| `*` | 404 | Friendly not-found page |

Routing uses **hash-based URLs** (`/#/projects`), so deep links work on any static host.

---

## 🧪 Testing & Diagnostics

```bash
# Unit / component tests (vitest + Testing Library, jsdom)
npm test

# Watch mode during development
npx vitest

# Type safety gate
npm run typecheck

# Full CI-style verification (all three)
npm run typecheck && npm test && npm run build
```

Covered today:

- **Navbar mobile menu** — opens on hamburger click (`aria-expanded` flips to `true`), closes via the ✕ button, and menu links mount into the DOM.

> Planned: form validation tests, lightbox keyboard-navigation tests, and Playwright E2E smoke tests.

---

## 🤝 Contributing & Code of Conduct

Contributions are welcome!

1. **Issues** — open an issue with a clear title, reproduction steps, and screenshots (for UI bugs). Use labels like `bug`, `enhancement`, `design`.
2. **Branching** — fork, then branch from `main`: `feat/<short-name>` or `fix/<short-name>`.
3. **Pull Requests** — keep PRs focused; ensure `npm run typecheck && npm test && npm run build` all pass before requesting review. Include before/after screenshots for visual changes.
4. **Style** — follow existing conventions: TypeScript strict, functional components + hooks, Tailwind utility classes, custom utilities declared in `index.css`.

By participating, you agree to keep discussions respectful and inclusive (standard [Contributor Covenant](https://www.contributor-covenant.org/) expectations).

---

## 📄 License & Acknowledgments

Released under the **MIT License** — see [`LICENSE`](./LICENSE) for details (add the file if it doesn't exist yet).

**Built with:**

- [React](https://react.dev) · [Vite](https://vite.dev) · [Tailwind CSS v4](https://tailwindcss.com) · [Framer Motion](https://www.framer.com/motion/) · [React Router](https://reactrouter.com) · [Vitest](https://vitest.dev)
- Typography: [Inter](https://rsms.me/inter/), [Manrope](https://fonts.google.com/specimen/Manrope), [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via Google Fonts

---

<p align="center"><sub>Built with 🦺 safety-orange pride by the Ironmark team.</sub></p>




