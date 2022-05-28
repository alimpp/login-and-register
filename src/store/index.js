import { createStore } from 'vuex'
import Home from './modules/home'
import News from './modules/news'
import Login from './modules/login'
import Posts from './modules/posts'
import Emails from './modules/emails'
export default createStore({
  modules: {
    Home : Home , 
    News : News , 
    Login : Login , 
    Posts : Posts , 
    Emails : Emails , 
  }
})
