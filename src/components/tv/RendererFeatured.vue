<template>
  <div class="content-item">
    <div class="thumbnail" :class="{ 'rounded': !hideMeta }">
      <div class="info">
        <div class="airtime body-lg" :class="{ 'force-opacity': showLabels }">
          Watch Now
        </div>
        <h2 class="headline-xl" :class="{ 'force-opacity': showLabels }">Featured Program Title</h2>
        <div class="meta body-lg" :class="{ 'force-opacity': showLabels }">
          S14, EP4, "Auditions 4"
        </div>
      </div>
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
    },

    hideMeta: {
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

.content-item {
  position: relative;
  flex: 0 0 auto;
  width: 800px;
  margin-right: 40px;

  .thumbnail {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    background: grey;
    border-radius: 6px;
  }
}

.info {
  margin-bottom: -200px;
  text-align: center;

  .airtime {
    text-transform: uppercase;
  }

  h2 {
    font-weight: 900;
    text-transform: uppercase;
  }
}
</style>