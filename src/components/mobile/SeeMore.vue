<template>
  <div>
    <a href="/" class="more body-xs" :class="{ 'force-opacity': showLabels }">See more</a>
  </div>
</template>

<script>
export default {
  name: 'see-more',

  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}
</style>