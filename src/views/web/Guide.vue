<template>
  <div class="web guide">
    <SiteHeader />
    <SubNav :subnav="subnav" />

    <div class="content">
      <div class="utility">
        <div class="input body-xs" :class="{ 'force-opacity': showLabels }">
          <input class="body-xs" type="text" value="Find your favorite channel or network">
        </div>

        <div class="jump-nav">
          <span class="jump-label body-xs">Jump to</span>
          <span class="jump-button body-xs">Up Next</span>
          <span class="jump-label body-xs">Tomorrow Night</span>
        </div>
      </div>

      <div class="programming-table">
        <GuideLive />
        <div class="separator"></div>
        <GuideUpcoming />
      </div>
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/web/SiteHeader';
import SiteFooter from '@/components/web/SiteFooter';
import SubNav from '@/components/web/SubNav';
import GuideLive from '@/components/web/GuideLive';
import GuideUpcoming from '@/components/web/GuideUpcoming';

export default {
  name: 'web-guide',

  data: function () {
    return {
      subnav: ['Live', 'Networks']
    }
  },

  props: ['platform'],

  components: {
    SiteHeader,
    SiteFooter,
    SubNav,
    GuideLive,
    GuideUpcoming
  },

  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  },

  mounted () {
    this.$store.commit('setPlatform', this.platform)
    this.$parent.initFonts()
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.content {
  max-width: 100% !important;
  padding: 20px 0 0 !important;
}

.utility {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .input {
    min-width: 300px;
  }

  .jump-nav {
    text-transform: uppercase;
    font-weight: 700;

    .jump-label {
      opacity: .7;

      &:first-child {
        font-weight: 500;
      }
    }

    .jump-button {
      background-color: $grey-cool-20;
      border-radius: 4px;
    }

    > span {
      padding: 10px 20px;
    }
  }
}

.programming-table {
  display: flex;
  margin-top: 20px;

  .separator {
    background-color: $grey-cool-20;
    width: 30px;
    border-right: 1px solid $grey-cool-40;
  }
}

</style>

