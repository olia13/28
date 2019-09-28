import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    
  },
  

  mutations: {
   
    getName(state, value) {
      
      state.name = value;
                      
    }
    
  },

  
  actions: {
    asyncSetName(context) {
      
      fetch('http://localhost:3000/persons')
      
        .then(data => data.json())
        .then(data => {
          return data.map(function(num){
            return num;
          })
          .filter(function(numm){
            return numm.name.indexOf(context.state.name) >=0;
          })
          .map(function(item){
            return item.name + ': ' + item.messages;
          })
          .join('')
         
        })
        .then(data => context.commit('getName', data));
        
    }
  }
})