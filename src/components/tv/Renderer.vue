<template>
  <div class="content-item" :class="{ 'default': !showNetworkBar }">
    <div class="network" v-if="showNetworkBar">
      <div class="logo"></div>
      <div class="favorite"></div>
    </div>

    <div class="thumbnail" :class="{ 'rounded': !showNetworkBar }"></div>

    <div class="meta" v-if="!showNetworkBar">
      <div class="primary">
        <div v-if="showDescription" class="airing">
          <span class="date body-xs" :class="{ 'force-opacity': showLabels }">Tonight</span>
          <span class="time body-xs" :class="{ 'force-opacity': showLabels }">8:30PM</span>
        </div>
        <h2 class="program-title headline-xs" :class="{ 'force-opacity': showLabels }">{{ title }}</h2>
      </div>
      <p v-if="showDescription" class="secondary body-sm" :class="{ 'force-opacity': showLabels }">
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
    },

    showDescription: {
      default: true,
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
  width: 300px;
  // min-height: 300px;
  padding-bottom: 30px;
  margin-right: 20px;

  // &:first-child {
  //   margin: 2px 25px 0 15px;
  //   transform: scale(1.1);

  //   .network {
  //     background-color: $grey-cool-180;
  //   }
  // }

  &.default {
    .meta {
      height: auto;
      padding: 15px;
      // background: $grey-cool-20;
      border-radius: 0 0 6px 6px;
    }

    .thumbnail {
      border-radius: 6px 6px 0 0;
    }
  }

  .network {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80px;
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
    height: 170px;
    background: grey;
    border-radius: 0 0 6px 6px;
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
  margin-bottom: 5px;
}

.secondary {
  margin-top: auto;
}
</style>