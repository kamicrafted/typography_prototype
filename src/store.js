import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sizeOptions: [8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80], // size options

    showLabels: false, // toggle style labels

    platform: null, // sets device platform
    platformSizes: null, // sets platform array

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
          px: 46
        }
      ],

      body: [
        {
          name: 'XXS',
          px: 10
        },
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

    mobileSizes: {
      headline: [
        {
          name: 'XXS',
          px: 8
        },
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
        {
          name: 'XXL',
          px: 24
        }
      ],

      body: [
        {
          name: 'XS',
          px: 10
        },
        {
          name: 'SM',
          px: 12
        },
        {
          name: 'MD',
          px: 14
        },
        {
          name: 'LG',
          px: 16
        },
        {
          name: 'XL',
          px: 20
        }
      ]
    },

    tvSizes: {
      headline: [
        {
          name: 'XXS',
          px: 12
        },
        {
          name: 'XS',
          px: 20
        },
        {
          name: 'SM',
          px: 24
        },
        {
          name: 'MD',
          px: 30
        },
        {
          name: 'LG',
          px: 36
        },
        {
          name: 'XL',
          px: 48
        },
        {
          name: 'XXL',
          px: 72
        }
      ],

      body: [
        {
          name: 'XXS',
          px: 12
        },
        {
          name: 'XS',
          px: 16
        },
        {
          name: 'SM',
          px: 18
        },
        {
          name: 'MD',
          px: 20
        },
        {
          name: 'LG',
          px: 24
        },
        {
          name: 'XL',
          px: 32
        },
      ]
    },

  },

  mutations: {
    // updates stored value for target size
    updateSize (state, {type, index, value}) {
      state.platformSizes = (state.platform).toString() + 'Sizes'

      console.log('old value ' + state[state.platformSizes][type][index].px)
      state[state.platformSizes][type][index].px = value
      console.log('new value: ' + state[state.platformSizes][type][index].px)

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
    },

    // set device platform to load related data
    setPlatform (state, platform) {
      console.log('Current platform is ' + platform)
      state.platform = platform
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
