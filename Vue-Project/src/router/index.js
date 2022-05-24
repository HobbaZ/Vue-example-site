import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      //About route
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      //Profile route
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      props: true
    },

    {
      //Login route
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },

    {
      //Signup route
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
  ]
})

export default router
