import axios from "axios"
import { LOGIN , LOGOUT , ON_START } from "../constans/constans"
const Login = {
        namespaced : true ,
        state: {
            isAuth : false , 
            token : "" , 
        },
        getters : {
             watchAuth(state){
                 return state.isAuth
             }
        } , 
        mutations: {
            [ON_START](state){
                 let token = localStorage.getItem("token")
                 if(token){
                     state.isAuth = true
                     state.token = token
                     axios.defaults.headers.common['Authorization'] = "Token " + token
                 }else{
                     state.isAuth = false
                     state.token = ""
                     axios.defaults.headers.common['Authorization'] = ""
                 }
            } , 
            [LOGIN](state , token){
                 if(token){
                     state.isAuth = true
                     state.token = token 
                     localStorage.setItem("token" , token)
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                 }else{
                     state.isAuth = false 
                     state.token = ""
                     localStorage.removeItem('token')
                     axios.defaults.headers.common['Authorization'] = ""
                 }
            } , 
            [LOGOUT](state){
                state.isAuth = false 
                state.token = ""
                axios.defaults.headers.common['Authorization'] = ""
                localStorage.removeItem('token')
            }
        },
}

export default Login