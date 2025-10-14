import './assets/main.css'
import './assets/_style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

const app = createApp(App)

app.use(router)
app.mount('#app')
