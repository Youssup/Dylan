import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/',
      name: 'Footer',
      component: () => import('../components/Footer.vue')
    },
    {
      path: '/',
      name: 'Navbar',
      component: () => import('../components/Navbar.vue')
    }
  ]
})



export default router