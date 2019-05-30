import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headlineXS: 14,
      headlineSM: 16,
      headlineMD: 18,
      headlineLG: 24,
      headlineXL: 32,
      headlineXXL: 48,
      bodyXS: 12,
      bodySM: 14,
      bodyMD: 16,
      bodyLG: 18,
      bodyXL: 24,
      // headlineXS: 1,
      // headlineSM: 1,
      // headlineMD: 1,
      // headlineLG: 1,
      // headlineXL: 1,
      // headlineXXL: 1,
      // bodyXS: 1,
      // bodySM: 1,
      // bodyMD: 1,
      // bodyLG: 1,
      // bodyXL: 1,
  },
  mutations: {
    // updateSize (state, id) {

    // }
  },
  actions: {

  },
  getters: {
    // getSize: state => {
    //   return state.sizeOptions.find(sizeOptions)
    // }
  }
})
