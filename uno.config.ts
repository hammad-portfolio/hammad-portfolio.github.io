// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: ['Comfortaa:400,500,600,700,800,900'],
        mono: ['Fira Code', 'Fira Mono:400,700,900'],
        ruqaa: ['Aref Ruqaa Ink']
      }
    })
  ],
  transformers: [transformerDirectives()]
})
