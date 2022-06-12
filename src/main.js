import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/css/main.css'

axios.defaults.baseURL = 'https://ali128-register.iran.liara.run/apiv1'

createApp(App).use(store).use(router).mount('#app')
