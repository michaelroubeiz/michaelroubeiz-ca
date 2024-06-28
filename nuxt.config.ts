// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Cairo Play": true,
      "Playwrite MX": true,
      "Roboto": true,
      "Roboto Mono": true
    },
    display: "swap",
    download: true,
    useStylesheet: true,
    inject: true
  },
})