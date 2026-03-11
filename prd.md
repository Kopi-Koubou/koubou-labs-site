# PRD: Koubou Labs Website (kouboulabs.com)

**Status:** Draft
**Created:** 2026-03-11
**Author:** Kato
**Pipeline stage:** prd

---

## 1. Overview & Goals

Koubou Labs is Xavier's venture studio — a small, anonymous collective that ships products fast with taste. The website is a one-page portfolio site that establishes credibility and attracts grants, partnerships, and collaborators.

**Goals:**
- Establish Koubou Labs as a credible, design-forward product studio
- Showcase portfolio projects (starting with Tamago)
- Provide a professional touchpoint for grant applications and partnership outreach
- Ship in 48 hours, cost $0/month to run

**Non-goals:** Lead generation funnels, blog, CMS, user accounts, analytics dashboards.

---

## 2. Target Audience

| Audience | What they're looking for |
|----------|------------------------|
| Grant reviewers (gov/accelerator/web3) | Team credibility, shipped products, clear mission |
| Potential partners/collaborators | Portfolio quality, tech taste, contact info |
| Curious visitors (organic/social) | Quick understanding of what Koubou Labs does |

All audiences scan quickly. The page must communicate credibility within 5 seconds.

---

## 3. Content Sections

The site is a single scrolling page. No navbar. Five sections, top to bottom.

### 3.1 Hero

**Layout:** Full viewport height. Studio name centered. Tagline below. Subtle scroll indicator at bottom.

```
KOUBOU LABS

We build products people actually use.
```

- "Koubou" (工房) means workshop/studio in Japanese — lean into the craftsman positioning
- The tagline is deliberately understated. No "revolutionizing" or "disrupting"
- Consider a subtle animated element (e.g., a slow-breathing dot, a gentle gradient shift on the logotype) — nothing flashy, just alive

### 3.2 Philosophy

**Layout:** Narrow text column (max 600px), left-aligned. 2-3 short paragraphs.

```
We're a small studio that builds software products — from idea to shipped app.

We care about the things most teams skip: the feel of an interaction,
the warmth of a color palette, the moment a feature clicks for someone
cooking dinner with messy hands.

We ship fast, iterate honestly, and keep teams small on purpose.
```

**Design note:** This section should feel editorial — generous line-height, serif headings, unhurried spacing. Think Reader or Medium, not a SaaS landing page.

### 3.3 Portfolio

**Layout:** Project cards. One card for now (Tamago), designed to scale to 3-4 cards in a grid.

#### Tamago (first project)

```
TAMAGO
Duolingo for Cooking

Voice-guided cooking app that turns meal prep into a game.
Step-by-step voice instructions, streaks, achievements,
and a kitchen that finally makes sense.

[Coming Soon]
```

**Card design direction:**
- Full-width card with a warm background tint (not white-on-white)
- App icon or stylized illustration (not a screenshot — the app isn't live yet)
- Category tag: "iOS App" or "Mobile"
- Status indicator: "Coming Soon" badge
- Future cards will sit in a 2-column grid on desktop, single column on mobile

### 3.4 About / Team

**Layout:** Short statement block. No photos, no names.

```
WHO WE ARE

A collective of builders, designers, and systems thinkers.
We stay anonymous because the work should speak for itself.

Based in Singapore. Shipping globally.
```

**Design note:** Keep this minimal. The anonymity is a deliberate brand choice — frame it as confidence, not secrecy.

### 3.5 Contact

**Layout:** Simple, centered. Email link.

```
LET'S TALK

For partnerships, grants, or just to say hi.

hello@kouboulabs.com
```

- `mailto:` link is sufficient for v1
- Optional: minimal contact form (name + email + message) via Cloudflare Workers or Formspree
- No social links for now

---

## 4. Design Direction

### Aesthetic

**Warm studio, not cold corporate.** Think Japanese workshop meets European design studio. Restrained, confident, crafted.

**Reference mood:**
- **Claude.ai** — warm neutrals, serif/sans pairing, conversational warmth
- **Airbnb** — calm spacing, content-first, organic asymmetry
- **Reader app** — editorial typography, reading-optimized spacing, serif/sans harmony
- **Teenage Engineering** — substance over flash, unmistakable taste in restraint

### Color Palette (from premium-ui-designer)

- Background: `#FAFAF8` (warm off-white)
- Text primary: `#1A1A1A`
- Text secondary: `#6B6B6B`
- Borders: `rgba(0,0,0,0.06)`
- Accent: warm terracotta — `#C2592A` (single accent, used sparingly: CTA, status badges, hover states)
- Card surfaces: `#FFFFFF` with subtle shadow (`0 1px 3px rgba(0,0,0,0.04)`)

### Typography

- **Headings:** `Instrument Serif` — editorial, warm, distinctive
- **Body:** `DM Sans` — clean, friendly, excellent readability
- Display: 36-48px, weight 600-700, letter-spacing -0.02em
- Body: 16px, weight 400, line-height 1.6
- Caption: 13-14px, weight 500, text secondary
- Maximum 3-4 font sizes on the page
- **Banned:** Arial, Helvetica, Roboto, Open Sans, Montserrat, Poppins

### Spacing

Follow the 4px grid from premium-ui-designer:
- Section breaks: 96px
- Between content groups: 48px
- Card padding: 24px
- Side margins: 24px mobile, 64px desktop
- Max content width: 800px (text), 1000px (portfolio grid)
- No decorative dividers — spacing separates sections

### Motion

- Subtle fade-in on scroll for each section (intersection observer)
- Hero: gentle entrance animation (opacity + slight translateY, 400ms ease-out)
- Cards: subtle hover lift on desktop (translateY(-2px), shadow increase, 150ms)
- All animations < 300ms for micro-interactions
- Respect `prefers-reduced-motion`
- CSS transitions only (no animation library for v1)
- **No:** parallax, particle effects, animated gradients, background patterns

### Anti-patterns to avoid

Per premium-ui-designer skill:
- No gradient backgrounds (especially purple-to-blue)
- No stock illustrations (use type and spacing as design)
- No generic hero ("Welcome to Koubou Labs")
- No centered body text (headings only)
- No more than 1 accent color
- No heavy shadows or border-radius > 16px
- No hamburger menus (not needed — no nav)
- No decorative dividers

---

## 5. Technical Requirements

### Stack
- **Framework:** React 19 + Vite (lightweight, fast builds)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Fonts:** Google Fonts (Instrument Serif, DM Sans)
- **Hosting:** Cloudflare Pages (free tier, custom domain)
- **Domain:** kouboulabs.com (already purchased, DNS via Cloudflare)
- **Cost:** $0/month

### Performance
- Static site (no SSR needed)
- Lighthouse score: 95+ all categories
- LCP < 1.5s, CLS = 0, FID < 50ms
- Total bundle < 150KB gzipped
- Fonts: `font-display: swap`, preload critical fonts

### Responsive
- Mobile-first (breakpoints: 640px, 1024px)
- iOS Safari is primary target — test thoroughly
- No horizontal scroll at any viewport

### SEO
- Semantic HTML (proper heading hierarchy, single h1)
- Meta tags: title, description, OG image
- Structured data (Organization schema)
- Canonical URL
- Sitemap.xml + robots.txt

### Accessibility (WCAG AA)
- Contrast ratios: 4.5:1 normal text, 3:1 large text
- Focus-visible styles on all interactive elements
- `prefers-reduced-motion` support
- Skip-to-content link (even on one-pager)
- All text selectable, no images-of-text

### Future-proofing
- Portfolio: data-driven (array of project objects) so adding projects = config change
- Contact method: swappable (mailto → form → Calendly)
- Sections: modular components, easy to reorder or add

---

## 6. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Deployed and live | Within 48 hours | URL loads on kouboulabs.com |
| Lighthouse score | 95+ all categories | Lighthouse audit |
| Mobile usability | Zero issues | Google Mobile-Friendly Test |
| Load time | < 1.5s on 3G | WebPageTest |
| First impression | "This team has taste" | Xavier gut check + 3 external reviews |
| Bundle size | < 150KB gzipped | Build output |

Analytics: Cloudflare Web Analytics if needed later (free, privacy-respecting). None for v1.

---

## 7. Out of Scope

- Blog / content publishing
- CMS or admin panel
- User accounts / auth
- Multiple pages / client-side routing
- Dark mode (v2 nice-to-have)
- Animation library (CSS transitions only)
- Contact form backend (mailto sufficient)
- Social media links
- Team member profiles / photos
- Pricing / services page
- i18n / multi-language
- Complex 3D / WebGL

---

## Appendix: Portfolio Data Shape

```typescript
interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "iOS App" | "Web App" | "Tool" | "API";
  status: "Live" | "Coming Soon" | "Beta";
  url?: string;
  accentColor?: string;
}

const projects: Project[] = [
  {
    slug: "tamago",
    name: "Tamago",
    tagline: "Duolingo for Cooking",
    description:
      "Voice-guided cooking app that turns meal prep into a game. Step-by-step voice instructions, streaks, achievements, and a kitchen that finally makes sense.",
    category: "iOS App",
    status: "Coming Soon",
  },
];
```

---

## Next Steps

1. **Design spec** — Visual layout, component specs, brand.json tokens
2. **Tech spec** — File structure, component tree, build config, deploy pipeline
3. **Implementation** — Build and deploy to Cloudflare Pages
4. **QA** — Lighthouse, mobile testing, 3 external reviews
