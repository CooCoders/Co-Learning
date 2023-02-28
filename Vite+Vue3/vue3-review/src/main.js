import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './components/router'
// import Counter from './components/Counter.js'

// createApp(App).mount('#app')

const app = createApp(App)

app.use(router)
app.mount('#app')


// app.component('Counter', Counter)
