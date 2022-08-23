import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as API from '@/api';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App).use(store).use(router).use(ElementPlus)
app.config.globalProperties.$API = API
app.mount('#app')