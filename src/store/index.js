import { createStore } from 'vuex'
import Home from './modules/home'
import Blogs from './modules/blogs'
import News from './modules/news'
import Login from './modules/login'
import Posts from './modules/posts'
import Emails from './modules/emails'
export default createStore({
  modules: {
    Home : Home , 
    Blogs : Blogs , 
    News : News , 
    Login : Login , 
    Posts : Posts , 
    Emails : Emails , 
  }
})
