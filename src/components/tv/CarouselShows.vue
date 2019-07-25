<template>
  <div class="carousel">
    <div class="section-header">
      <h2 class="headline-md" :class="{ 'force-opacity': showLabels }">{{ sectionTitle }}</h2>
      <Hints message="Press and hold for options" />
    </div>

    <div class="row">
      <RendererShow title="Program Title" />

      <RendererShow title="Program Title" />

      <RendererShow title="Program Title" />

      <RendererShow title="Program Title" />

      <RendererShow title="Program Title" />
    </div>
  </div>
</template>

<script>
import Hints from '@/components/tv/Hints';
import RendererShow from '@/components/tv/RendererShow';

export default {
  name: 'carousel',

  props: ['section-title'],

  components : {
    Hints,
    RendererShow
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
  padding: 25px $tv-gutter 0;
  border-bottom: 1px solid rgba(white, .1);
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
  margin-top: 20px;
}

</style>