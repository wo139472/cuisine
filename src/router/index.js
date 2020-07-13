import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: Home,
  },
  {
    path: '/detail',
    name: 'detail',
    props: true,
    component: () => import('../views/Detail.vue')
  },

  {
    path: '/class',
    name: 'class',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Class.vue'),

  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/seach',
    name: 'seach',
    props: true,
    component: () => import('../views/SeachBox.vue'),

  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   props: true,
  //   component: () => import('../view/Login.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
