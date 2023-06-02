import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/L_ink',
    name: 'L_ink',
    component: () => import('../views/L_ink.vue')
  },
  {
    path: '/C_aned',
    name: 'C_aned',
    component: () => import('../views/C_aned.vue')
  },
  {
    path: '/M_e',
    name: 'M_e',
    component: () => import('../views/M_e.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
