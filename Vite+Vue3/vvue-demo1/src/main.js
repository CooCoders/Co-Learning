import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalComp from './components/GlobalComp.vue'

// createApp(App).mount('#app')
const app = createApp(App)
// 注册全局组件
app.component('GC', GlobalComp)
app.mount('#app')

// setTimeout(() => {
//   app.unmount('#app')
// }, 3000);
