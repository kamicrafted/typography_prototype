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

    // headlineXS: 10,
    // headlineSM: 10,
    // headlineMD: 10,
    // headlineLG: 10,
    // headlineXL: 10,
    // headlineXXL: 10,

    bodyXS: 12,
    bodySM: 14,
    bodyMD: 16,
    bodyLG: 18,
    bodyXL: 24,

    // size options
    sizeOptions: [12, 13, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50],
    
    // headline sizes
    headlineScale: [
      'XS',
      'SM',
      'MD',
      'LG',
      'XL',
      'XXL',
    ],

    // body sizes
    bodyScale: [
      'XS',
      'SM',
      'MD',
      'LG',
      'XL',
    ],

    // arrays to store DOM refs
    HXS: [],
    HSM: [],
    HMD: [],
    HLG: [],
    HXL: [],
    HXXL: [],
    BXS: [],
    BSM: [],
    BMD: [],
    BLG: [],
    BXL: [],
  },
  mutations: {
    updateValue (state, {target, value}) {
      let temp = target.toString()
      state[temp] = value
    }
  },
  actions: {

  },
  getters: {
    // getSize: state => {
    //   return state.sizeOptions.find(sizeOptions)
    // }
  }
})
