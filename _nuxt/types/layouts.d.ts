import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "home"
declare module "C:/laragon/www/cakadi190/node_modules/.pnpm/nuxt@3.6.0_@types+node@20.3.1_typescript@5.1.3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}