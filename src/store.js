import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    webSizes: {
      headline: [
        {
          name: 'XS',
          px: 14
        },
        {
          name: 'SM',
          px: 16
        },
        {
          name: 'MD',
          px: 18
        },
        {
          name: 'LG',
          px: 24
        },
        {
          name: 'XL',
          px: 32
        },
        {
          name: 'XXL',
          px: 48
        }
      ],

      body: [
        {
          name: 'XS',
          px: 12
        },
        {
          name: 'SM',
          px: 14
        },
        {
          name: 'MD',
          px: 16
        },
        {
          name: 'LG',
          px: 18
        },
        {
          name: 'XL',
          px: 24
        },
      ]
    },

    // size options
    sizeOptions: [12, 13, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50],
    
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
