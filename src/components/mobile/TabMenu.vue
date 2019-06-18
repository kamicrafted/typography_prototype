<template>
  <div class="menu">
    <router-link class="menu__item" :to="{name: 'mobile'}">
      <div class="icon"></div>
      <div class="label headline-xxs" :class="{ 'force-opacity': showLabels }">Home</div>
    </router-link>

    <router-link class="menu__item" :to="{name: 'mobile-sports'}">
      <div class="icon"></div>
      <div class="label headline-xxs" :class="{ 'force-opacity': showLabels }">Sports</div>
    </router-link>

    <router-link class="menu__item" :to="{name: 'mobile-shows'}">
      <div class="icon"></div>
      <div class="label headline-xxs" :class="{ 'force-opacity': showLabels }">Entertainment</div>
    </router-link>

    <router-link class="menu__item" :to="{name: 'mobile-guide'}">
      <div class="icon"></div>
      <div class="label headline-xxs" :class="{ 'force-opacity': showLabels }">Guide</div>
    </router-link>

    <router-link class="menu__item" :to="{name: 'mobile-recorded'}">
      <div class="icon"></div>
      <div class="label headline-xxs" :class="{ 'force-opacity': showLabels }">My Fubo</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'site-footer',

  props: ['platform'],

  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  },

  mounted () {
    this.$store.commit('setPlatform', this.platform)
    this.$parent.initFonts()
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.menu {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 500;
  width: $mobile-width;
  height: 95px;
  top: calc(100% - 95px);
  left: 50%;
  padding-top: 10px;
  background-color: $grey-cool-0;
  transform: translateX(-50%);

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100px;
    color: white;

    .icon {
      width: 30px;
      height: 30px;
      background-color: $color-temp;
    }

    .label {
      position: absolute;
      left: 0;
      bottom: -15px;
      width: 100%;
      text-transform: uppercase;
      text-align: center;
      font-weight: 700;
      font-size: 8px;
      letter-spacing: .5px;
    }
  }
}
</style>
