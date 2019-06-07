<template>
  <div class="content-item">
    <div class="logo"></div>
    <div class="label headline-sm" :class="{ 'force-opacity': showLabels }">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'renderer-league',

  props: {
    title: {
      default: 'League Name',
      type: String
    }
  },

  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.content-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  margin-right: 20px;
  background: $grey-cool-40;
  border-radius: 100%;
}

.logo {
  margin-top: 25px;
  width: 80px;
  height: 60px;
  background-color: $color-temp;
}

.label {
  max-width: 80%;
  margin-top: 15px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
}
</style>