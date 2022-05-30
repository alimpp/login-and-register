import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import login from '../views/login'
import register from '../views/register'
import news from '../views/news'
import home from '../views/home'
const routes = [
  {
    path: '/',
    name: 'home',
    component: home ,
    meta: { loginRequired: false }
  },
  {
    path: '/news',
    name: 'news',
    component: news , 
    meta: { loginRequired: false }
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
           if(store.state.isAuth){
             next()
           }
      }

})

export default router
