// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/style.css"],
  nitro: {
    output: {
      // 修改 Nitro 的缓存目录（默认为 .output）
      dir: "dist",
      // 修改最终静态资源输出目录（默认为 dist）
      publicDir: "dist/public",
      // 修改服务端构建输出目录（可选）
      serverDir: "dist/server",
    },
  },
});
