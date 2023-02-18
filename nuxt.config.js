require("dotenv").config();
import axios from "axios";
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: "server",
  loading: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "お手伝いサークル",
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content: "お手伝いサークル公式サイト",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "お手伝いサークル",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://q-box-otetsudai.an.r.appspot.com/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "お手伝いサークル",
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "質問や過去の回答はこちらから",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "お手伝いサークル公式サイト",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/e8ff8e3ccffd4e89b37680d70a3b6d26/answered.png?w=1200&h=630&blend-mode=normal&blend-align=middle,center&blend=https%3A%2F%2Fassets.imgix.net%2F~text%3Fw%3D1000%26txt-color%3D333%26txt-align%3Dcenter%26txt-size%3D36%26txtfont%3DHiragino%20Sans%20W6%26txt=お手伝いサークル公式サイト",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/common.js", { src: "@/plugins/vue-scrollto.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    ["vue-scrollto/nuxt", { duration: 300 }],
    "nuxt-fontawesome",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: "/",
    proxy: true,
    prefix: "/",
  },

  fontawesome: {
    component: "fa",
  },

  proxy: {
    "/api/": {
      target: "https://api.twitter.com",
      pathRewrite: {
        "^/api/": "/",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  publicRuntimeConfig: {
    consumerKey: process.env.CONSUMER_KEY || "",
    accessTokenKey: process.env.ACCESS_TOKEN_KEY || "",
    baseUrl: process.env.BASE_URL || "http://locahost:3000",
    // },
    // privateRuntimeConfig: {
    microCmsKey: process.env.MICROCMS_Q_BOX_KEY || "",
    consumerKeySecret: process.env.CONSUMER_KEY_SECRET || "",
    accessTokenKeySecret: process.env.ACCESS_TOKEN_KEY_SECRET || "",
  },
};
