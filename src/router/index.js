import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipesView from '@/views/RecipesView.vue'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipesView
    },
    {
      path: '/map',
      name: 'map',
      component: UserView
    },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: AdminView,
    // }
  ]
})

export default router
