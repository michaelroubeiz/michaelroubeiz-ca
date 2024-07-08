// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "michaelroubeiz.ca",
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        style: "background-color: #0b192f;",
      }
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Cairo": true,
      "Open Sans": true,
      "Playwrite MX": true,
      "Roboto Mono": true
    },
    display: "swap",
    download: true,
    useStylesheet: true,
    inject: true
  },
})