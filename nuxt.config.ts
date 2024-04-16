// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // head
    head: {
      title: "Element Plus + Nuxt 3",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "ElementPlus + Nuxt3",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  // css
  css: ["~/assets/scss/index.scss"],
  typescript: {
    strict: true,
    shim: false,
  },
  // build modules
  modules: [
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/color-mode",
  ],
  // colorMode
  colorMode: {
    classSuffix: "",
  },
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"],
  },
  devtools: { enabled: true },
});
