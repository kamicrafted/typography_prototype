<template>
  <div class="">
    <header class="header">
      <div class="status">
      </div>
      
      <h1 class="headline-xl" :class="{ 'force-opacity': showLabels }">My Account</h1>

      <router-link :to="{ name: 'mobile-recorded' }">
        <div class="icon"></div>
      </router-link>
    </header>

    <div class="spacer"></div>
  </div>
</template>

<script>
export default {
  name: 'site-header',

  props: ['page-title'],

  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.status {
  height: 42px;
  margin-bottom: 10px;
  background-color: $grey-cool-20;
}

.header {
  position: fixed;
  width: $mobile-width;
  z-index: 500;
  padding: 0 $mobile-gutter 10px $mobile-gutter;
  background-color: $grey-cool-20;

  h1 {
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }

  .icon {
    width: 24px;
    height: 24px;
    border: 1px solid $color-temp;
  }

  a {
    position: absolute;
    bottom: 10px;

    .icon {
      border: 1px solid white;
    }
  }
}

.spacer {
  height: 90px;
}

.actionbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px 40px;

  &__left {
    display: flex;
    align-items: center;
    text-transform: uppercase;

    h1 {
      margin-left: 5px;
      text-align: center;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    text-transform: uppercase;

    
  }
}

.logo {
  width: 56px;
}
</style>
