---
name: Cyber Nostalgia
version: "alpha"
colors:
  primary: "#FF007F"
  on-primary: "#FFFFFF"
  secondary: "#00F0FF"
  on-secondary: "#000000"
  background: "#09090B"
  surface: "rgba(20, 20, 25, 0.65)"
  outline: "#3F3F46"
  surface-highlight: "rgba(255, 0, 127, 0.15)"
  text-primary: "#F4F4F5"
  text-secondary: "#A1A1AA"
typography:
  headline:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Roboto', sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
  label:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  sm: "12px"
  md: "16px"
  lg: "32px"
spacing:
  sm: "8px"
  md: "12px"
  lg: "24px"
components:
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
---

## Overview

Cyber Nostalgia blends 90s digital aesthetics with modern glassmorphism. It uses a deep, immersive dark mode punctuated by vibrant neon pink and cyan, evoking the feeling of a high-tech retro-futuristic laboratory.

## Colors

The palette is rooted in a deep cyber void with striking neon accents.

- **Primary (#FF007F):** Neon pink for primary actions, toggles, and active states.
- **Secondary (#00F0FF):** Cyber cyan for secondary actions and data visualization.
- **Background (#09090B):** Void black, creating infinite depth.
- **Surface:** Frosted dark glass for containment panels.

## Typography

- **Outfit:** Used for sharp, geometric headlines and labels, giving a futuristic digital feel.
- **Roboto:** Used for readable body text and precise data readouts.

## Layout & Spacing

Components are well-separated using large spacing tokens to emphasize the premium, uncrowded glass interface.

## Elevation

Elevation is achieved through blur (`backdrop-filter`) and vibrant colored glows rather than traditional drop shadows. Panels emit a subtle neon glow when active.

## Shapes

Corners are heavily rounded to contrast the harshness of the neon colors with soft, organic hardware-like shapes.
