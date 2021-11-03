import { createApp } from 'vue'
import App from './App.vue'
import EchoUI from '../package/index'
const app = createApp(App)
app.use(EchoUI)
app.mount('#app')
