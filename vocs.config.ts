import { defineConfig } from "vocs/config";

export default defineConfig({
  title: "Makina Lite Docs",
  topNav: [
    {
      text: "Deployments",
      link: "/deployments",
      match: "/deployments",
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
  sidebar: [
    {
      text: "Welcome",
      link: "/",
    },
    {
      text: "Contracts",
      link: "/contracts",
    },
  ],
  socials: [
    { icon: "github", link: "https://github.com/MakinaHQ/makina-lite" },
    { icon: "x", link: "https://x.com/makinafi" },
  ],
});
