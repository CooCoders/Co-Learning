import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Left from './Left.vue'
import Right from './Right.vue'

const routes = [
  {
    path: '/',
    redirect: ''
  },
  {
    path: '/left',
    component: Left
  },
  {
    path: '/right',
    component: Right
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router