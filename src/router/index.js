import { createRouter, createWebHistory } from 'vue-router'

import PopView from '@/views/PopView.vue'
import RapView from '@/views/RapView.vue'
import RockView from '@/views/RockView.vue'
import NotFoundComponent from '@/components/NotFoundComponent.vue'

const routes = [
    {
    path: '/pop',
    name: 'pop',
    component: PopView
  },
  {
    path: '/rap',
    name: 'rap',
    component: RapView
  },
  {
    path: '/rock',
    name: 'rock',
    component: RockView
  },
  {
    path:'/:catchAll(.*)',
    name: 'notfound',
    component: NotFoundComponent
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
