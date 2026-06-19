---
name: Sundae Engineering
description: Editorial engineering landing system — warm paper, Geist type, one amber accent, for high-stakes technical buyers.
colors:
  surface-base: "oklch(0.984 0.004 95)"
  surface-deep: "oklch(0.968 0.006 88)"
  surface-raised: "oklch(0.998 0.002 95)"
  stroke-subtle: "oklch(0.9 0.006 90)"
  stroke-strong: "oklch(0.82 0.008 85)"
  text-primary: "oklch(0.25 0.012 65)"
  text-secondary: "oklch(0.42 0.012 65)"
  text-muted: "oklch(0.52 0.012 70)"
  accent: "oklch(0.79 0.145 71)"
  accent-soft: "oklch(0.9 0.1 84)"
  accent-ink: "oklch(0.47 0.15 50)"
  ink: "oklch(0.2 0.012 65)"
  ink-contrast: "oklch(0.97 0.004 95)"
typography:
  display:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: "clamp(2.75rem, 6.5vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.78
    letterSpacing: "0"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  sm: "4px"
  control: "8px"
  button: "8px"
  card: "8px"
  full: "9999px"
spacing:
  xxs: "8px"
  xs: "12px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-contrast}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "oklch(0.3 0.012 65)"
    textColor: "{colors.ink-contrast}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    border: "1px solid {colors.stroke-strong}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  panel-default:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-primary}"
    border: "1px solid {colors.stroke-subtle}"
    rounded: "{rounded.card}"
    padding: "28px"
  input-default:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "11px 14px"
---

# Design System: Sundae Engineering

## 1. Overview

**Creative North Star: "Institutional Editorial"**

This system reads like a serious engineering studio's editorial feature, not a campaign page. It sets Geist — a precise geometric sans — across display and body on warm paper, holds to strict hairline structure, and reserves a single amber accent for the one phrase that carries each section. Every section should still be reviewable by a CTO in under a minute.

The composition uses confident typographic scale and generous whitespace instead of dense panels. Information is grouped into a small number of editorial blocks — a headline, a marked phrase, a short proof — with predictable rhythm and one primary conversion path.

The register stays serious. This is the deliberate inverse of consumer-AI playfulness: **no mascots, no cute voice, no per-page color characters.** The presence comes from confident type, paper, and whitespace — not from illustration. It still explicitly rejects crypto and blockchain marketing cues.

Key Characteristics:
- Warm-paper canvas with hairline-led structure
- Large Geist display, set in sentence case
- A single amber "marker" highlight, one phrase per section
- Deliberate conversion path anchored to email outreach
- High signal, low ornament — credibility before charm

## 2. Colors

A warm-paper light system with near-black ink and one amber accent reserved for emphasis and action.

### Primary
- **Operational Amber** (oklch(0.79 0.145 71)): The brand mark, status dot, and the marker-highlight source tone.
- **Marker Wash** (oklch(0.9 0.1 84)): The highlighter background behind ink for the one key phrase per section.

### Secondary
- **Burnt Amber / Accent Ink** (oklch(0.47 0.15 50)): Text links and section indices. Chosen dark enough to clear WCAG AA on paper; always paired with an underline on links.

### Surfaces
- **Warm Paper** (oklch(0.984 0.004 95)): Root page background.
- **Faint Band** (oklch(0.968 0.006 88)): Section bands that segment the page.
- **Lifted White** (oklch(0.998 0.002 95)): Cards, panels, and form fields raised above paper.

### Ink & Text
- **Control Ink** (oklch(0.2 0.012 65)): Primary button fill and the top status bar.
- **Primary Text** (oklch(0.25 0.012 65)): Headlines and ink.
- **Secondary Text** (oklch(0.42 0.012 65)): Body and supporting copy.
- **Muted Text** (oklch(0.52 0.012 70)): Labels and metadata.

### Named Rules
**The Accent Scarcity Rule.** Amber is reserved for the brand mark, status, link text, and exactly one marker-highlighted phrase per section. Structure is carried by ink and hairlines, never by accent fills.

**The One-Marker Rule.** Each major section gets at most one `.marker` highlight, placed on the phrase that carries the section's claim (e.g. *stay up*, *architecture*, *without taking them down*). More than one and the emphasis flattens.

## 3. Typography

**Display Font:** Geist (fallback Inter, then system sans) — 600 for the hero H1 and section headlines, set in **sentence case**.
**Body Font:** Geist — the same family at 400 keeps dense technical copy legible under the large display weights.
**Metadata/Mono Font:** Geist Mono — reserved for *genuine* metadata only: section indices (`01 / …`), the availability status, eyebrow labels, and form field labels. Never decorative buzzwords or faux-terminal strings.

**Character:** Geist's geometric precision gives the page a confident, technical authority without shouting; the single family across display and body keeps it cohesive; the mono cut earns the engineering register by labelling real structure. The system reads "precise engineering studio," not "template."

### Hierarchy
- **Display** (600, clamp(2.75rem, 6.5vw, 5rem), 1.03): Hero statement and the highest-importance section headlines.
- **Headline** (600, clamp(2.25rem, 4vw, 3rem), 1.05): Section titles.
- **Title** (600, 1.25rem): Card and row-level emphasis (principle terms, step names).
- **Body** (400, 1.125rem, 1.78): Explanatory copy, measure held to ~52–62ch.
- **Label** (600, 0.72rem, 0.16em tracking, uppercase mono): Metadata, eyebrows, and field labels.

### Named Rules
**The Sentence-Case Display Rule.** Geist display headings are sentence case so weight and scale carry authority without shouting. Uppercase + wide tracking is reserved exclusively for the mono metadata tier.

**The Technical Readability Rule.** Long-form copy stays at body scale with generous line height and a constrained measure (~52–62ch), even beside large display type.

## 4. Elevation

Mostly flat. Depth comes from the paper → lifted-white tonal step and hairline borders, not shadow.

### Named Rules
**The Hairline-First Rule.** Structural separation comes from tone (paper vs. faint band vs. lifted white) and 1px strokes — not ambient shadow or glow.

## 5. Components

### Buttons
- **Shape:** Conformed 8px radius, sentence case, body font.
- **Primary:** Solid ink fill with paper-light text — the highest-contrast element on the page.
- **Secondary:** Transparent with a strong hairline; border darkens to ink on hover.
- **Focus:** Visible 2px accent-ink outline with offset.

### Marker Highlight
- **Style:** A clean amber wash (`accent-soft`) behind ink, 4px radius (`--radius-sm`), `box-decoration-break: clone` so it wraps cleanly across lines.
- **Use:** One phrase per section. Never on a full sentence, never more than once per section.

### Cards / Containers
- **Corner Style:** Conformed 8px radius with hairline (`stroke-subtle`) borders.
- **Background:** Lifted white over paper or faint-band sections.
- **Shadow Strategy:** Flat; border-driven separation.

### Inputs / Fields
- **Style:** Lifted-white background, strong hairline, body-size text, conformed 8px radius.
- **Labels:** Mono uppercase metadata tier.
- **Focus:** Border shifts to accent-ink with a soft amber ring (`box-shadow`).

### Navigation
- **Style:** Sticky translucent paper bar with a hairline base. In-page links sit in a hairline-bordered cluster at the conformed 8px radius; the primary `Hire us` action stays solid ink and always visible.
- **Top Strip:** A slim ink bar frames the page top with availability status and the outreach address.

### Signature Component
- **Marked Section Headline:** A large Geist section headline with exactly one amber-marked phrase, preceded by a mono `index + label` pair (`01 / How we engineer`).

## 6. Do's and Don'ts

### Do:
- **Do** keep primary outreach visible in the top strip, header, hero, contact, and footer using `hello@sundae.engineering`.
- **Do** use the paper → faint-band → lifted-white tonal steps with hairline separation.
- **Do** set display headings in sentence-case Geist and hold body copy to ~52–62ch.
- **Do** use exactly one marker highlight per section, on the phrase that carries the claim.
- **Do** keep link text on the darker accent-ink with an underline for AA contrast.

### Don't:
- **Don't** add mascots, illustrated characters, or a cute/playful voice — the warmth is typographic, the register stays serious.
- **Don't** resemble crypto or blockchain marketing: no neon palettes, speculative language, or hype visuals.
- **Don't** use gradient text, glassmorphism, or drop shadows for separation.
- **Don't** spend amber as general decoration or stack multiple markers — it dilutes both emphasis and the conversion path.
