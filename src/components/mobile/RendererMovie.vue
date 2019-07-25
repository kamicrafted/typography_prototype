<template>
  <div class="content-item">
    <div class="thumbnail">

    </div>
    <div class="meta">
      <div class="primary">
        <!-- <div class="airing">
          <span class="date body-xs" :class="{ 'force-opacity': showLabels }">Tonight</span>
          <span class="time body-xs" :class="{ 'force-opacity': showLabels }">8:30PM</span>
        </div> -->
        <!-- <h2 class="program-title headline-sm" :class="{ 'force-opacity': showLabels }">{{ title }}</h2> -->
      </div>
      <p class="secondary body-sm" :class="{ 'force-opacity': showLabels }">
        2007 | PG
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'renderer-movie',

    props: {
      title: {
        default: 'Program Title',
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

.content-item {
  position: relative;
  flex: 0 0 auto;
  width: 120px;
  margin-right: 20px;
  padding-bottom: 20px;

  .thumbnail {
    width: 100%;
    height: 180px;
    background: grey;
    border-radius: 4px;
  }
}

.meta {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // height: 100px;
  padding: 10px 0 0 0;
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
  // margin-top: auto;
}
</style>