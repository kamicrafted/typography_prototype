<template>
  <div class="caoursel">
    <div class="section-header">
      <h2 class="headline-md">{{ sectionTitle }}</h2>
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
import SeeMore from '@/components/web/SeeMore';
import RendererLeague from '@/components/web/RendererLeague';

export default {
  name: 'carousel',
  props: ['section-title'],
  components : {
    SeeMore,
    RendererLeague
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.caoursel {
  padding: 25px 40px 30px 40px;
  border-bottom: 1px solid rgba(white, .1);
  margin-bottom: 30px;
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