import './assets/main.css'
import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Swipe, SwipeItem } from 'vant';
// 引入 Vant 及其样式
import Vant from 'vant'
import 'vant/lib/index.css'
const app = createApp(App)
app.use(router)
app.use(Vant)
app.use(Swipe);
app.use(SwipeItem);
app.mount('#app')
