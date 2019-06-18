<template>
  <div class="item">
    <div class="info">
      <div class="thumbnail"></div>
      <div class="program">
        <div v-if="recordings[index].episodeCount > 0" class="ep-count body-sm" :class="{ 'force-opacity': showLabels }"><div class="icon"></div> <span>{{ recordings[index].episodeCount}} Episodes</span></div>

        <h2 class="headline-md" :class="{ 'force-opacity': showLabels }">{{ recordings[index].title }}</h2>
        <div class="subhead body-md" :class="{ 'force-opacity': showLabels }">
          {{ recordings[index].meta }}
        </div>
      </div>
    </div>

    <div class="meta">
      <div class="duration body-md" :class="{ 'force-opacity': showLabels }">
        {{ recordings[index].duration }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dvr-item',

  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  },

  props: ['recordings', 'index']
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $mobile-gutter;

  .info {
    display: flex;
    align-items: flex-start;
    justify-content: space;
  }

  .meta {
    position: absolute;
    right: 0;
    width: 25%;
    height: 100%;
    text-align: right;

    .duration {
      position: absolute;
      bottom: 10px;
      right: $mobile-gutter;
      opacity: .8;
    }
  }

  .program {
    position: relative;
    padding: 5px 20px;

    h2 {
      font-weight: 700;
      margin-bottom: 10px;
    }

    .ep-count {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      opacity: .8;
      margin-bottom: 10px;

      span {
        position: relative;
        top: 2px;
      }
    }
  }
}

.thumbnail {
  flex: 1 0 auto;
  width: 115px;
  height: 115px;
  background-color: $color-temp;
  border-radius: 4px;
}

.icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  background-color: $nu-blue-100;
}
</style>