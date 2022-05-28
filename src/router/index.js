import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login'
import register from '../views/register'
import news from '../views/news'
import home from '../views/home'
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
