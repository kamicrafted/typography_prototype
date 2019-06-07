<template>
  <div class="item">
    <div class="info">
      <div class="thumbnail"></div>
      <div class="program">
        <div class="status body-xs" :class="{ 'force-opacity': showLabels }">Recorded</div>
        <h2 class="headline-sm" :class="{ 'force-opacity': showLabels }">Program Title</h2>
        <div class="subhead body-xs" :class="{ 'force-opacity': showLabels }">
          S3, EP14 "The Bracket"
        </div>
      </div>
    </div>

    <div class="meta">
      <div class="detail body-xs" :class="{ 'force-opacity': showLabels }">
        Apr 4, 2019 2:00 PM
      </div>

      <div class="actions body-xs" :class="{ 'force-opacity': showLabels }">
        Delete
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
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

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
    
    .detail {
      position: absolute;
      top: 0;
      right: 0;
      padding: 20px 20px 0 0;
      text-transform: uppercase;
    }

    .actions {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 20px 20px 0;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  .program {
    position: relative;
    padding: 0 20px;

    h2 {
      font-weight: 700;
      margin-bottom: 5px;
    }

    .status {
      margin-bottom: 5px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}

.thumbnail {
  width: 200px;
  height: 113px;
  background-color: $color-temp;
}
</style>