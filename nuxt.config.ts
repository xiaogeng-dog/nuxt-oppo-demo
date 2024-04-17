// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // 配置属性采用驼峰的形式
    // server 端可访问的配置，会被打包到 server_bundle.js 中
    appKey: "aabbcc",

    // server、client 端，可访问的配置。会被打包到 server_bundle.js 和 client_bundle.js 中。
    public: {
      baseURL: "http://codercba.com:9060/oppo-nuxt",
    },
  },
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
        {
          name: "description",
          content:
            "OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！",
        },
        {
          name: "keywords",
          content: "OPPO商城，OPPO专区, OPPO手机，OPPO配件，OPPO, OPPO官网商城",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      noscript: [{ children: "Javascript is required" }],
    },
  },
  // css
  css: [
    "normalize.css",
    "~/assets/scss/index.scss",
    "~/assets/fonts/cus-font/iconfont.css",
  ],
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
          additionalData: '@use "~/assets/scss/variables.scss" as *;',
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
