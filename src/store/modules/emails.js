import { GET_DATA , SET_DATA , FETCH_DATA } from "../constans/constans";
import axios from "axios";
const Emails = {
    namespaced : true ,
    state: {
        emails : []
    },
    getters: { 
        [GET_DATA](state){
            return state.emails
        }
    },
    mutations: {
        [SET_DATA](state , emails){
            return state.emails = emails
        }
    },
    actions: {
        async [FETCH_DATA]({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            commit('SET_DATA' , response.data)
        }
    },
}

export default Emails