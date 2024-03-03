import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { redirectPlugin } from '@vuepress/plugin-redirect'

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "MW & MWT 文档",
  locales: {
    "/zh-hans/": {
      lang: "zh-CN",
      title: "MW & MWT 文档",
    },
    "/zh-hant/": {
      lang: "zh-TW",
      title: "MW & MWT 文件",
    },
  },
  theme,
  plugins: [
    redirectPlugin({
	  autoLocale: true,
	  switchLocale: "modal",
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
