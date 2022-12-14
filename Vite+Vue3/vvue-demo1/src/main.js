import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalComp from './components/GlobalComp.vue'
import myDirective from './components/customize-directives/myDirective'
import router from './components/routers/router'
import { createPinia } from 'pinia'

// createApp(App).mount('#app')
const app = createApp(App)
// 注册全局组件
app.component('GC', GlobalComp)
// 注册自定义的指令
app.directive('focus', myDirective)
app.use(router)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')

// setTimeout(() => {
//   app.unmount('#app')
// }, 3000);
