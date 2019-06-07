<template>
  <div id="app">
    <ConfigPanel />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import ConfigPanel from '@/components/web/ConfigPanel';

export default {
  name: 'app',
  data: function () {
    return {
      headlineNames: [],
      headlineValues: [],
      bodyNames: [],
      bodyValues: [],
    }
  },
  components: {
    ConfigPanel
  },
  methods: {
    initFonts: function () {
      // ===============================================
      // HEADLINES
      // ===============================================
      console.log('::::: Setting up headline')

      // store values into stored arrays
      for (let i=0; i< this.$store.state.webSizes.headline.length; i++) {
        let selector = ('.headline-' + this.$store.state.webSizes.headline[i].name).toLowerCase()
        // console.log(selector)

        let arrayName = 'H' + this.$store.state.webSizes.headline[i].name
        // console.log(arrayName)

        this.headlineValues[i] = this.$store.state.webSizes.headline[i].px
        this.headlineNames[i] = 'H' + this.$store.state.webSizes.headline[i].name

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
      console.log('::::: Setting up body')
      for (let i=0; i< this.$store.state.webSizes.body.length; i++) {
        let selector = ('.body-' + this.$store.state.webSizes.body[i].name).toLowerCase()
        // console.log(selector)

        let arrayName = 'B' + this.$store.state.webSizes.body[i].name
        // console.log(arrayName)

        this.bodyValues[i] = this.$store.state.webSizes.body[i].px
        this.bodyNames[i] = 'B' + this.$store.state.webSizes.body[i].name

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
    this.initFonts();
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

.headline-xs,
.headline-sm,
.headline-md,
.headline-lg,
.headline-xl,
.headline-xxl,
.body-xs,
.body-sm,
.body-md,
.body-lg,
.body-xl,
.body-xxl {
  position: relative;

  &:before {
    position: absolute;
    z-index: 100;
    background: black;
    color: white;
    border: 2px solid rgba(white, .1);
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
    border-radius: 4px;
    min-width: 40px;
    text-align: center;
    transition: all .15s ease-out;
  }

  &:hover:before {
    opacity: 1;
    top: 15px;
  }

  &.force-opacity:before {
    opacity: 1 !important;
  }
}

.headline-xs {
  &:before {
    content: "h-xs";
  }
}

.headline-sm {
  &:before {
    content: "h-sm";
  }
}

.headline-md {
  &:before {
    content: "h-md";
  }
}

.headline-lg {
  &:before {
    content: "h-lg";
  }
}

.headline-xl {
  &:before {
    content: "h-xl";
  }
}

.headline-xxl {
  &:before {
    content: "h-xxl";
  }
}

.body-xs {
  &:before {
    content: "b-xs";
  }
}

.body-sm {
  &:before {
    content: "b-sm";
  }
}

.body-md {
  &:before {
    content: "b-md";
  }
}

.body-lg {
  &:before {
    content: "b-lg";
  }
}

.body-xl {
  &:before {
    content: "b-xl";
  }
}
</style>
