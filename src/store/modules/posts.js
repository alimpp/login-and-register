import { GET_DATA , SET_DATA , FETCH_DATA } from "../constans/constans";
import axios from "axios";
const Posts = {
    namespaced : true ,
    state: {
        posts : []
    },
    getters: { 
        [GET_DATA](state){
            return state.posts
        }
    },
    mutations: {
        [SET_DATA](state , posts){
            return state.posts = posts
        }
    },
    actions: {
        async [FETCH_DATA]({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            commit('SET_DATA' , response.data)
        }
    },
}

export default Posts