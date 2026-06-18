---
name: Pragati Ranjan — Portfolio(Vivid Pastel Bloom)
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3d4947'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#712ae2'
  on-secondary: '#ffffff'
  secondary-container: '#8a4cfc'
  on-secondary-container: '#fffbff'
  tertiary: '#825100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.08em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-margin: 32px
  gutter: 24px
---

## Brand & Style

This design system expresses a personality of **Vibrant Serenity**. It moves away from washed-out aesthetics toward a high-energy, high-fashion editorial feel. The target audience is modern, design-conscious consumers in the lifestyle, boutique travel, or wellness spaces who appreciate elegance paired with a confident visual punch.

The style is a fusion of **Minimalism** and **Glassmorphism**, characterized by vast white space, crisp high-contrast typography, and translucent layers. By saturating the signature mints and lavenders, we create a UI that feels "alive" and premium rather than merely decorative. Every element should evoke a sense of freshness, clarity, and intentional luxury.

## Colors

The palette is anchored by highly saturated pastels that provide functional weight and visual distinction.

- **Primary (Vivid Mint):** A deep, punchy mint used for primary actions and brand identifiers. It has enough chroma to remain legible and authoritative against light backgrounds.
- **Secondary (Rich Lavender):** A saturated purple-blue used for secondary interactions, accents, and categorization.
- **Tertiary (Zesty Amber):** Used sparingly for highlights, alerts, or unique call-outs to provide a warm counterpoint to the cool mint and lavender.
- **Neutral:** A deep slate charcoal for typography to ensure AA+ accessibility.
- **Surface:** A rich, warm cream rather than a sterile white, providing a "paper-like" editorial backdrop that makes the mint and lavender colors "pop."

## Typography

The typography system relies on a high-contrast pairing: **Playfair Display** for expressive, authoritative headlines and **Plus Jakarta Sans** for clear, modern functional text.

To maintain the editorial feel, use tight tracking for large display headlines and generous tracking for small labels. Headlines should utilize the italic variants of Playfair Display for emphasis or to break the rhythm of dense text. Body text should prioritize readability with a slightly increased line height (1.6) to allow the "bloom" of the layout to breathe.

## Layout & Spacing

This design system uses a **Fluid Grid** model with high-volume margins to emphasize the minimalist aesthetic.

- **Desktop:** 12-column grid with 24px gutters and 80px side margins.
- **Tablet:** 8-column grid with 24px gutters and 48px side margins.
- **Mobile:** 4-column grid with 16px gutters and 24px side margins.

Spacing follows an 8px rhythm but utilizes "macro-spacing" (64px+) between major sections to prevent the vivid colors from feeling cluttered. Content should feel "unstructured" within the grid, often breaking the vertical rhythm to create a more organic, blooming flow.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tinted Ambient Shadows**. 

Instead of neutral grey shadows, use low-opacity shadows that inherit the color of the primary or secondary palette (e.g., a subtle Mint-tinted shadow for mint-colored cards). This increases the perception of color saturation. 

Surface layers should utilize backdrop blurs (20px-40px) and semi-transparent fills (80-90% opacity) to allow the background colors to bleed through, maintaining the "soft" feel while the content remains high-contrast. Use thin, 1px inner borders with a high-opacity version of the surface color to define glass edges.

## Shapes

The shape language is strictly **Pill-shaped (Level 3)**. This softness balances the increased color saturation and the sharp serifs of Playfair Display. 

Every interactive element—from buttons and input fields to chips and images—should utilize maximum corner radii. When items are stacked (like list items), they should feel like smooth, organic pebbles. Avoid hard angles entirely to maintain the approachable, "blooming" nature of the design.

## Components

### Buttons
- **Primary:** Solid Vivid Mint fill with white text. High-contrast and pill-shaped.
- **Secondary:** Lavender-tinted glass background with Rich Lavender text and a 1.5px Lavender border.
- **Hover States:** Increase saturation by 10% and apply a soft, color-matched glow.

### Cards
- Surfaces use the Cream base or a high-transparency Glassmorphic effect.
- Padding should be generous (min 32px) to ensure content doesn't feel cramped within the rounded corners.

### Inputs & Fields
- Pill-shaped with a 1.5px border in a muted version of the secondary color. 
- On focus, the border transitions to the Primary Mint with a subtle outer glow.

### Chips & Tags
- Small, fully rounded elements using the Secondary (Lavender) or Tertiary (Amber) colors with high-contrast text. Use these to add "pops" of color to otherwise neutral sections.

### Lists
- Use horizontal dividers that fade out at the edges (radial gradient) to maintain the airy, floating aesthetic. 
- Icons should be monoline and utilize the primary color.
