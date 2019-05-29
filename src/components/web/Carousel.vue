<template>
  <div class="carousel">
    <div class="section-header">
      <h2 class="headline-md">{{ sectionTitle }}</h2>
      <SeeMore />
    </div>

    <div class="row">
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" />
      <Renderer title="Program Title" :showNetworkBar="showNetworkBar" />
    </div>
  </div>
</template>

<script>
import SeeMore from '@/components/web/SeeMore';
import Renderer from '@/components/web/Renderer';

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
    }
  },
  components : {
    SeeMore,
    Renderer
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.carousel {
  padding: 25px 40px 0;
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