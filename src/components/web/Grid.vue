<template>
  <div class="grid">
    <div v-if="type === 'show'" class="grid__show">
      <GridItemShow v-for="n in 15" :key="n" title="Program Title" />
    </div>
    <div v-if="type === 'movie'" class="grid__movie">
      <GridItemMovie v-for="n in 16" :key="n" title="Program Title" />
    </div>
  </div>
</template>

<script>
import GridItemShow from '@/components/web/GridItemShow';
import GridItemMovie from '@/components/web/GridItemMovie';

export default {
  name: 'grid',
  props: {
    title: {
      default: 'Program Title',
      type: String
    },
    subhead: {
      default: 'Program subhead',
      type: String
    },
    type: {
      default: 'show',
      type: String
    }
  },
  components: {
    GridItemShow,
    GridItemMovie
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.grid {
  padding: 20px;

  &__show,
  &__movie {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
