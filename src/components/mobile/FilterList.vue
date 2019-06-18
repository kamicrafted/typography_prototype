<template>
  <div>
    <h2 class="headline-md" :class="{ 'force-opacity': showLabels }">{{ filterTitle }}</h2>

    <div class="filter-list">
      <div v-for="n in 10" :key="n" class="filter-list__item">
        <h3 class="headline-lg" :class="{ 'force-opacity': showLabels }">Option</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'filter-list',

    props: {
      filterTitle: {
        default: 'Filters',
        type: String
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

h2 {
  font-weight: 900;
  text-transform: uppercase;
  margin: 15px $mobile-gutter 10px;
}

.filter-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__item {
    text-align: center;
    width: calc(100% - 32px);
    padding: 25px 0;
    background: $color-temp;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 10px;
    border-radius: 4px;
  }
}
</style>