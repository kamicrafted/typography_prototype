<template>
  <div class="carousel">
    <div class="section-header">
      <h2 class="headline-md" :class="{ 'force-opacity': showLabels }">
        {{ sectionTitle }}
        <span>{{ sectionTitleSecondary }}</span>
      </h2>
      <Hints message="Play Event" />
    </div>

    <div class="row">
      <Renderer title="Program Title" />
      <Renderer title="Program Title" />
      <Renderer title="Program Title" />
      <Renderer title="Program Title" />
      <Renderer title="Program Title" />
      <Renderer title="Program Title" />
      <Renderer title="Program Title" />
    </div>
  </div>
</template>

<script>
import Hints from '@/components/tv/Hints';
import Renderer from '@/components/tv/RendererFeatured';

export default {
  name: 'carousel',

  props: {
    sectionTitle: {
      default: 'Title',
      type: String
    },
    sectionTitleSecondary: {
      default: 'Subtitle',
      type: String
    },
    showNetworkBar: {
      default: false,
      type: Boolean
    },
  },

  components : {
    Hints,
    Renderer
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
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h2 {
  font-weight: 900;
  text-transform: uppercase;

  > span {
    font-weight: normal;
  }
}

.row {
  display: flex;
  margin-top: 28px;
}

</style>