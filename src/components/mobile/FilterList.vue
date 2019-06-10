<template>
  <div class="filter-list">
    <div v-for="n in 10" :key="n" class="filter-list__item">
      <h3 class="headline-xl">Option</h3>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '../../styles/app';

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