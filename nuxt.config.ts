// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["@unocss/reset/tailwind.css", "@/assets/main.css"],
  modules: ["@unocss/nuxt"],
});
