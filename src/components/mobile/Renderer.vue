<template>
  <div class="content-item">
    <div class="network" v-if="showNetworkBar">
      <div class="logo"></div>
      <div class="favorite"></div>
    </div>

    <div class="thumbnail" :class="{ 'thumbnail--rounded': !showNetworkBar }">
    </div>

    <div v-if="!hideMeta" class="meta">
      <div class="primary">
        <div class="airing">
          <span class="date body-sm" :class="{ 'force-opacity': showLabels }">Tonight</span>
          <span class="time body-sm" :class="{ 'force-opacity': showLabels }">8:30PM</span>
        </div>
        <h2 class="program-title headline-sm" :class="{ 'force-opacity': showLabels }">{{ title }}</h2>
      </div>
      <p class="secondary body-sm" :class="{ 'force-opacity': showLabels }">
        S2, EP12 "A Tummy Ache...
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
    },

    hideMeta: {
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
  width: 190px;
  margin-right: 12px;

  .network {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 48px;
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
    top: 15px;
    left: 10px;
    width: 20px;
    height: 20px;
    background-color: $color-temp;
  }

  .thumbnail {
    width: 100%;
    height: 112px;
    background: grey;
    border-radius: 0 0 4px 4px;

    &--rounded {
      border-radius: 4px;
    }
  }
}

.meta {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 88px;
  padding: 10px 0;
}

.airing {
  margin-bottom: 5px;
  text-transform: uppercase;

  .date {
    margin-right: 10px;
    font-weight: 700;
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