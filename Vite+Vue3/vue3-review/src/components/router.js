import {createRouter, createWebHistory} from 'vue-router'

import Pagea from './Pagea.vue'
import Pageb from './Pageb.vue'
import Home from './Home.vue'

const routes = [
  {
    path: '/',
    redirect: '',
    // component:Home
  },
  {
    path: '/pagea',
    component: Pagea
  },
  {
    path: '/pageb',
    component: Pageb
  }
]

const router = createRouter({
  routes,
  history:createWebHistory()
})

export default router