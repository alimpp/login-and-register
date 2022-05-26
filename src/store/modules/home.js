import { GET_DATA , SET_DATA , FETCH_DATA } from "../constans/constans";
import axios from "axios";
const Home = {
    namespaced : true ,
    state: {
        home : []
    },
    getters: { 
        [GET_DATA](state){
            return state.home
        }
    },
    mutations: {
        [SET_DATA](state , home){
            return state.home = home
        }
    },
    actions: {
       async [FETCH_DATA]({commit}){
            const response = await axios.get('https://api.freerealapi.com/blogs')
            commit('SET_DATA' , response.data.blogs)
        }
    },
}

export default Home