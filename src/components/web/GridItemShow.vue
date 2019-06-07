<template>
  <div class="grid-item">
    <div class="thumbnail"></div>

    <h2 class="program-title headline-sm" :class="{ 'force-opacity': showLabels }">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'renderer',

  props: {
    title: {
      default: 'Program Title',
      type: String
    },
    showNetworkBar: {
      default: false,
      type: Boolean
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

.grid-item {
  position: relative;
  flex: 0 0 auto;
  width: 32%;
  // min-height: 333px;
  margin-bottom: 40px;

  .thumbnail {
    width: 100%;
    padding-bottom: 50%;
    background: grey;
  }
}

.program-title {
  font-weight: 700;
  line-height: 1.3;
  margin: 10px 0 0 10px;
}
</style>