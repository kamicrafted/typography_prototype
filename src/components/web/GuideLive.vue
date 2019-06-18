<template>
  <div class="guide-live">
    <div class="table-row">
      <div class="channels table-left">
        <div class="label headline-sm" :class="{ 'force-opacity': showLabels }">Channels</div>
      </div>
      <div class="now table-right">
        <h2 class="headline-md" :class="{ 'force-opacity': showLabels }">Live</h2>
        <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:50PM</p>
      </div>
    </div>

    <div class="table-row" v-for="n in 10" :key="n">
      <div class="channel-info table-left">
        <div class="logo"></div>
      </div>
      <div class="program-info table-right">
        <div class="thumb"></div>
        <div class="detail">
          <h3 class="headline-md" :class="{ 'force-opacity': showLabels }">Program Title</h3>
          <div class="meta body-xs" :class="{ 'force-opacity': showLabels }">S46, EP200</div>
          <div class="tag body-xxs" :class="{ 'force-opacity': showLabels }">New</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'guide-live',

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

    .thumb {
      background-color: grey;
    }
  }

  &:nth-child(even) {
    background-color: rgba($grey-cool-40, .3);

    .thumb {
      background-color: rgba(grey, .5);
    }
  }
}

.guide-live {
  flex: 1 0 auto;
  width: 40%;
}

.now {
  width: calc(100% - 160px);
  min-height: 70px;
  padding: 10px;
  background-color: $orange-100;

  h2 {
    font-weight: 900;
    text-transform: uppercase;
  }
}

.channels {
  display: flex;
  width: 160px;
  padding: 10px;
  background-color: $grey-cool-40;
  
  > .label {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-transform: uppercase;
    color: $grey-cool-140;
  }
}

.channel-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 160px;
  width: 160px;
  min-height: 90px;
  border-bottom: 1px solid transparent;

  .logo {
    width: 80px;
    height: 50px;
    background-color: $color-temp;
  }
}

.program-info {
  display: flex;
  position: relative;
  width: calc(100% - 160px);
  background-color: $grey-cool-180;
  color: $grey-cool-20;

  h3 {
    margin-bottom: 5px;
    font-weight: 700;
  }

  .detail {
    flex: 1 0 auto;
    padding: 20px;
    border-bottom: 1px solid $grey-cool-160;
  }

  .meta {
    color: $grey-cool-100;
    font-weight: 600;
  }

  .tag {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0 4px;
    border: 1px solid $grey-cool-140;
    color: $grey-cool-80;
    border-radius: 2px;
    text-transform: uppercase;
    font-weight: 900;
  }

  .thumb {
    width: 160px;
    height: 90px;
    background-color: grey;
  }
}
</style>