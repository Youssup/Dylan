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
      path: '/',
      name: 'Footer',
      component: () => import('../components/Footer.vue')
    },
    {
      path: '/',
      name: 'Navbar',
      component: () => import('../components/Navbar.vue')
    },
    {
      path: '/',
      name: 'CarouselComponent',
      component: () => import('../components/CarouselComponent.vue')
    },
    {
      path: '/',
      name: 'Beats',
      component: () => import('../views/Beats.vue')
    },
    {
      path: '/',
      name: 'Business',
      component: () => import('../views/Business.vue')
    },
    {
      path: '/',
      name: 'Credits',
      component: () => import('../views/Credits.vue')
    },
    {
      path: '/',
      name: 'Goals',
      component: () => import('../views/Goals.vue')
    }
  ]
})



export default router