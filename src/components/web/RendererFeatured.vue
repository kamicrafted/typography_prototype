<template>
  <div class="content-item">
    <div class="thumbnail">

    </div>

    <div class="title headline-sm" :class="{ 'force-opacity': showLabels }">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'renderer-featured',

  props: {
    title: {
      default: 'Program Title',
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
  position: relative;
  flex: 0 0 auto;
  width: 400px;
  height: 285px;
  margin-right: 20px;

  .thumbnail {
    width: 100%;
    height: 225px;
    background: grey;
  }

  .title {
    margin: 10px 0 0 10px;
    font-weight: 700;
    line-height: 1.3;
  }
}
</style>