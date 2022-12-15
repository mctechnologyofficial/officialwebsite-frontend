import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vueScrollTo from 'vue-scrollto'

createApp(App).use(vueScrollTo).mount('#app')
