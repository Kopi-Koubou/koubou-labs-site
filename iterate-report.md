# Iteration Report — koubou-labs-site

**Date:** 2026-03-11
**Stage:** iterate
**Live URL:** https://koubou-labs-site.vercel.app

---

## What Changed

### 1. Added social meta tags (OG + Twitter Card)
- `<meta name="description">` for search engines
- Open Graph tags (`og:title`, `og:description`, `og:url`, `og:site_name`, `og:type`, `og:locale`)
- Twitter summary card tags
- `<link rel="canonical">` pointing to `kouboulabs.com`

### 2. Added favicon
- Inline SVG favicon using the kanji 工 (workshop) — zero-cost, on-brand, visible in browser tabs

### 3. Added `theme-color` meta
- Sets mobile browser chrome to parchment color (`#F2EAD3`) for a polished mobile experience

### 4. Fixed mobile nav accessibility
- Added "Say hello" CTA link visible on mobile (`sm:hidden`) so mobile visitors have a clear action in the nav bar
- Desktop nav unchanged (Philosophy / Work / About / Say hello)

---

## Why

The site's primary audience is **grant reviewers and potential partners** who will encounter links in emails, LinkedIn messages, and Slack/Discord. Without OG tags, shared links show a bare URL with no description or preview — undermining the "credibility in 5 seconds" goal. The favicon and theme-color add browser-tab professionalism that was previously missing.

Mobile nav had no visible links below the `sm` breakpoint, meaning mobile visitors saw only "Koubou Labs" with no way to navigate except scrolling. Adding the CTA keeps the PRD's "no navbar" spirit while ensuring discoverability.

---

## Unresolved Blockers

1. **Dead React `src/` app** — The entire `src/` directory (React components, hooks, CSS) is dead code. `index.html` doesn't reference `src/main.tsx`. The Vite build command (`tsc -b && vite build`) will still compile TypeScript but the output isn't used by the standalone HTML. Should be cleaned up (delete `src/`, simplify `package.json`) or the site should be migrated back to Vite-built React.

2. **CDN Tailwind** — `index.html` uses `cdn.tailwindcss.com` which is explicitly not recommended for production. Adds ~300KB of JS. Should either migrate to the Vite-built pipeline or switch to a static CSS approach.

3. **No OG image** — `og:image` is missing because no image asset exists. For maximum link-sharing impact, a 1200x630 OG image should be designed and hosted.

4. **Placeholder domain** — Meta tags reference `kouboulabs.com` but the live site is at `koubou-labs-site.vercel.app`. Update canonical/OG URL once the custom domain is configured.

5. **Social links removed** — The redesigned `index.html` correctly omitted the placeholder social links (twitter.com, github.com, linkedin.com) from the old React version. Real profile URLs should be added when available.

---

## Recommended Next Action

**Create an OG image** — Design a 1200x630 social preview card using the terracotta/parchment palette with "Koubou Labs" and the tagline. This is the single highest-ROI remaining task for link-sharing credibility. Can be done as an SVG rendered to PNG, or via a simple Figma/Excalidraw export.

After that: clean up dead `src/` code and remove CDN Tailwind dependency.
