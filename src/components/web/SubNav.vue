<template>
  <div class="subnav">
    <router-link v-for="item in subnav" :key="item" class="headline-xs" :class="{ 'force-opacity': showLabels }" to="/">{{ item }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'subnav',
  
  props: ['subnav'],

  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.subnav {
  margin-top: 60px;
  padding: 10px 40px;
  background-color: $grey-cool-20;

  a {
    display: inline-block;
    color: $color-body;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    margin-right: 20px;
  }
}
</style>