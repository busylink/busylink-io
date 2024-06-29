import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    solid(),
    ViteImageOptimizer({
    })
  ],
})
