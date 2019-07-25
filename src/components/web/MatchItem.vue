<template>
  <div class="item">
    <div class="status">
      <p class="slot body-sm" :class="{ 'force-opacity': showLabels }">8:30 PM</p>
      <div class="league body-sm" :class="{ 'force-opacity': showLabels }">Ecuadorian Serie A Soccer</div>
    </div>

    <div class="matchup">
      <div class="team1">
        <h3 class="headline-sm" :class="{ 'force-opacity': showLabels }">Orlando City SC</h3>
        <div class="logo"></div>
      </div>
      <div class="vs headline-xs" :class="{ 'force-opacity': showLabels }">vs</div>
      <div class="team2">
        <div class="logo"></div>
        <h3 class="headline-sm" :class="{ 'force-opacity': showLabels }">LA Galaxy</h3>
      </div>
    </div>

    <div class="network">
      <div class="logo"></div>
    </div>

    <div class="action">
      <a class="button button--cta headline-sm" :class="{ 'force-opacity': showLabels }" href="/" v-if="cta === 'Watch Live'">{{ cta }}</a>
      <a class="button button--record headline-sm" :class="{ 'force-opacity': showLabels }" href="/" v-else>{{ cta }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'match-item',

  props: {
    cta: {
      default: 'Record',
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

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  color: $grey-cool-20;
  background: $color-body;
  border-bottom: 1px solid $color-border-light;
}

.status {
  max-width: 150px;
  .slot {
    font-weight: 700;
  }

  .league {
  }
}

.network {
  .logo {
    width: 100px;
    height: 45px;
    background: $grey-cool-140;
  }
}

.matchup {
  display: flex;
  align-items: center;

  .team1,
  .team2 {
    display: flex;
    align-items: center;
  }

  h3 {
    font-weight: 700;
  }

  .logo {
    margin: 0 15px;
    width: 60px;
    height: 60px;
    background: $grey-cool-140;
  }

  .vs {
    font-weight: 700;
  }
}

.action {
  width: 140px;

  .button {
    display: block;
    width: 100%;
    padding: 10px 20px;
    border-radius: 2px;
  }
}
</style>