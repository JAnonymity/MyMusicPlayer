import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import home from '../views/home'
import layout from '../views/layout.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('../views/mine.vue')
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import('../views/search.vue')
      },
      {
        path: '/topic',
        name: 'Topic',
        component: () => import('../views/topic.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
})

export default router