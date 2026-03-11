# Design Spec: Koubou Labs Website

**Created:** 2026-03-11
**Project:** koubou-labs-site
**Reference:** prd.md

---

## Visual Identity

### Color Palette

**Primary:**
- Background: `#FAFAF9` (warm off-white, Tailwind `stone-50`)
- Surface: `#FFFFFF` (pure white for cards)
- Text Primary: `#1C1917` (warm black, Tailwind `stone-900`)
- Text Secondary: `#57534E` (warm gray, Tailwind `stone-500`)

**Accent:**
- Primary Accent: `#EA580C` (warm orange/coral, Tailwind `orange-600`)
- Accent Hover: `#C2410C` (darker orange, Tailwind `orange-700`)
- Accent Subtle: `#FFF7ED` (light orange background, Tailwind `orange-50`)

**Borders/Dividers:**
- Light Border: `#E7E5E4` (Tailwind `stone-200`)
- Medium Border: `#D6D3D1` (Tailwind `stone-300`)

### Typography

**Font Family:**
- Primary: `Inter` (Google Fonts, free)
- Fallback: `system-ui, -apple-system, sans-serif`

**Scale:**
- Hero: `48px` / `3rem` (mobile), `64px` / `4rem` (desktop)
- Section Title: `32px` / `2rem`
- Card Title: `20px` / `1.25rem`
- Body: `16px` / `1rem`
- Small/Caption: `14px` / `0.875rem`

**Weights:**
- Headlines: `600` (semibold)
- Body: `400` (regular)
- Emphasis: `500` (medium)

### Spacing

**Grid:** 4px base unit

**Section Padding:**
- Mobile: `48px` vertical (`py-12`)
- Desktop: `80px` vertical (`py-20`)

**Element Spacing:**
- Between sections: `80px` (`gap-20`)
- Between cards: `24px` (`gap-6`)
- Internal card padding: `24px` (`p-6`)

---

## Component Specifications

### 1. Hero Section

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│           [Koubou Labs]             │
│        (48-64px, semibold)          │
│                                     │
│   We build products that matter.    │
│   (20px, text-secondary)            │
│                                     │
│   A studio crafting thoughtful      │
│   software at the intersection      │
│   of design and technology.         │
│   (16px, text-secondary)            │
│                                     │
└─────────────────────────────────────┘
```

**Styling:**
- Centered content
- Max-width: `640px`
- Padding: `80px` top/bottom on desktop, `48px` on mobile
- Subtle fade-in animation on load

**Animation:**
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-title { animation: fadeInUp 0.6s ease-out; }
.hero-subtitle { animation: fadeInUp 0.6s ease-out 0.2s backwards; }
```

---

### 2. Philosophy Section

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│         Our Approach                │
│        (32px, semibold)             │
│                                     │
│   We believe great products come    │
│   from deep focus, not hype.        │
│   No personalities. No roadshows.   │
│   Just shipped code and happy       │
│   users.                            │
│   (16px, max-w-2xl, centered)       │
│                                     │
│   We're a small collective of       │
│   builders who've shipped at scale  │
│   — from DeFi protocols to          │
│   consumer apps. We move fast,      │
│   but we don't break things.        │
│   (16px, max-w-2xl, centered)       │
│                                     │
└─────────────────────────────────────┘
```

**Styling:**
- Background: `#FFFFFF` (white card on warm background)
- Max-width: `768px`
- Centered text
- Padding: `64px` vertical

---

### 3. Portfolio Section

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│         Portfolio                   │
│        (32px, semibold)             │
│                                     │
│  ┌──────────┐  ┌──────────┐        │
│  │ Tamago   │  │ [Future] │        │
│  │          │  │          │        │
│  │ A daily  │  │ Project  │        │
│  │ fitness  │  │ Name     │        │
│  │ tracker  │  │            │        │
│  │          │  │ One-liner│        │
│  │ [Live]   │  │            │        │
│  │ → View   │  │ [Status] │        │
│  └──────────┘  └──────────┘        │
│                                     │
└─────────────────────────────────────┘
```

**Card Component:**
- Background: `#FFFFFF`
- Border: `1px solid #E7E5E4`
- Border-radius: `12px`
- Padding: `24px`
- Hover: Subtle lift (`transform: translateY(-4px)`), shadow
- Max-width per card: `340px`

**Status Badge:**
- Background: `#DCFCE7` (green-100) for "Live"
- Text: `#166534` (green-800)
- Padding: `4px 12px`
- Border-radius: `9999px` (pill)
- Font-size: `12px`
- Font-weight: `500`

**CTA Link:**
- Text: "→ View Project"
- Color: `#EA580C` (orange-600)
- Hover: `#C2410C` (orange-700)
- Font-weight: `500`

**Grid:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns (max)

---

### 4. About Section

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│         About Us                    │
│        (32px, semibold)             │
│                                     │
│   We're Koubou Labs — a studio,     │
│   not a startup.                    │
│   (18px, semibold)                  │
│                                     │
│   We don't raise rounds. We don't   │
│   do press. We build products,      │
│   learn from users, and iterate.    │
│   Our work speaks for itself.       │
│   (16px, text-secondary)            │
│                                     │
│   Based in Singapore.               │
│   Building for the world.           │
│   (16px, text-secondary)            │
│                                     │
└─────────────────────────────────────┘
```

**Styling:**
- Background: `#FAFAF9` (warm off-white)
- Max-width: `640px`
- Centered text
- Padding: `64px` vertical

---

### 5. Contact Section

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│       Get in Touch                  │
│        (32px, semibold)             │
│                                     │
│   For partnerships, grants, or      │
│   inquiries:                        │
│   (16px, text-secondary)            │
│                                     │
│   hello@kouboulabs.com              │
│   (20px, semibold, accent color)    │
│                                     │
│   [Twitter] [LinkedIn] [GitHub]     │
│        (24px icons, spaced)         │
│                                     │
│   © 2026 Koubou Labs                │
│   (14px, text-secondary, mt-12)     │
│                                     │
└─────────────────────────────────────┘
```

**Social Icons:**
- Size: `24px`
- Color: `#57534E` (stone-500)
- Hover: `#EA580C` (orange-600)
- Spacing: `16px` between icons

**Email Link:**
- Color: `#EA580C` (orange-600)
- Hover: underline
- No default link underline

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, 48px section padding |
| Tablet | 640px - 1024px | 2-column portfolio, 64px padding |
| Desktop | > 1024px | 3-column portfolio max, 80px padding |

---

## Motion & Interactions

### Scroll Animations
- Fade-in + slide-up for sections as they enter viewport
- Duration: `0.6s`
- Easing: `ease-out`
- Trigger: Intersection Observer (10% threshold)

### Hover States
- Cards: Lift 4px, add subtle shadow
- Buttons/Links: Color shift to darker accent
- Social Icons: Color shift to accent

### Transitions
- All transitions: `200ms ease-out`
- No jarring movements

---

## Accessibility

- Color contrast: WCAG AA minimum (4.5:1 for text)
- Focus states: Visible outlines on interactive elements
- Semantic HTML: Proper heading hierarchy (h1 → h2 → h3)
- Alt text: All images/icons have descriptive alt
- Keyboard navigation: All interactive elements reachable

---

## Assets Needed

1. **Logo:** Simple wordmark "Koubou Labs" (can be text-only with custom typography)
2. **OG Image:** 1200x630px social share image (site title + tagline)
3. **Favicon:** Simple icon (can be "K" monogram)
4. **Social Icons:** SVG icons for Twitter, LinkedIn, GitHub (use Heroicons or similar)

---

## Implementation Notes

- Use Tailwind CSS for all styling
- Inter font from Google Fonts
- No external CSS files (Tailwind utilities only)
- Inline SVGs for icons (no icon font dependency)
- Lazy-load any images (though minimal images expected)
- Preload critical fonts
