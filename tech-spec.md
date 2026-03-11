# Tech Spec: Koubou Labs Website

**Created:** 2026-03-11
**Project:** koubou-labs-site
**References:** prd.md, design-spec.md

---

## Architecture

**Type:** Static site (no backend, no database)
**Hosting:** Cloudflare Pages (free tier)
**Domain:** kouboulabs.com (DNS via Cloudflare)

```
┌─────────────────────────────────────────────┐
│  kouboulabs.com (Cloudflare DNS)            │
│           ↓                                 │
│  Cloudflare Pages (free tier)               │
│           ↓                                 │
│  Static React app (Vite build)              │
│           ↓                                 │
│  GitHub Repo (Kopi-Koubou/koubou-labs-site) │
└─────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Technology | Why |
|-------|------------|-----|
| Framework | React 18 + Vite | Fast builds, lightweight, simple |
| Language | TypeScript | Type safety, better DX |
| Styling | Tailwind CSS 3 | Rapid UI development, small bundle |
| Fonts | Inter (Google Fonts) | Clean, free, widely used |
| Icons | Heroicons (inline SVG) | No dependency, crisp rendering |
| Hosting | Cloudflare Pages | Free, custom domain, fast CDN |
| CI/CD | Cloudflare Pages Git integration | Auto-deploy on push to main |

---

## Project Structure

```
koubou-labs-site/
├── public/
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Philosophy.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## Component Breakdown

### App.tsx
- Main layout wrapper
- Contains all sections in order
- Handles scroll animations (Intersection Observer)

### Hero.tsx
- Hero section component
- Props: none (static content)
- Animation: fade-in on mount

### Philosophy.tsx
- Philosophy section
- Props: none
- Layout: centered text block

### Portfolio.tsx
- Portfolio grid container
- Props: `projects` array
- Layout: responsive grid (1/2/3 columns)

### ProjectCard.tsx
- Individual project card
- Props: `{ name, description, status, url }`
- Interactive: hover lift, clickable

### About.tsx
- About section
- Props: none

### Contact.tsx
- Contact info + social links
- Props: none
- Includes footer copyright

---

## Data Structure

**projects.ts (src/data/):**
```typescript
interface Project {
  name: string;
  description: string;
  status: 'live' | 'in-progress' | 'coming-soon';
  url: string;
}

export const projects: Project[] = [
  {
    name: 'Tamago',
    description: 'A daily fitness tracker that actually sticks.',
    status: 'live',
    url: 'https://tamago.app', // TBD
  },
  // Add more projects here
];
```

---

## Styling Approach

**Tailwind Config:**
```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm neutrals
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          500: '#57534E',
          900: '#1C1917',
        },
        // Warm accent
        orange: {
          50: '#FFF7ED',
          600: '#EA580C',
          700: '#C2410C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
```

**Global CSS (index.css):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-stone-50 text-stone-900 antialiased;
  }
}

@layer components {
  .section {
    @apply py-12 md:py-16 lg:py-20;
  }
  
  .container {
    @apply max-w-6xl mx-auto px-6;
  }
  
  .btn-primary {
    @apply bg-orange-600 text-white px-6 py-3 rounded-lg 
           hover:bg-orange-700 transition-colors duration-200;
  }
}
```

---

## Performance Optimizations

1. **Font Loading:**
   - Preload Inter font
   - Use `font-display: swap`
   - Subset to Latin only

2. **Bundle Size:**
   - Tree-shaking enabled (Vite default)
   - Inline SVGs (no icon library)
   - No heavy dependencies

3. **Images:**
   - SVG for logo/icons (crisp, small)
   - WebP for any raster images (if added later)
   - Lazy loading for below-fold content

4. **Caching:**
   - Cloudflare CDN handles caching
   - Asset hashing via Vite build

---

## SEO & Meta

**index.html head:**
```html
<title>Koubou Labs — We build products that matter</title>
<meta name="description" content="A studio crafting thoughtful software at the intersection of design and technology.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Open Graph -->
<meta property="og:title" content="Koubou Labs">
<meta property="og:description" content="We build products that matter.">
<meta property="og:image" content="/og-image.png">
<meta property="og:url" content="https://kouboulabs.com">
<meta property="og:type" content="website">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Koubou Labs">
<meta name="twitter:description" content="We build products that matter.">
<meta name="twitter:image" content="/og-image.png">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">

<!-- Preload font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## Deployment (Cloudflare Pages)

### Step 1: Create GitHub Repo
```bash
cd /Users/devl/clawd/projects/koubou-labs-site
git init
git add .
git commit -m "Initial commit: Koubou Labs website"
git remote add origin git@github.com:Kopi-Koubou/koubou-labs-site.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to Pages → Create a project
3. Connect GitHub account
4. Select repo: `Kopi-Koubou/koubou-labs-site`
5. Build settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
6. Deploy

### Step 3: Add Custom Domain
1. In Cloudflare Pages project → Custom domains
2. Add domain: `kouboulabs.com`
3. Cloudflare auto-configures DNS (since domain is already on Cloudflare)
4. Wait for SSL certificate (usually < 5 min)

### Step 4: Verify Deployment
- Check site loads at `https://kouboulabs.com`
- Verify SSL certificate
- Test mobile responsiveness
- Run Lighthouse audit

---

## Environment Variables

None required (static site).

---

## Testing Checklist

- [ ] Site loads on desktop (Chrome, Safari, Firefox)
- [ ] Site loads on mobile (iOS Safari, Chrome)
- [ ] All links work (email, social, project links)
- [ ] Lighthouse score > 90 (all categories)
- [ ] No console errors
- [ ] Animations work smoothly
- [ ] Responsive at all breakpoints
- [ ] OG image displays correctly on social shares

---

## Future Enhancements (Out of Scope for MVP)

- Blog section (could add later with MDX)
- Contact form (could use Formspree or Cloudflare Workers)
- Analytics (Plausible/Umami integration)
- Dark mode toggle
- Multi-language support
- Additional portfolio projects (just add to `projects.ts`)

---

## Timeline

| Task | ETA |
|------|-----|
| Scaffold project + components | 2-3 hours |
| Implement all sections | 3-4 hours |
| Styling + responsive | 2-3 hours |
| Testing + polish | 1-2 hours |
| Deploy to Cloudflare | 30 min |
| **Total** | **8-12 hours** |
