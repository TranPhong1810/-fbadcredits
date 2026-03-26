import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/',
    redirect: '/meta-community-standard'
  },
  {
    path: '/meta-community-standard',
    component: App
  },
  // 👇 fallback giống RewriteRule /index.html
  {
    path: '/:pathMatch(.*)*',
    redirect: '/meta-community-standard'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router