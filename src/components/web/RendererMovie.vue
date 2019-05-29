<template>
  <div class="content-item">
    <div class="thumbnail">

    </div>
    <div class="meta">
      <div class="primary">
        <div class="airing">
          <span class="date body-xs">Tonight</span>
          <span class="time body-xs">8:30PM</span>
        </div>
        <h2 class="program-title headline-sm">{{ title }}</h2>
      </div>
      <p class="secondary body-xs">
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
    }
  }
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.content-item {
  position: relative;
  flex: 0 0 auto;
  width: 220px;
  margin-right: 20px;
  padding-bottom: 20px;

  .thumbnail {
    width: 100%;
    height: 293px;
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