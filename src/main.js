import { createApp } from 'vue';
import '@/styles/main.scss';

import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';

import { createI18n } from 'vue-i18n'
import nl from './locales/nl.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    nl
  }
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(createPinia())

app.mount('#app')
