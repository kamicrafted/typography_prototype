<template>
  <div class="table">
    <div class="table__head">
      <div class="dates">
        <div class="prev headline-sm" :class="{ 'force-opacity': showLabels }">
          Thu, May 23
        </div>

        <div class="current headline-sm" :class="{ 'force-opacity': showLabels }">
          Today, May 24
        </div>

        <div class="next headline-sm" :class="{ 'force-opacity': showLabels }">
          Sat, May 25
        </div>
      </div>

      <div class="divider"></div>

      <div class="calendar">
        <div class="icon"></div>
      </div>
    </div>

    <div class="list">
      <MatchItem cta="Watch Live" />
      <MatchItem cta="Watch Live" />
      <MatchItem cta="Watch Live" />
      <MatchItem cta="Watch Live" />
      <MatchItem cta="Watch Live" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
      <MatchItem cta="Record" />
    </div>
  </div>
</template>

<script>
import MatchItem from '@/components/web/MatchItem'

export default {
  name: 'sports-table',

  components: {
    MatchItem
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


.table {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: $grey-cool-20;

    .dates {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 20px;
      font-weight: bold;
      text-transform: uppercase;

      .prev,
      .next {
        flex: 0 1 auto;
        width: 100px;
        text-align: center;
      }

      .current {
        flex: 1 0 auto;
        text-align: center;
      }
    }

    .divider {
      width: 1px;
      height: 100%;
      background: $color-bg;
    }

    .calendar {
      width: 60px;

      .icon {
        margin: 0 auto;
        width: 30px;
        height: 30px;
        background-color: $color-temp;
      }
    }
  }

  .list {
    .item {

    }
  }
}
</style>