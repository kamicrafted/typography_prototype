<template>
  <div class="caoursel">
    <div class="section-header">
      <h2 class="headline-md">{{ sectionTitle }}</h2>
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
import SeeMore from '@/components/web/SeeMore';
import RendererMovie from '@/components/web/RendererMovie';

export default {
  name: 'carousel',
  props: ['section-title'],
  components : {
    SeeMore,
    RendererMovie
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.caoursel {
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