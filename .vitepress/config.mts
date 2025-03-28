import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exer16 - Revue de code",
  description: "Revue de code documentée",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Accueil", link: "/" },
      { text: "Samuel Baribault", link: "/samuel-baribault" },
      { text: "Dominic Morrissette", link: "/dominic-morrissette" },
    ],

    sidebar: [
      {
        text: "Revues",
        items: [
          { text: "Samuel Baribault", link: "/samuel-baribault" },
          { text: "Dominic Morrissette", link: "/dominic-morrissette" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
  locales: {
    root: {
      label: "Français",
      lang: "fr",
    },
  },
})
