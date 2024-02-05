import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Icons({  autoInstall: true,
  })],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@stores', replacement: fileURLToPath(new URL('./src/stores', import.meta.url)) },
      { find: '@composables', replacement: fileURLToPath(new URL('./src/composables', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
    ],
  },
})
