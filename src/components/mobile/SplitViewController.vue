<template>
  <div class="spliview-controller">
    <div class="options">
      <router-link v-for="(option, index) in options" :key="option" class="option headline-md" :class="{ active: selection === index, 'force-opacity': showLabels}" :to="{ name: 'mobile-' + option.toLowerCase() }">{{ option }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'splitview-controller',

  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  },

  props: {
    selection: Number,
    options: Array
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.spliview-controller {
  margin: -12px 0 10px;
  background-color: $grey-cool-20;

  .options {
    display: flex;
    margin: 0 auto;
  }

  .option {
    width: 50%;
    padding: 12px 0 10px 0;
    text-align: center;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
  }

  .active {
    border-bottom: 4px solid $orange-100;
  }
}
</style>