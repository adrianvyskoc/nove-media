import { createStore } from 'vuex'

export default createStore({
  state: {
    correctAnswers: 0,
    questionCount: 11,
  },

  mutations: {
    incrementCorrectAnswers(state) {
      state.correctAnswers++
    }
  }
})
