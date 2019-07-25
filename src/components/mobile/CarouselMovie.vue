<template>
  <div class="carousel">
    <div class="section-header">
      <h2 class="headline-md" :class="{ 'force-opacity': showLabels }">{{ sectionTitle }}</h2>
      <SeeMore />
    </div>

    <div class="row">
      <RendererMovie />

      <RendererMovie />

      <RendererMovie />

      <RendererMovie />

      <RendererMovie />

      <RendererMovie />

      <RendererMovie />

      <RendererMovie />
    </div>
  </div>
</template>

<script>
import SeeMore from '@/components/mobile/SeeMore';
import RendererMovie from '@/components/mobile/RendererMovie';

export default {
  name: 'carousel',

  props: ['section-title'],

  components : {
    SeeMore,
    RendererMovie
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

.carousel {
  padding: 15px $mobile-gutter 0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h2 {
  font-weight: 900;
  text-transform: uppercase;
}

.row {
  display: flex;
  margin: 10px 0 0;
}

</style>