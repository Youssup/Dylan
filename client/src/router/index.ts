import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/Sound',
      name: 'Sound',
      component: () => import('../views/Sound.vue')
    },
    {
      path: '/Business',
      name: 'Business',
      component: () => import('../views/Business.vue')
    },
    {
      path: '/Credits',
      name: 'Credits',
      component: () => import('../views/Credits.vue')
    },
    {
      path: '/Goals',
      name: 'Goals',
      component: () => import('../views/Goals.vue')
    }
  ]
})



export default router