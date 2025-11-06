import { createApp } from 'vue'
import './style.scss'
import 'animate.css'

import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'sweetalert2';

createApp(App)
    // .use(VueSweetalert2)
    .use(router, VueSweetalert2)
    .mount('#app')
