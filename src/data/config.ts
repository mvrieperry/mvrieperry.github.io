export const CONFIG = {
  // ---------------------------------------------------------------------------
  // Site Settings
  // ---------------------------------------------------------------------------
  site: {
    url: "https://personal-site-6xa.pages.dev",
    locale: "en_US",
    twitterHandle: "",
  },

  // ---------------------------------------------------------------------------
  // SEO Settings
  // ---------------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | %n", // %s = page title, %n = DATA.name
    twitterCard: "summary_large_image" as const,
    robots: "index, follow",
  },

  // ---------------------------------------------------------------------------
  // Typography
  // ---------------------------------------------------------------------------
  typography: {
    // Base font size as a percentage. 100 = browser default (16px).
    // 110 = 10% larger or 90 = 10% smaller, across all text, headings, and links simultaneously.
    baseFontSize: 115,
  },

  // ---------------------------------------------------------------------------
  // Blog Settings
  // ---------------------------------------------------------------------------
  blog: {
    postsPerPage: 10,
  },

  // ---------------------------------------------------------------------------
  // Font Settings
  // See https://fontsource.org/?variable=true for fonts that can be installed via package registry
  // To change fonts:
  // 1. pnpm install @fontsource-variable/<font-name> (for example 'pnpm add @fontsource-variable/inter'). Install BOTH the sans and mono fonts.
  // 2. Edit src/styles/global.css - swap the @import and --font-sans and --font-mono values
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // Design Settings
  // 1. Pick a theme at ui.shadcn.com/themes or generate one with a tool like tweakcn.com
  // 2. Copy the CSS variables block
  // 3. Paste into BELOW with the naming conversion already used
  // ---------------------------------------------------------------------------

  theme: {
    radius: "1.4rem",

    light: {
      background: "oklch(0.9940 0 0)",
      foreground: "oklch(0 0 0)",
      card: "oklch(0.9940 0 0)",
      cardForeground: "oklch(0 0 0)",
      popover: "oklch(0.9911 0 0)",
      popoverForeground: "oklch(0 0 0)",
      primary: "oklch(0.7830 0.0384 132.7370)",
      primaryForeground: "oklch(0 0 0)",
      secondary: "oklch(0.9540 0.0063 255.4755)",
      secondaryForeground: "oklch(0.1344 0 0)",
      muted: "oklch(0.9702 0 0)",
      mutedForeground: "oklch(0.6234 0 0)",
      accent: "oklch(0.4429 0.0444 134.5073)",
      accentForeground: "oklch(1.0000 0 0)",
      destructive: "oklch(0.4926 0.1864 26.2192)",
      border: "oklch(0.9300 0.0094 286.2156)",
      input: "oklch(0.9401 0 0)",
      ring: "oklch(0.7830 0.0384 132.7370)",
    },

    dark: {
      background: "oklch(0.1173 0.0090 73.4751)",
      foreground: "oklch(0.9796 0.0017 67.8026)",
      card: "oklch(0.1609 0.0115 80.9823)",
      cardForeground: "oklch(0.9796 0.0017 67.8026)",
      popover: "oklch(0.1405 0.0109 88.4982)",
      popoverForeground: "oklch(0.9796 0.0017 67.8026)",
      primary: "oklch(0.7830 0.0384 132.7370)",
      primaryForeground: "oklch(0.0986 0.0063 72.5271)",
      secondary: "oklch(0.2510 0.0148 76.2105)",
      secondaryForeground: "oklch(0.9198 0.0075 80.7204)",
      muted: "oklch(0.2203 0.0129 77.9565)",
      mutedForeground: "oklch(0.6511 0.0081 80.7132)",
      accent: "oklch(0.4429 0.0444 134.5073)",
      accentForeground: "oklch(1.0000 0 0)",
      destructive: "oklch(0.4926 0.1864 26.2192)",
      border: "oklch(0.2806 0.0246 82.6847)",
      input: "oklch(0.1994 0.0155 75.9533)",
      ring: "oklch(0.7830 0.0384 132.7370)",
    },
  },

} as const;
