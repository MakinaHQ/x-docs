import { defineConfig } from "vocs/config";
import { generateSidebar } from "./sidebar.js";

export default defineConfig({
  title: "Makina Lite Docs",
  description: "Documentation for the Makina Lite protocol",
  titleTemplate: "%s | Makina Lite Docs",

  // Branding assets (see public/img), shared with the main Makina docs. SVG
  // marks keep the nav logo crisp at any size: dark-fill in light mode, the
  // light-gradient mark in dark mode.
  iconUrl: "/img/favicon.ico",
  logoUrl: { light: "/img/logo-medium.svg", dark: "/img/logo-medium-dark.svg" },

  // Makina accent teal: #0891b2 (light) / #3dc9de (dark). Backgrounds, text and
  // status colors are mapped in src/pages/_root.css.
  accentColor: "light-dark(#0891b2, #3dc9de)",
  colorScheme: "light dark",

  // Shiki themes matching the main Makina docs (github light / dracula dark).
  codeHighlight: {
    themes: { light: "github-light", dark: "dracula" },
  },

  topNav: [
    {
      text: "Concepts",
      link: "/concepts/introduction",
      match: "/concepts",
    },
    {
      text: "Configure",
      link: "/configure",
      match: "/configure",
    },
    {
      text: "Contracts",
      link: "/contracts",
      match: "/contracts",
    },
    {
      text: "Resources",
      items: [
        {
          text: "Safe App",
          link: "https://lite.makina.finance",
          external: true,
        },
        {
          text: "GitHub",
          link: "https://github.com/MakinaHQ",
          external: true,
        },
      ],
    },
  ],
  sidebar: {
    "/concepts": [
      { text: "Introduction", link: "/concepts/introduction" },
      { text: "Architecture Overview", link: "/concepts/architecture/overview" },
      { text: "Operating Modes", link: "/concepts/architecture/operating-modes" },
      {
        text: "Operations",
        collapsed: false,
        items: [
          { text: "Position Management", link: "/concepts/architecture/position-management" },
          { text: "Token Swaps", link: "/concepts/architecture/swaps" },
          { text: "Token Bridging", link: "/concepts/architecture/bridging" },
        ],
      },
      { text: "Pricing & Oracles", link: "/concepts/architecture/pricing-oracles" },
      { text: "Permissions & Governance", link: "/concepts/permissions-and-governance" },
      { text: "Risk Model", link: "/concepts/risk-model" },
    ],
    "/contracts": generateSidebar("contracts"),
  },
  socials: [
    { icon: "github", link: "https://github.com/MakinaHQ/makina-lite" },
    { icon: "x", link: "https://x.com/makinafi" },
  ],
});
