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
        <div v-for="n in hScale.length" :key="'hgroup-' + hScale[n - 1].name + n | lowercase" class="options__item">
          <div class="label">
            Headline {{hScale[n - 1].name}}
          </div>
          <select @change="updateSizing($event, 'headline' + hScale[n - 1].name)" class="select" :name="'headline-' + hScale[n - 1].name | lowercase" :id="'headline-' + hScale[n - 1].name | lowercase">
            <option :selected="hScale[n - 1].px == sizes[j - 1]" v-for="j in sizes.length" :key="'h-option-' + n + '-' + j | lowercase" :value="sizes[j - 1]">{{sizes[j - 1]}}px</option>
          </select>
        </div>

        <div v-for="n in bScale.length" :key="'bgroup-' + bScale[n - 1].name + n | lowercase" class="options__item">
          <div class="label">
            Body {{bScale[n - 1].name}}
          </div>
          <select @change="updateSizing($event, 'body' + bScale[n - 1].name)" class="select" :name="'body-' + bScale[n - 1].name | lowercase" :id="'body-' + bScale[n - 1].name | lowercase">
            <option :selected="bScale[n - 1].px == sizes[j - 1]" v-for="j in sizes.length" :key="'b-option-' + n + '-' + j | lowercase" :value="sizes[j - 1]">{{sizes[j - 1]}}px</option>
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
      panelOpen: false,
    }
  },
  computed: {
    sizes () {
      return this.$store.state.sizeOptions
    },
    hScale () {
      return this.$store.state.webSizes.headline
    },
    bScale () {
      return this.$store.state.webSizes.body
    }
  },
  methods: {
    togglePanel: function () {
      this.panelOpen = !this.panelOpen
    },

    updateSizing: function (e, el) {
      if (e) {
        this.$store.commit('updateValue', {target: el, value: e.target.value})
        console.log('el: ' + el + ' value: ' + e.target.value)
      }
      
      this.$parent.setFonts()
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
    this.updateSizing()
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
    background: white;
    color: black;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid rgba(black, .1);
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
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