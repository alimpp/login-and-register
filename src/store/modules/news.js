import { GET_DATA , SET_DATA , FETCH_DATA } from "../constans/constans";
import axios from "axios";
const News = {
    namespaced : true ,
    state: {
        news : []
    },
    getters: { 
        [GET_DATA](state){
            return state.news
        }
    },
    mutations: {
        [SET_DATA](state , news){
            return state.news = news
        }
    },
    actions: {
        async [FETCH_DATA]({commit}){
            const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-05-25&to=2022-05-25&sortBy=popularity&apiKey=063aff84bcbb40a8896e50d05a7bfb08')
            commit('SET_DATA' , response.data.articles)
        }
    },
}

export default News