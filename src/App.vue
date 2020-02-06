<template>
  <div id="app">
    <ConfigPanel />

    <TabMenu v-if="currentPlatform == 'mobile'" :platform="currentPlatform" />
    <router-view :key="$route.fullPath" :platform="currentPlatform" />
  </div>
</template>

<script>
import ConfigPanel from '@/components/web/ConfigPanel';
import TabMenu from '@/components/mobile/TabMenu';

export default {
  name: 'app',

  data: function () {
    return {
      currentPlatform: null,
      platformSizes: null,
      headlineNames: [],
      headlineValues: [],
      bodyNames: [],
      bodyValues: [],
      test: null
    }
  },

  components: {
    ConfigPanel,
    TabMenu
  },

  methods: {
    initFonts: function () {
      this.currentPlatform = this.$store.state.platform
      this.platformSizes = (this.currentPlatform).toString() + 'Sizes'

      // ===============================================
      // HEADLINES
      // ===============================================
      console.log('::::: Setting up headlines for ' + this.currentPlatform)
      console.log(this.platformSizes)

      // store values into stored arrays
      for (let i=0; i< this.$store.state[this.platformSizes].headline.length; i++) {
        let selector = ('.headline-' + this.$store.state[this.platformSizes].headline[i].name).toLowerCase()
        // console.log(selector)

        let arrayName = 'H' + this.$store.state[this.platformSizes].headline[i].name
        // console.log(arrayName)

        this.headlineValues[i] = this.$store.state[this.platformSizes].headline[i].px
        this.headlineNames[i] = 'H' + this.$store.state[this.platformSizes].headline[i].name

        this.$store.commit('saveArray', {arr: arrayName, selector: selector})

        // ******************************
        // output all headline array elements
        // ******************************
        // console.log('Array ' + arrayName + ' --------------------------------------')
        // console.log(this.$store.state[arrayName])
      }

      // set element sizes
      for (let k=0; k < this.headlineNames.length; k++) {
        for (let m=0; m < this.$store.state[this.headlineNames[k]].length; m++) {
          this.$store.state[this.headlineNames[k]][m].style.fontSize = this.headlineValues[k] + 'px'
          console.log(this.headlineNames[k] + '        ' + this.headlineValues[k] + 'px')
        }
      }

      // ===============================================
      // BODY
      // ===============================================
      console.log('::::: Setting up body for ' + this.currentPlatform)
      for (let i=0; i< this.$store.state[this.platformSizes].body.length; i++) {
        let selector = ('.body-' + this.$store.state[this.platformSizes].body[i].name).toLowerCase()
        // console.log(selector)

        let arrayName = 'B' + this.$store.state[this.platformSizes].body[i].name
        // console.log(arrayName)

        this.bodyValues[i] = this.$store.state[this.platformSizes].body[i].px
        this.bodyNames[i] = 'B' + this.$store.state[this.platformSizes].body[i].name

        this.$store.commit('saveArray', {arr: arrayName, selector: selector})

        // set element sizes
        for (let k=0; k < this.bodyNames.length; k++) {
          for (let m=0; m < this.$store.state[this.bodyNames[k]].length; m++) {
            this.$store.state[this.bodyNames[k]][m].style.fontSize = this.bodyValues[k] + 'px'
            console.log(this.bodyNames[k] + '        ' + this.bodyValues[k] + 'px')
          }
        }

        // ******************************
        // output all body array elements
        // ******************************
        // console.log(this.$store.state[arrayName])
      }
    },

    setFonts: function () {
      console.log('setFonts called')
    },
  },
  mounted () {
    // this.initFonts();
  }
}
</script>


<style lang="scss">
@import 'styles/app';

#app {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
