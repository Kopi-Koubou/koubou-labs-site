# Koubou Labs Website

Company website for [kouboulabs.com](https://kouboulabs.com)

## Stack

- React 19 + Vite
- TypeScript
- Tailwind CSS 4
- Cloudflare Pages (hosting)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push code to GitHub: `Kopi-Koubou/koubou-labs-site`
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
3. Click "Create a project" → "Connect to Git"
4. Select repository: `Kopi-Koubou/koubou-labs-site`
5. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

### Option 2: Direct Upload

```bash
npm run build
npx wrangler pages deploy dist --project-name=koubou-labs-site
```

### Add Custom Domain

1. In Cloudflare Pages project → Settings → Custom domains
2. Add domain: `kouboulabs.com`
3. Cloudflare auto-configures DNS (domain already on Cloudflare)
4. Wait for SSL certificate (~5 minutes)

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Philosophy.tsx
│   ├── Portfolio.tsx
│   ├── ProjectCard.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── hooks/
│   └── useScrollReveal.ts
├── data/
│   └── projects.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Adding New Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    slug: 'tamago',
    name: 'Tamago',
    tagline: 'Duolingo for Cooking',
    description: 'Voice-guided cooking app...',
    category: 'iOS App',
    status: 'coming-soon',
  },
  // Add new projects here
]
```

## Design

- **Colors:** Warm neutrals (stone) + orange accent
- **Font:** Inter (Google Fonts)
- **Style:** Studio/agency aesthetic, warm and premium
- **Layout:** One-pager, no navbar, single scrolling page

See `design-spec.md` for full design specifications.
