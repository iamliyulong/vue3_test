// 引入createApp用于创建应用
import { createApp } from 'vue'
// 引入App根组件
import App from './App.vue'
// 引入createPinia，用于创建pinia
import { createPinia } from 'pinia'
// 创建pinia
const pinia = createPinia()
// 创建一个应用
const app = createApp(App)
// 使用pinia
app.use(pinia)
// 挂载整个应用到app容器中
app.mount('#app')
