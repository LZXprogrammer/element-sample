import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store1 = new Vue.store({
  state: {
    todo: [
      {id: 1, done: true},
      {id: 2, done: false}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})

export default store1
