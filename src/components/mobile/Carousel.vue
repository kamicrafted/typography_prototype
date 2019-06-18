<template>
  <div class="carousel">
    <div class="section-header">
      <h2 class="headline-sm" :class="{ 'force-opacity': showLabels }">{{ sectionTitle }}</h2>
      <SeeMore />
    </div>

    <div class="row">
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" :hideMeta="hideMeta" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" :hideMeta="hideMeta" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" :hideMeta="hideMeta" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" :hideMeta="hideMeta" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" :hideMeta="hideMeta" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" :hideMeta="hideMeta" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" :hideMeta="hideMeta" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" :hideMeta="hideMeta" />
    </div>
  </div>
</template>

<script>
import SeeMore from '@/components/mobile/SeeMore';
import Renderer from '@/components/mobile/Renderer';

export default {
  name: 'carousel',

  props: {
    sectionTitle: {
      default: 'Title',
      type: String
    },
    showNetworkBar: {
      default: false,
      type: Boolean
    },
    hideMeta: {
      default: false,
      type: Boolean
    }
  },

  components : {
    SeeMore,
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
  padding: 15px $mobile-gutter 10px;
  // border-bottom: 1px solid rgba(white, .1);

  &:first-child {
    padding-top: 0;
  }
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
  margin-top: 10px;
}

</style>