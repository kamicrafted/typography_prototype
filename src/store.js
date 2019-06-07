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

    showLabels: false // toggle style labels
  },

  mutations: {
    // updates stored value for target size
    updateSize (state, {type, index, value}) {
      console.log('old value ' + state.webSizes[type][index].px)
      state.webSizes[type][index].px = value
      console.log('new value: ' + state.webSizes[type][index].px)

      console.log('updatingSize to type:' + type + ' index: ' + index + ' value: ' + value)
    },

    // traverses DOM for all matching elements and stores into an array
    saveArray (state, {arr, selector}) {
      // console.log('before' + state[arr.toString()].length)
      state[arr.toString()] = document.querySelectorAll(selector.toString())
      // console.log(state[arr.toString()])
    },

    toggleLabels (state) {
      state.showLabels = !state.showLabels 
      console.log('Labels are ' + state.showLabels)
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
