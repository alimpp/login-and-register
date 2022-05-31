import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import login from '../views/login'
import register from '../views/register'
import news from '../views/news'
import home from '../views/home'
const routes = [
  {
    path: '/',
    name: 'home',
    component: home ,
    meta: { loginRequired: true }
  },
  {
    path: '/news',
    name: 'news',
    component: news , 
    meta: { loginRequired: true }
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from , next) => { 
      if(to.matched.some(record => record.meta.loginRequired)){
           if(store.getters['Login/watchAuth']){
             next()
           } else{
             next('/login')
           }
      }else{
        next()
      }
})

export default router
