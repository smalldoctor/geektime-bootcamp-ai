---
description: MotherDuck-inspired front-end style guardrails
globs: ["site/**/*.{ts,tsx,astro,mdx,css,scss,sass,less}", "src/**/*.{ts,tsx,astro,mdx,css,scss,sass,less}"]
alwaysApply: false
---

# MotherDuck Style Rules

## Brand Voice

- Embrace a playful-yet-professional tone: vibrant colors, rounded geometry, duck mascots for delight.
- Prioritize clarity and friendliness over minimalism; avoid stark monochrome looks.
- Reserve illustrated ducks or Lottie animations for hero areas, empty states, and loading indicators.

## Color System

```css
:root {
  --md-watermelon: #FF7169;   /* primary CTA, key highlights */
  --md-sky: #6FC2FF;          /* links, interactive states */
  --md-garden: #16AA98;       /* success & positive banners */
  --md-sun: #FFDE02;          /* attention-grabbing badges */
  --md-neutral-900: #383838;  /* primary text */
  --md-neutral-700: #595959;  /* secondary text */
  --md-neutral-300: #B9B9B9;  /* borders, dividers */
  --md-neutral-100: #F3F3F3;  /* page background */
  --md-white: #FFFFFF;        /* cards, reverse text */
  --md-gradient-primary: linear-gradient(135deg, #FF7169 0%, #FFDE02 100%);
  --md-gradient-sky: linear-gradient(135deg, #6FC2FF 0%, #16AA98 100%);
}
```

- Keep contrast ≥ 4.5:1 for body text; darken saturation by 10% on hover/focus.
- Never mix new brand colors without approval; derive tints via opacity instead.

## Typography

```css
font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
font-family-mono: "Aeonik Mono", "SFMono-Regular", Menlo, monospace;
```

```css
--font-hero: 64px;
--font-h1: 48px;
--font-h2: 36px;
--font-h3: 24px;
--font-body: 16px;
--font-small: 14px;
--font-tiny: 12px;
```

- Use 1.2–1.35 line-height for headings, 1.6 for body.
- All CTAs use font-weight 600 with uppercase avoided; rely on color contrast instead.

## Spacing & Layout

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
```

- Section rhythm: 96px vertical gaps, 48px between content blocks, 24px between related elements.
- Container max-width 1280px; paddings 24px (mobile) / 48px (desktop).
- Grid defaults: 12 columns, 24px gutters, breakpoints at 640px and 1024px.

## Shape Language

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.2);
```

- Default card treatment: white background, 16px radius, 32px padding, subtle border `1px solid var(--md-neutral-100)`, `--shadow-md`.
- Use pill buttons (`--radius-full`) for primary CTAs only; secondary buttons can reuse 9999px radius but must be outlined.

## Components

### Buttons

```css
.btn-primary {
  background: var(--md-watermelon);
  color: var(--md-white);
  padding: 12px 24px;
  border-radius: var(--radius-full);
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary {
  background: transparent;
  color: var(--md-sky);
  border: 2px solid var(--md-sky);
  padding: 10px 22px;
  border-radius: var(--radius-full);
}
```

- Hover state: translateY(-2px) and deepen color by ~10%.
- Focus state: add `0 0 0 3px rgba(111, 194, 255, 0.2)` ring.

### Inputs

```css
.md-input {
  border: 1px solid var(--md-neutral-300);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  background: var(--md-white);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.md-input:focus {
  border-color: var(--md-sky);
  box-shadow: 0 0 0 3px rgba(111, 194, 255, 0.1);
  outline: none;
}
```

- Error state uses `var(--md-watermelon)` border plus subtle shake animation ≤ 250ms.

### Cards & Surfaces

- Layout cards with `display: flex` or `grid` to keep internal spacing consistent.
- Elevate interactive cards on hover: apply `--shadow-lg` and `transform: translateY(-4px)`.
- Always include generous white space and optionally a corner badge using `--md-sun`.

## Motion & Interaction

- Global transition default: `all 0.3s ease`.
- Reveal elements with fade-in + 8px upward motion when they enter viewport.
- Loading states should feature looping duck animation or neutral skeleton gradients (`linear-gradient(90deg, #F3F3F3 25%, #FFFFFF 50%, #F3F3F3 75%)`).

## Iconography & Illustrations

- Prioritize line icons with rounded stroke caps; stroke width 2px.
- Duck mascots must stay proportionally consistent; never crop heads/feet.
- Use gradients sparingly in icons; flat colors preferred unless highlighting key moments.

## Content Rules

- Headlines: short, punchy, action-oriented; pair with playful supporting copy.
- Body text should be conversational; integrate light humor where appropriate but keep technical accuracy.
- Lists and feature callouts should leverage accent dots or duck-foot bullets for brand recognition.

## Do / Don't

- ✅ Lean into bold gradients for hero backgrounds and CTA strips.
- ✅ Mix bright accents with ample neutral whitespace to avoid visual fatigue.
- ✅ Keep interactive affordances obvious via color, motion, and shadows.
- ❌ Introduce new color families (purple, deep blue, grayscale-heavy) without design approval.
- ❌ Use sharp corners or thin (≤1px) fonts for key CTAs.
- ❌ Overuse animation; keep durations ≤ 400ms and ease-in-out curves.

## Implementation Checklist

1. Define tokens in a central `design-tokens.css` (or theme provider) once.
2. Import tokens into Astro/React layers; never hardcode hex values outside token definitions.
3. Validate responsive behavior at 375px, 768px, and 1280px.
4. Verify contrast ratios for new combinations before merge.
5. Include duck-themed assets only if optimized (SVG/Lottie) and lazy-loaded.
