<template>
  <div>
    <a href="/" class="more body-sm" :class="{ 'force-opacity': showLabels }">
      <div class="icon"></div>
      {{ message }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'hints',

  props: ['message'],

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
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-weight: 700;

  .icon {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 100%;
    background-color: $color-temp;
  }
}
</style>