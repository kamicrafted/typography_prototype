<template>
  <div class="caoursel">
    <div class="section-header">
      <h2 class="headline-md" :class="{ 'force-opacity': showLabels }">{{ sectionTitle }}</h2>
      <SeeMore />
    </div>

    <div class="row">
      <RendererLeague title="League Name" /> 

      <RendererLeague title="League Name" />

      <RendererLeague title="League Name" />

      <RendererLeague title="League Name" />

      <RendererLeague title="League Name" />

      <RendererLeague title="League Name" />

      <RendererLeague title="League Name" />

      <RendererLeague title="League Name" />

      <RendererLeague title="League Name" />
      
      <RendererLeague title="League Name" />
    </div>
  </div>
</template>

<script>
import SeeMore from '@/components/mobile/SeeMore';
import RendererLeague from '@/components/mobile/RendererLeague';

export default {
  name: 'carousel',

  props: ['section-title'],

  components : {
    SeeMore,
    RendererLeague
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

.caoursel {
  padding: 25px $mobile-gutter 30px $mobile-gutter;
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