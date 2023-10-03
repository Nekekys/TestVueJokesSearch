import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: ()=>({
    jokes: [],
    isLoading: false
  }),
  getters: {
    countJokes(state){
      return state.jokes.length
    }
  },
  mutations: {
    setJokes(state, jokes){
      state.jokes = jokes
    },
    startLoading(state){
      state.isLoading = true
    },
    endLoading(state){
      state.isLoading = false
    },
  },
  actions: {
    getJokes (context, query) {
      context.commit('startLoading')
      axios({
        method: 'get',
        url: `https://api.chucknorris.io/jokes/search?query=${query}`,
      }).then(res => {
        context.commit('setJokes', res.data.result)
      }).catch(e => {
        console.log(e)
      }).finally(()=>{
        context.commit('endLoading')
      })
    }
  }
})
