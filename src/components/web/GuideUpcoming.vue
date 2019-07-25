<template>
  <div class="guide-upcoming">
    <div class="table-row">
      <div class="upcoming">
        <h2 class="headline-md" :class="{ 'force-opacity': showLabels }">Tonight</h2>
        <p class="headline-md" :class="{ 'force-opacity': showLabels }">JUN 17</p>
        <div class="timeline">
          <div class="slot body-sm" :class="{ 'force-opacity': showLabels }">10:00AM</div>
          <div class="slot body-sm" :class="{ 'force-opacity': showLabels }">10:30AM</div>
          <div class="slot body-sm" :class="{ 'force-opacity': showLabels }">11:00AM</div>
          <div class="slot body-sm" :class="{ 'force-opacity': showLabels }">11:30AM</div>
        </div>
      </div>
    </div>

    <div class="table-row" v-for="n in 10" :key="n">
      <div class="program-info table-right">
        <h3 class="headline-sm" :class="{ 'force-opacity': showLabels }">Program Title</h3>
        <div class="meta body-sm" :class="{ 'force-opacity': showLabels }">S46, EP200</div>
        <div class="tag body-xxs" :class="{ 'force-opacity': showLabels }">
          New
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'guide-upcoming',

  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.table-row {
  display: flex;

  &:nth-child(odd) {
    background-color: rgba($grey-cool-40, .5);
  }

  &:nth-child(even) {
    background-color: rgba($grey-cool-40, .3);
  }
}

.guide-upcoming {
  width: 100%;
}

.upcoming {
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 70px;
  padding: 10px;
  background-color: $grey-cool-40;

  h2 {
    font-weight: 900;
    text-transform: uppercase;
  }

  p {
    color: $grey-cool-140;
  }
}

.program-info {
  position: relative;
  width: 100%;
  min-height: 90px;
  padding: 20px;
  background-color: $grey-cool-20;
  color: $grey-cool-180;
  border-bottom: 1px solid $grey-cool-40;

  h3 {
    font-weight: 700;
    margin-bottom: 5px;
  }

  .meta {
    color: $grey-cool-140;
    font-weight: 600;
  }

  .tag {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0 4px;
    border: 1px solid $grey-cool-140;
    color: $grey-cool-140;
    border-radius: 2px;
    text-transform: uppercase;
    font-weight: 900;
  }
}

.timeline {
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  width: 100%;

  .slot {
    position: relative;
    padding: 5px 10px;

    &:after {
      content: '';
      position: absolute;
      width: 1px;
      height: 14px;
      left: 0;
      bottom: 0;
      background-color: $grey-cool-80;
    }

    &:first-child:after {
      background-color: transparent;
    }

    &:nth-child(even) {
      opacity: .5;
    }
  }
}

</style>