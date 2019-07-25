<template>
  <div class="live-preview">
    <div class="info">
      <div class="airtime">
        <span class="tag body-sm" :class="{ 'force-opacity': showLabels }">Live</span>
        <span class="body-lg" :class="{ 'force-opacity': showLabels }">9:00 - 10:00PM</span>
      </div>

      <div class="program-info">
        <h1 class="headline-xxl" :class="{ 'force-opacity': showLabels }">Brooklyn Nine-Nine</h1>
        <p class="meta body-lg" :class="{ 'force-opacity': showLabels }">
          S16 E12, "A New Beginning"
        </p>

        <p class="body-lg" :class="{ 'force-opacity': showLabels }">
          Rick and his group make a risky run into Washington, D.C. to search for artifacts they will need to build a civilization.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'live-preview',
  
  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.live-preview {
  display: flex;
  align-items: center;
  height: 800px;
  padding: $tv-gutter;
}

.info {
  width: 42%;
  margin-top: -110px;

  h1 {
    font-weight: 900;
    line-height: 1;
    margin-bottom: 15px;
  }

  .tag {
    text-transform: uppercase;
    font-weight: 700;
    background-color: $orange-100;
    padding: 5px 10px;
    margin-right: 10px;
  }

  .airtime {
    margin-bottom: 15px;
  }

  .meta {
    margin-bottom: 15px;
  }
}
</style>