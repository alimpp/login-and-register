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
                 }else{
                     state.isAuth = false
                     state.token = ""
                 }
            } , 
            [LOGIN](state , token){
                 if(token){
                     state.isAuth = true
                     state.token = token 
                     localStorage.setItem("token" , token)
                 }else{
                     state.isAuth = false 
                     state.token = ""
                     localStorage.removeItem('token')
                 }
            } , 
            [LOGOUT](state){
                state.isAuth = false 
                state.token = ""
                localStorage.removeItem('token')
            }
        },
}

export default Login