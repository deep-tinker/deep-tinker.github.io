---
name: Pragati Ranjan — Portfolio (Neon Brutalist)
colors:
  background: '#ffffff'
  surface: '#ffffff'
  surface-inverse: '#000000'
  on-surface: '#000000'
  on-surface-inverse: '#ffffff'
  primary: '#000000'
  on-primary: '#ffffff'
  accent: '#ccff00'
  on-accent: '#000000'
  outline: '#000000'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 120px
    fontWeight: '900'
    lineHeight: '0.9'
    letterSpacing: -0.05em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '900'
    lineHeight: '0.9'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '900'
    lineHeight: '0.9'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '900'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1.4'
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  none: '0'
  DEFAULT: '0'
  sm: '0'
  md: '0'
  lg: '0'
  xl: '0'
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  container-margin: 32px
  section-padding-mobile: 64px
  section-padding-desktop: 120px
---

# Design System: Pragati Ranjan — Portfolio (Neon Brutalist)

## 1. Visual Theme & Atmosphere

This is an unapologetic **Neo-Brutalist** personal portfolio: loud, structural, and engineered to feel like raw, exposed machinery rather than a polished marketing surface. The canvas is pure white (`#ffffff`) overlaid with a faint dotted **grid background**, and everything sits inside heavy black scaffolding — 4px to 8px solid black borders, hard offset drop-shadows (no blur), and zero corner rounding anywhere. A single high-voltage **neon chartreuse** (`#ccff00`) is the only chromatic accent, used as the electric punctuation against an otherwise black-and-white world. The result reads as confident, technical, and slightly defiant — the visual equivalent of a systems engineer who scales things to millions of users and wants you to know it.

The mood is **high-contrast and kinetic**. Type is set in tightly tracked, heavyweight (900) uppercase Space Grotesk at near-billboard sizes (up to 120px), broken up by monospace JetBrains Mono labels that evoke a terminal. Motion is deliberate and mechanical: cards physically shift on hover (translating toward the cursor while their shadow grows), buttons "press" into the page on active, and a perpetual marquee ticker scrolls system-status text along the bottom edge. Nothing is soft, gradient, or apologetic — depth comes from flat geometry and stacked black planes, not from light or transparency. Generous macro-spacing (64px on mobile, 120px on desktop between sections) keeps the loudness legible rather than chaotic.

## 2. Color Palette & Roles

The palette is intentionally minimal — three values plus their inversions. Restraint is the point: one accent, deployed like a highlighter.

### Primary Foundation
- **Paper White** `#ffffff` — Page background, card surfaces, navbar. The default canvas.
- **Ink Black** `#000000` — The structural color. Every border, shadow, and inverted panel. Used as a full surface (`bg-black`) for high-emphasis blocks like quotes and the contact section.

### Accent & Interactive
- **Neon Chartreuse** `#ccff00` — The signature. Primary buttons, badges/chips, hover-fill highlights, accent cards, text-selection color, marquee text, and inline text highlighters (`bg-accent` behind words). On black panels it becomes the text color (`text-accent`) for maximum voltage.

### Typography & Text Hierarchy
- **Ink Black** `#000000` — Default body and heading text on white.
- **Paper White** `#ffffff` — Text on black/inverted panels.
- **Neon Chartreuse** `#ccff00` — Accent text reserved for headings inside black panels and the marquee.

### Functional States
There is no separate success/error/warning palette. State is communicated structurally and through the accent: hover fills elements with chartreuse, the contact form's "submitted" confirmation uses a black `check_circle` glyph on the accent card. Disabled/muted states are simply rendered in plain black without the accent.

> Note: there is one translucent usage — the Experience section background is `rgba(204,255,0,0.10)`, a 10%-opacity wash of the accent to subtly tint that band off-white.

## 3. Typography Rules

Two families, sharply role-separated:

- **Space Grotesk** — the voice. A geometric grotesque used for all display, headline, and body text. Almost always **uppercase**, **font-weight 900 (black)**, with tight negative tracking on large display sizes (`-0.05em`) for a dense, poster-like punch. Body copy stays bold (700) rather than regular, keeping the whole page heavy.
- **JetBrains Mono** — the machine. A monospace used exclusively for labels, captions, metadata (dates, role tags, metrics), eyebrows, and the marquee. Reinforces the terminal/engineering identity. Typically uppercase, weight 700, with positive letter-spacing (`0.02em`–`0.05em`).

### Hierarchy & Weights
- **Display (Hero H1):** 38px (mobile) → up to 120px (desktop), weight 900, line-height 0.9, tracking −0.03em to −0.05em, uppercase. Often wrapped with inline `bg-black text-white` or `bg-accent` highlight spans.
- **Headline LG (section titles):** ~48–64px, weight 900, line-height 0.9–1.1, uppercase. Frequently italic and/or set on an inline `bg-accent` block.
- **Headline SM (card titles):** ~28px, weight 900, line-height 1.2, uppercase.
- **Body:** 16–20px Space Grotesk, weight 700 (bold), line-height ~1.4 / `leading-snug`.
- **Labels / metadata:** 12–16px JetBrains Mono, weight 700, uppercase, wide tracking (`tracking-widest` on the smallest eyebrows).

### Spacing Principles
Display headlines use crushed line-height (0.9) and negative tracking to read as dense graphic blocks. Mono labels do the opposite — wide tracking and uppercase for a stamped, technical feel. Body text relaxes to `leading-snug` for readability without losing weight. Emphasis is created not by italics or color alone but by wrapping words in accent or black highlight spans, or underlining with a thick `decoration-4`/`decoration-8` accent rule.

## 4. Component Stylings

All components share three brutalist invariants: **no border-radius**, **solid black borders (4px default)**, and **hard offset shadows** (`Npx Npx 0 0 #000` — zero blur).

### Buttons (`.brutalist-btn`)
- Accent (`#ccff00`) fill, 4px black border, Space Grotesk weight 900 uppercase.
- Shadow: `4px 4px 0 #000` mobile → `6px 6px 0 #000` desktop.
- **Hover:** translates `-2px,-2px` while shadow grows to `8px 8px` — the button lifts toward you.
- **Active:** translates `+4px,+4px` and shadow collapses to `0 0` — it physically presses into the page.
- Transitions are fast and snappy (`0.1s ease`), never eased-soft.

### Cards & Containers (`.brutalist-card` / `.brutalist-card-accent`)
- White (or accent) fill, 4px black border, **no rounding**.
- Shadow: `6px 6px 0 #000` mobile → `10px 10px 0 #000` desktop.
- **Hover (desktop):** translate `-4px,-4px`, shadow grows to `14px 14px` — the lift is exaggerated versus buttons.
- `brutalist-card-accent` is the same object in chartreuse, used for the pull-quote, education block, and contact form.
- Generous internal padding (24px mobile → 40–48px desktop). Some cards are tilted (`rotate-3`, `rotate-2`) for deliberate off-grid energy.

### Navigation
- Fixed top bar, white, with a 4px black bottom border. Brand wordmark in tight uppercase black Space Grotesk.
- Desktop links: mono, uppercase, weight 900; **hover fills the link with accent** (`hover:bg-accent`).
- A persistent accent "Quick Connect" `brutalist-btn` anchors the right side.
- Mobile: a bordered hamburger toggles a full-width dropdown of links, each separated by 2px black dividers, with accent hover fills.

### Inputs & Forms
- 4px black border, white fill, bold black text, **no rounding**, no focus ring (`focus:ring-0`).
- **Focus behavior:** the field background flips to accent (`focus:bg-accent`) instead of glowing — state change is a flat color swap.
- Labels are uppercase mono, weight 900. Submission is client-side, producing a `mailto:` link.

### Domain-Specific Components
- **Badges / chips / metrics:** small bordered rectangles. Metric tags invert (`bg-black text-accent`) for emphasis; tech-stack tags stay `bg-white` bordered; period/status tags use `bg-accent`.
- **Bullet markers:** a 2px-bordered `8px` accent square, never a dot.
- **Marquee ticker:** fixed to the bottom, black bar with a 4px accent top border, scrolling chartreuse mono uppercase status text (`SYSTEM STABLE /// SCALING REAL-TIME ///…`) on a 20s linear loop.
- **Imagery:** photos and project shots render `grayscale` by default and animate to full color on hover — keeping the palette monochrome until interaction.
- **Grid background (`.grid-bg`):** a radial-dot pattern (`#000` 1px dots on a 32px grid) behind the hero for a technical-paper texture.

## 5. Layout Principles

### Grid & Structure
- Max content width: **1200px**, centered, with `px-gutter` (24px) horizontal padding.
- Sections use a **12-column** CSS grid on desktop (`md:grid-cols-12`) collapsing to a single column on mobile. Hero is 8/4 (content/visual); About is 5/7 (sticky portrait / narrative); Projects uses an asymmetric editorial layout (8-col hero project, 4-col offset secondary nudged down with `mt-24`, then a full-width 12-col feature).
- Section dividers are structural: thick `border-y-8` / `border-b-8` black rules between bands rather than whitespace alone.

### Whitespace Strategy
- Base rhythm is an **8px** scale. Section padding jumps to macro values — **64px mobile / 120px desktop** vertically — so the heavy type and loud accent have room to breathe.
- Internal card padding is generous (24→48px). Gaps between grid items scale 6→12 (24–48px).

### Alignment & Visual Balance
- Predominantly **left-aligned**, anchored by thick left-border rules (`border-l-8`) on section headers that act as typographic margins.
- The Contact section is the deliberate exception — centered on a full black band with accent top/bottom borders for a climactic, high-contrast finish.
- Asymmetry is intentional: offset columns, rotated cards, and inline highlight spans break the grid to create kinetic, off-balance energy.

### Responsive Behavior & Touch
- **Mobile-first** via Tailwind `md:` breakpoints (768px primary cutoff). Type, padding, and shadow depth all scale up at `md`.
- Hover lift/press effects are gated behind `@media (min-width: 768px)` — touch devices get the flat resting state without phantom hovers.
- Multi-column grids collapse to single column; the hero's right-hand terminal visual and the scroll indicator are hidden on small screens. Touch targets stay chunky (bordered, padded) by default.

## 6. Design System Notes for Stitch Generation

### Language to Use
Describe screens as: "neo-brutalist", "high-contrast black and white with a single neon chartreuse (#ccff00) accent", "thick 4px black borders, zero corner radius, hard offset drop-shadows with no blur", "heavyweight uppercase Space Grotesk display type with tight negative tracking", "monospace JetBrains Mono labels", "flat geometric depth", "kinetic hover lifts and press-down active states". Avoid: gradients, soft shadows, rounded corners, glassmorphism, pastel anything.

### Color References
- **Paper White** `#ffffff` — backgrounds/surfaces
- **Ink Black** `#000000` — borders, shadows, inverted panels, default text
- **Neon Chartreuse** `#ccff00` — the sole accent: buttons, chips, highlights, hover fills, selection

### Component Prompts
- *"A brutalist card: white fill, 4px solid black border, no rounding, a hard 10px×10px black offset shadow with zero blur. On hover it shifts up-left 4px and the shadow grows to 14px. Generous 40px padding. Title in 28px uppercase black-weight Space Grotesk."*
- *"A neon-chartreuse pill-free button: solid #ccff00 fill, 4px black border, uppercase black-weight Space Grotesk label, 6px black offset shadow; presses into the page on click (shadow collapses to zero)."*
- *"A fixed top navbar, white with a 4px black bottom border; brand wordmark left in tight uppercase, monospace nav links that fill solid chartreuse on hover, and a chartreuse CTA button on the right."*

### Incremental Iteration
- Keep the accent **rare** — it loses voltage if overused; default to black/white and let chartreuse punctuate.
- When adding emphasis, prefer inline highlight spans (`bg-accent` or `bg-black text-white` behind words) and thick underline rules over introducing new colors.
- Maintain the hover-lift / active-press shadow choreography on every interactive element for consistency.
- Imagery should default to grayscale and reveal color on hover to preserve the monochrome system.
