<template>
  <div class="hero">
    <div class="info">
      <p class="subhead headline-lg" :class="{ 'force-opacity': showLabels }">{{ subhead }}</p>
      <h1 class="title headline-xxl" :class="{ 'force-opacity': showLabels }">{{ title }}</h1>

      <a class="button button--cta headline-sm" :class="{ 'force-opacity': showLabels }" href="">Learn more</a>
    </div>

    <div class="cards">
      <div v-for="n of 3" :key="n" class="card">
        <div class="airing">

        </div>
        <div class="thumbnail">

        </div>
        <div class="info">
          <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">See Upcoming Matches in 4K</h2>
          <p class="subhead body-sm" :class="{ 'force-opacity': showLabels }">
            4K presented by the all new Lex...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero',

  props: {
    title: {
      default: 'Program Title',
      type: String
    },
    subhead: {
      default: 'Program subhead',
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

.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 650px;
  background-color: $color-temp;

  > .info {
    text-align: center;

    .title {
      font-weight: 900;
      text-transform: uppercase;
    }
  }

  .button {
    padding: 10px 20px;
    border-radius: 2px;
  }
}

.cards {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: -40px;

  .card {
    display: flex;
    margin: 0 10px;
    background-color: $grey-cool-60;
    box-shadow: 0 10px 20px rgba(black, .5);
    border-radius: 4px;
    overflow: hidden;
  }

  .airing {
    flex: 0 0 auto;
    width: 102px;
    background-color: $grey-cool-40;
  }

  .thumbnail {
    flex: 0 0 auto;
    width: 148px;
    height: 100px;
    background-color: grey;
  }

  .info {
    padding: 15px;

    .title {
      font-weight: 900;
    }
  }
}

</style>
