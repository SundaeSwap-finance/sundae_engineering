---
name: Sundae Engineering
description: Institutional-grade engineering landing system for high-stakes technical buyers.
colors:
  surface-base: "oklch(0.175 0.011 248)"
  surface-deep: "oklch(0.155 0.011 248)"
  surface-raised: "oklch(0.22 0.014 248)"
  stroke-subtle: "oklch(0.33 0.012 248)"
  stroke-strong: "oklch(0.47 0.014 248)"
  text-primary: "oklch(0.93 0.006 248)"
  text-secondary: "oklch(0.81 0.006 248)"
  text-muted: "oklch(0.66 0.007 248)"
  accent: "oklch(0.79 0.145 71)"
  accent-soft: "oklch(0.85 0.126 76)"
  ink: "oklch(0.21 0.012 248)"
typography:
  display:
    fontFamily: "Barlow Condensed, Barlow, Segoe UI, sans-serif"
    fontSize: "clamp(3rem, 6.5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "0.03em"
  headline:
    fontFamily: "Barlow Condensed, Barlow, Segoe UI, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.03em"
  title:
    fontFamily: "Barlow, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.02em"
  body:
    fontFamily: "Barlow, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0"
  label:
    fontFamily: "Barlow, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  control: "2px"
  focus-chip: "6px"
spacing:
  xxs: "8px"
  xs: "12px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  panel-default:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.control}"
    padding: "24px"
  input-default:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "10px 12px"
---

# Design System: Sundae Engineering

## 1. Overview

**Creative North Star: "Institutional Signal, Operator Clarity"**

This system is built to feel like a technical briefing, not a campaign page. The visual language prioritizes operational trust: restrained dark neutrals, strict border discipline, high-contrast typography, and direct calls to action. Every section should feel reviewable by a CTO in under a minute.

The composition uses controlled density instead of visual spectacle. Information is grouped into concise blocks, with explicit labels and predictable rhythm. Accent color is reserved for intent and conversion actions, so attention lands where outreach should happen.

The system explicitly rejects crypto and blockchain marketing cues. No neon glow language, speculative motifs, token metaphors, or futuristic hype treatments.

Key Characteristics:
- High signal, low ornament surfaces
- Strong typographic hierarchy with compact uppercase labels
- Deliberate conversion path anchored to email outreach
- Border-led structure instead of decorative card theatrics

## 2. Colors

The palette is a disciplined dark-spectrum system with a single warm accent reserved for action.

### Primary
- **Operational Amber** (oklch(0.79 0.145 71)): Primary CTA fill and high-intent interaction emphasis.

### Secondary
- **Review-Line Steel** (oklch(0.47 0.014 248)): Strong border and separation role for structure.

### Tertiary
- **Raised Slate** (oklch(0.22 0.014 248)): Elevated panels, forms, and content blocks that need containment.

### Neutral
- **Base Graphite** (oklch(0.175 0.011 248)): Root page surface and body background.
- **Deep Graphite** (oklch(0.155 0.011 248)): Band backgrounds that segment major sections.
- **Primary Text Mist** (oklch(0.93 0.006 248)): Main text color.
- **Secondary Text Mist** (oklch(0.81 0.006 248)): Supporting copy for body and details.
- **Muted Text Mist** (oklch(0.66 0.007 248)): Labels and metadata.

### Named Rules
**The Accent Scarcity Rule.** Accent tones are reserved for conversion actions, status markers, and key interactive anchors. Neutrals carry structure.

## 3. Typography

**Display Font:** Barlow Condensed (fallback to Barlow, then Segoe UI sans-serif)
**Body Font:** Barlow (fallback to Segoe UI sans-serif)
**Label/Mono Font:** Barlow labels in uppercase tracking, no separate mono family

**Character:** Condensed display cuts deliver serious, finance-adjacent authority. Body typography remains straightforward and readable under dense technical messaging.

### Hierarchy
- **Display** (600, clamp(3rem, 6.5vw, 4.5rem), 0.95): Hero statements and high-importance section headlines.
- **Headline** (600, 1.875rem, 1.1): Section titles and thematic dividers.
- **Title** (600, 1.125rem, 1.35): Short subheaders and card-level emphasis.
- **Body** (400, 1rem, 1.75): Explanatory copy with max line lengths around 58ch.
- **Label** (600, 0.75rem, 0.12em tracking, uppercase): Metadata, control labels, and operational tags.

### Named Rules
**The Technical Readability Rule.** Long-form copy stays at body scale with generous line height and constrained measure, even in dark mode contexts.

## 4. Elevation

This system is mostly flat, using tonal layering and border contrast as the primary depth language. Surfaces are separated by shifts in neutral value and stroke intensity instead of shadow-heavy lift effects.

### Shadow Vocabulary
- **No-shadow baseline** (`box-shadow: none`): Default state for panels, fields, and content sections.

### Named Rules
**The Flat-by-Default Rule.** Structural differentiation comes from tone and stroke, not ambient glow or decorative blur.

## 5. Components

### Buttons
- **Shape:** Tight, squared controls (2px radius) to keep the interface precise.
- **Primary:** Accent fill with dark ink text, uppercase label styling, medium horizontal padding.
- **Hover / Focus:** Hover shifts to softer accent. Focus remains high-visibility through explicit outlines.
- **Secondary:** Raised neutral background with strong border and text-primary foreground.

### Chips
- **Style:** Status and metadata chips are label-text treatments, not pill-heavy decorative badges.
- **State:** Color escalation is reserved for active status or conversion context.

### Cards / Containers
- **Corner Style:** Tight radius (2px) with hard borders.
- **Background:** Raised slate surfaces over darker section bands.
- **Shadow Strategy:** Flat baseline with border-driven separation.
- **Border:** Subtle and strong stroke tiers by information priority.
- **Internal Padding:** 24px canonical interior spacing.

### Inputs / Fields
- **Style:** Raised neutral background, strong stroke boundary, body-size text.
- **Focus:** Explicit 2px accent-adjacent outline plus border-color shift.
- **Error / Disabled:** Reserve for future extension, preserve contrast and clarity.

### Navigation
- **Style:** Sticky top bar with muted backdrop, explicit boundary line, and always-available contact actions.
- **States:** CTA buttons use accent progression; secondary actions gain accent on hover.
- **Mobile:** CTA remains visible while secondary form link collapses on smaller widths.

### Signature Component
- **Operational Profile Panel:** A definition-list style summary block with concise delivery parameters and primary outreach address.

## 6. Do's and Don'ts

### Do:
- **Do** keep primary outreach visible in header, hero, and footer using `hello@sundae.engineering`.
- **Do** use neutral layered surfaces (`surface-base`, `surface-deep`, `surface-raised`) with stroke-led separation.
- **Do** keep large messaging in condensed uppercase display styles and body text under ~65ch.
- **Do** use clear focus styling with visible outlines and keyboard-reachable actions.

### Don't:
- **Don't** resemble crypto or blockchain marketing: no neon palettes, speculative language, token/chain metaphors, or futuristic hype visuals.
- **Don't** use gradient text, glassmorphism defaults, or decorative side-stripe accent borders.
- **Don't** convert every information block into identical icon cards.
- **Don't** dilute CTA emphasis by using accent color as a general-purpose decoration.
