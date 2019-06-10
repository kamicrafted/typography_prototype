<template>
  <div class="config" draggable="true">
    <div @click="togglePanel" class="header">
      <div class="header__left">
        Configuration
      </div>
      <div class="header__right">
        <div v-if="!panelOpen" class="marker marker__plus"></div>
        <div v-if="panelOpen" class="marker marker__minus"></div>
      </div>
    </div>
    <transition name="fadeHeight">
      <div v-if="panelOpen" class="options">
        <div @click="toggleLabels" class="toggle">
          <div class="toggle__left">
            Show labels
          </div>
          <div class="toggle__right">
            {{ showLabels }}
          </div>
        </div>
        <div v-for="n in hScale.length" :key="'hgroup-' + hScale[n - 1].name + n | lowercase" class="options__item">
          <label :for="'headline-' + hScale[n - 1].name | lowercase">Headline {{hScale[n - 1].name}}</label>

          <select class="select" 
                  @change="updateSizing($event, 'headline', n - 1)"
                  :name="'headline-' + hScale[n - 1].name | lowercase" 
                  :id="'headline-' + hScale[n - 1].name | lowercase"
                  
                  >
            <option v-for="j in sizes.length" 
                    :selected="sizes[j - 1] == hScale[n - 1].px"
                    :key="'option-' + n + j"
                    :value="sizes[j-1]">
              {{ sizes[j-1] }}px
            </option>
          </select>
        </div>

        <div v-for="n in bScale.length" :key="'bgroup-' + bScale[n - 1].name + n | lowercase" class="options__item">
          <label :for="'body-' + bScale[n - 1].name | lowercase">Body {{bScale[n - 1].name}}</label>

          <select class="select" 
                  @change="updateSizing($event, 'body', n - 1)"
                  :name="'body-' + bScale[n - 1].name | lowercase" 
                  :id="'body-' + bScale[n - 1].name | lowercase"
                  
                  >
            <option v-for="j in sizes.length" 
                    :selected="sizes[j - 1] == bScale[n - 1].px"
                    :key="'option-' + n + j"
                    :value="sizes[j-1]">
              {{ sizes[j-1] }}px
            </option>
          </select>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'config-panel',

  data: function () {
    return {
      panelOpen: false, // toggle config panel
      currentPlatform: null,
      platformSizes: null,
    }
  },

  computed: {
    // fetch font size options from sizeOptions
    sizes () {
      return this.$store.state.sizeOptions
    },

    hScale () {
      return this.$store.state[this.platformSizes].headline
    },
    
    bScale () {
      return this.$store.state[this.platformSizes].body
    },

    showLabels () {
      return this.$store.state.showLabels
    }
  },

  methods: {
    initPlatformSizes: function () {
      this.currentPlatform = this.$store.state.platform
      this.platformSizes = (this.currentPlatform).toString() + 'Sizes'

      console.log('***** Setting up headlines for ' + this.currentPlatform)
      console.log(this.platformSizes)
    },

    togglePanel: function () {
      this.initPlatformSizes()
      this.panelOpen = !this.panelOpen
    },

    updateSizing: function (e, type, index) {
      if (e) {
        this.$store.commit('updateSize', {type: type, index: index, value: e.target.value})
      }
      
      this.$parent.initFonts()
    },

    toggleLabels: function () {
      this.$store.commit('toggleLabels')
    }
  },

  filters: {
    lowercase: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toLowerCase()
    }
  },

  mounted () {
    // this.updateSizing()
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.config {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 10px;
  width: 250px;
  max-height: 350px;
  box-shadow: 0 14px 30px rgba(black, .5);
  overflow: auto;
  opacity: 0;
  transition: all .15s ease-in-out;

  &:hover {
    opacity: 1;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: $nu-blue-100;
    color: white;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid rgba(black, .1);
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: $nu-blue-180;
    color: black;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    &__left {

    }

    &__right {
      
    }
  }
}

.options {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: #f0f0f0;
    color: black;

    &:nth-child(even) {
      background: #fafafa;
    }
  }

  .select {
    width: 30%;
    font-size: 14px;
    text-align: right;
  }

  .label {
    font-size: 14px;
  }
}

.marker {
  &__minus {
    width: 10px;
    height: 2px;
    background-color: black;
  }

  &__plus {
    position: relative;
    width: 10px;
    height: 2px;
    background-color: black;

    &:after {
      content: '';
      position: absolute;
      left: 4px;
      top: -4px;
      width: 2px;
      height: 10px;
      background-color: black;
    }
  }
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.2s;
  max-height: 350px;
}
.fadeHeight-enter,
.fadeHeight-leave-to
{
  opacity: 0;
  max-height: 0px;
}
</style>