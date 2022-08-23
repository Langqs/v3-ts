import { createRouter, createWebHashHistory, RouteRecord, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import layout from '@/layout/index.vue'

const routes:Array<any>= [
  {
    path:'/login',
    component:()=>import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children:{
      path:'dashboard',
      name:'Dashboard',
      component:()=>import('@/views/dashboard/index.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
