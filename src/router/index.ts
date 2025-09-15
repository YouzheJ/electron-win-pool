import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/windowA',
    name: 'WindowA',
    component: () => import('../pages/WindowA.vue'),
  },
  {
    path: '/windowB',
    name: 'WindowB',
    component: () => import('../pages/WindowB.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router


