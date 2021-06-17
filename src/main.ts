import { createApp } from 'vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import App from './App.vue'

const app = createApp(App)
app.use(Element3);
app.use(router);
app.use(store);
app.mount('#app');

