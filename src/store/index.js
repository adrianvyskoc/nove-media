import { createStore } from 'vuex'

export default createStore({
  state: {
    correctAnswers: 0,
    questionCount: 11,
    picture: 1,
    pictureCnt: 5,
  },

  mutations: {
    incrementCorrectAnswers(state) {
      state.correctAnswers++
    }
  }
})
