---
name: 8-Bit Material (M3 Pixel)
version: "1.0"
colors:
  primary: "#D81B60"
  on-primary: "#FFFFFF"
  primary-container: "#FCE4EC"
  on-primary-container: "#880E4F"
  background: "#E0F7FA"
  surface: "#FFFFFF"
  outline: "#1E1E1E"
  surface-variant: "#F5F5F5"
typography:
  headline:
    fontFamily: "'Press Start 2P', cursive"
    fontSize: "0.85rem"
    lineHeight: "1.5"
  body:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
  label:
    fontFamily: "'Press Start 2P', cursive"
    fontSize: "0.6rem"
rounded:
  sm: "8px"
  md: "12px"
  lg: "24px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "3px solid {colors.outline}"
    shadow: "6px 6px 0px {colors.outline}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    border: "2px solid {colors.outline}"
    shadow: "3px 3px 0px {colors.outline}"
  button-tonal:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.md}"
    border: "2px solid {colors.outline}"
    shadow: "3px 3px 0px {colors.outline}"
---

## Overview

8-Bit Material combines the structured layout and tonal logic of Google's Material Design 3 (M3) with the nostalgic, high-contrast aesthetics of 8-bit retro gaming. 

## Colors

The palette uses bright, playful M3 colors (like deep pinks and light cyans) but replaces soft shadows with thick, high-contrast `#1E1E1E` black borders to simulate pixel art.

## Typography

- **Press Start 2P:** Used for headlines, badges, and labels to instantly deliver the retro 8-bit vibe.
- **Outfit:** Used for body text and numbers to ensure readability without breaking the playful M3 geometry.

## Layout & Spacing

Maintains M3's generous padding and rounded corners (`24px` for cards, `12px` for buttons), creating a unique "rounded pixel" feel.

## Elevation

Soft drop shadows are completely removed. Elevation is achieved exclusively through **Hard Offset Shadows** (e.g., `6px 6px 0px #1E1E1E`), mimicking retro 2D isometric depth.
