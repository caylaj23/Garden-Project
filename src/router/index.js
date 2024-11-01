import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RecipesView from '@/views/RecipesView.vue'
import MapView from '@/views/MapView.vue'
import FarmersView from '@/views/FarmersView.vue'
import ResourcesView from '@/views/ResourcesView.vue'
import SignupView from '@/views/SignupView.vue'
import VolunteerView from '@/views/VolunteerView.vue'

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
      component: MapView
    },
    {
      path: '/farmers',
      name: 'farmers',
      component: FarmersView,
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: VolunteerView,
    }
    
  ]
})

export default router
