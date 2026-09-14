# Abhishek Prajapat — Flutter Developer Portfolio

A modern, premium, engineering-focused portfolio website for **Abhishek Prajapat**, a Flutter developer with ~3 years of experience targeting product companies, MNCs, fintech, SaaS and consumer-tech teams.

Built to communicate one thing within the first few seconds:

> _This is a professional Flutter engineer who has shipped real production applications and understands software engineering — not just UI development._

---

## Tech stack

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js 14** (App Router) | Fast static output, first-class SEO/metadata, file-based routing |
| Language | **TypeScript** (strict) | Type-safe, self-documenting components |
| Styling | **Tailwind CSS** (token-driven) | Consistent spacing/typography, dark-first theming via CSS variables |
| Animation | **Framer Motion** | Purposeful, 60fps, `prefers-reduced-motion`-aware entrance/scroll motion |
| Icons | **lucide-react** | Clean, consistent, tree-shakeable |
| Theming | **next-themes** | Dark-first with a real light mode, no flash-of-wrong-theme |
| Fonts | **Space Grotesk / Inter / JetBrains Mono** (via `next/font`) | Display / body / mono — self-hosted, no layout shift |

No UI kit, no template, no unnecessary dependencies. Everything is hand-built and data-driven.

---

## Project structure

```
abhishek-portfolio/
├── public/
│   ├── Abhishek_Prajapat_Flutter_Developer.pdf   # downloadable résumé (source of truth)
│   ├── profile.webp                              # About-section portrait
│   └── gallery/                                  # per-project showcase banners + raw store screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx        # metadata, SEO, Open Graph, JSON-LD, fonts, theme provider
│   │   ├── page.tsx          # composes all sections in order
│   │   ├── globals.css       # design tokens (dark + light), utilities, reduced-motion
│   │   ├── icon.svg          # favicon (AP monogram)
│   │   ├── robots.ts         # generated robots.txt
│   │   └── sitemap.ts        # generated sitemap.xml
│   ├── components/
│   │   ├── navbar.tsx        # scroll-aware sticky nav + scrollspy + mobile menu
│   │   ├── footer.tsx
│   │   ├── theme-provider.tsx
│   │   ├── sections/         # one file per page section (hero, about, skills, …)
│   │   └── ui/               # reusable primitives (Reveal, Stagger, Magnetic, …)
│   ├── data/
│   │   └── site.ts           # ← SINGLE SOURCE OF TRUTH for all content
│   └── lib/
│       └── utils.ts
├── next.config.mjs           # static export config
├── tailwind.config.ts        # design tokens → Tailwind
└── tsconfig.json
```

### The one file you'll edit: `src/data/site.ts`

All copy, experience, projects, skills, case studies, links and metrics live in **`src/data/site.ts`**. The components are presentational and render whatever the data says. To update anything (add a project, change a metric, swap a link), edit that file — no component changes needed.

Links use a **"empty = hidden"** convention: any link left as `""` (or an empty `links: []`) simply does not render. Nothing is ever faked or shown as a dead `#` link.

---

## Setup

Requires **Node.js 18.17+** (built and tested on Node 22).

```bash
npm install
```

## Run (development)

```bash
npm run dev
```

Open **http://localhost:3000** (this project was demoed on port 3100 via `npm run dev -- -p 3100`).

## Build (production)

```bash
npm run build
```

This produces a fully static site in **`out/`** (configured via `output: "export"` in `next.config.mjs`). It contains plain HTML/CSS/JS — no server required.

To preview the static build locally:

```bash
npx serve out
```

---

## Deployment

Because the build is a static export, it deploys anywhere:

### Vercel (recommended, zero-config)
1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Deploy. (Framework preset: **Next.js** — Vercel handles the rest.)

### Netlify
- Build command: `npm run build`
- Publish directory: `out`

### GitHub Pages / S3 / any static host
- Run `npm run build` and upload the contents of `out/`.

### One thing to update before deploying
Set your real domain in **three** places (currently a placeholder):
- `src/app/layout.tsx` → `const SITE_URL`
- `src/app/robots.ts` → `const SITE_URL`
- `src/app/sitemap.ts` → `const SITE_URL`

This makes Open Graph, canonical URLs, `robots.txt` and `sitemap.xml` resolve correctly.

---

## Design decisions

**Dark-first, multi-surface — not "black + white."** The palette uses layered surface tokens (`--base`, `--surface-1/2/3`, `--border`) so hierarchy comes from subtle elevation, not borders alone. A single **electric-blue** accent carries CTAs, active states and highlights. A refined light mode is a full token remap, not an afterthought.

**Typography does the heavy lifting.** Space Grotesk for large, controlled display headings; Inter for readable body; JetBrains Mono for labels/eyebrows/metrics — the "engineer-built" signal. Generous whitespace, strong hierarchy, no clutter.

**Recruiter-first information architecture.** The hero states name → title → years → specialization → positioning, with real metrics (−35% crash, −30% size, −40% memory) visible above the fold. A recruiter can understand the profile in 30–60 seconds without wading through animation.

**Motion with a job.** Every animation has a UX purpose: staggered section reveals guide the eye, a scroll-linked timeline paces the experience section, magnetic CTAs and a cursor-reactive hero glow add polish, and a top scroll-progress bar + scrollspy nav give orientation. All of it is gated behind `prefers-reduced-motion` — users who opt out get the complete content instantly.

**Work Gallery — one showcase per app.** Each shipped app is represented by a single composed **showcase banner** (real Play Store / App Store screenshots arranged into one image, each app with its own layout and accent), opened full-size in a keyboard-navigable lightbox. Banners live under `public/gallery/<slug>/banner.jpg`; the raw per-screen source shots sit beside them.

**No skill bars, no fake data.** Per modern engineering-portfolio conventions, skills are categorized interactive chips (not "Flutter 95%"). There are **zero** fabricated testimonials, stats, companies, or metrics — everything traces to the résumé.

**Performance.** Static export, self-hosted fonts, no remote images, minimal JS (~141 kB first load), CSS-driven hover states, and lazy scroll-triggered animation keep first paint fast and Lighthouse-friendly.

**Deliberately no WebGL/3D.** An early build used an animated Three.js background object; it was removed on purpose. For a mobile-engineer portfolio the tone should be content-first, so depth now comes from layered surface tokens, a subtle grid + accent glow, and purposeful motion — not a heavy animated background. Dropping it also trims the JS payload.

**Accessibility.** Semantic landmarks, a single `h1` with correct heading order, keyboard-focusable controls with visible focus rings, `aria-label`s on icon links, `aria-hidden` on decorative icons, all external links with `rel="noopener noreferrer"`, and full reduced-motion support.

---

## How the market research shaped the content

Before building, current (2025–2026) Flutter Developer / Mobile Engineer job descriptions and hiring expectations were researched across product companies, funded startups, MNCs, fintech, SaaS and India/remote roles. Findings that directly shaped this site:

- **Shipped production apps are the #1 differentiator.** → Projects lead with **live Play Store / App Store links** (4 of 6 apps are publicly linked; the rest are unreleased/in-progress), framed as real products, not tutorials.
- **Measurable impact separates senior from junior.** → Every project and role foregrounds real numbers from the résumé (crash −35%, app size −30%, memory −40%, 0→1 MVP in 3–4 weeks).
- **State-management credibility matters (BLoC/Riverpod ranked highest).** → Skills and the About narrative foreground BLoC/Cubit + Riverpod (with GetX for breadth), matching ATS language.
- **Architecture + case-study depth is the biggest "not-a-student" signal.** → A dedicated **Case Studies** section walks Problem → Role → Approach → measurable Result for the two strongest projects (Digi Pravesh, AO Companion).
- **CI/CD + testing lift a 3-YOE profile toward the 5-YOE band.** → An **Engineering Highlights** section calls out GitHub Actions/Shorebird release ownership and unit/widget/integration testing.
- **ATS keyword coverage.** → A categorized Skills section mirrors JD terminology (Flutter, Dart, BLoC, Riverpod, Firebase, REST, WebSockets, CI/CD, Clean Architecture, SOLID) — using only technologies present in the résumé.
- **Recruiters scan in ~7–8 seconds; top content must be above the fold.** → Hero positioning + metrics render within ~1s, no render-blocking animation.

---

## Content integrity

The résumé is the **only** source of truth. This site contains **no fabricated** companies, roles, projects, technologies, metrics, testimonials, or links. Where the résumé lacked information (GitHub, LinkedIn, store links), it was supplied directly by Abhishek and wired into `src/data/site.ts`. Any value left empty is simply not rendered.

---

## License

Personal portfolio — © Abhishek Prajapat. All rights reserved.
