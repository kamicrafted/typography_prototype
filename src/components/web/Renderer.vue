<template>
  <div class="content-item">
    <div class="network" v-if="showNetworkBar">
      <div class="logo"></div>
      <div class="favorite"></div>
    </div>

    <div class="thumbnail">
    </div>

    <div class="meta">
      <div class="primary">
        <div class="airing">
          <span class="date body-xs" :class="{ 'force-opacity': showLabels }">Tonight</span>
          <span class="time body-xs" :class="{ 'force-opacity': showLabels }">8:30PM</span>
        </div>
        <h2 class="program-title headline-sm" :class="{ 'force-opacity': showLabels }">{{ title }}</h2>
      </div>
      <p class="secondary body-xs" :class="{ 'force-opacity': showLabels }">
        S2, EP12 "A Tummy Ache and a Whale of a M...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'renderer',

  props: {
    title: {
      default: 'Program Title',
      type: String
    },

    showNetworkBar: {
      default: false,
      type: Boolean
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

.content-item {
  position: relative;
  flex: 0 0 auto;
  width: 288px;
  // min-height: 300px;
  padding-bottom: 30px;
  margin-right: 20px;

  .network {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 57px;
    background-color: $grey-cool-40;
    border-radius: 6px 6px 0 0;
  }

  .logo {
    width: 80px;
    height: 30px;
    background: $color-temp;
  }

  .favorite {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
    background-color: $color-temp;
  }

  .thumbnail {
    width: 100%;
    height: 160px;
    background: grey;
  }
}

.meta {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  padding: 10px;
}

.airing {
  margin-bottom: 5px;
  text-transform: uppercase;

  .date {
    margin-right: 10px;
  }

  .time {

  }
}

.program-title {
  font-weight: 700;
  line-height: 1.3;
}

.secondary {
  margin-top: auto;
}
</style>