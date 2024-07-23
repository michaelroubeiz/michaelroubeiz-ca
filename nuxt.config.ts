// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "michaelroubeiz.ca",
      meta: [
        { name: "author", content: "Michael Roubeiz" },
        { name: "description", content: "Portfolio website for software developer Michael Roubeiz." },
        { name: "keywords", content: "Michael Roubeiz, Portfolio, Software Developer, Frontend Developer, Backend Developer, Fullstack Developer, Web Developer, Developer, Software Engineer, Software Development, Software Engineering, Software, Development, Engineering, Concordia University, Montreal, Quebec, Canada, Computer Science, IBM developer, Air Canada developer, Flexspring developer" }],
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        style: "background: linear-gradient(321deg, rgba(8,18,51,1) 0%, rgba(4,2,37,1) 30%, rgba(6,16,28,1) 100%);",
      }
    },
  },

  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    '@nuxt/eslint',
    ['nuxt-mail', {
      message: {
        to: process.env.NUXT_MAIL_TARGET,
      },
      smtp: {
        host: process.env.NUXT_MAIL_SMPT,
        port: process.env.NUXT_MAIL_PORT,
        auth: {
          user: process.env.NUXT_MAIL_USERNAME,
          pass: process.env.NUXT_MAIL_PASSWORD
        }
      },
    }],
  ],

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

  compatibilityDate: "2024-07-23",
})