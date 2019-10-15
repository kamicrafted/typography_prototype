<template>
  <div class="mobile guide">
    <!-- <img class="trace" src="@/assets/mobile/guide.png" alt=""> -->

    <NavigationBar page-title="Guide" />

    <SplitViewController :options="options.label" :selection="0"  />

    <div class="content">
      <GuideContent />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/mobile/NavigationBar';
import SplitViewController from '@/components/mobile/SplitViewController'
import GuideContent from '@/components/mobile/GuideContent';

export default {
  name: 'mobile-home',

  props: ['platform'],

  data: function () {
    return {
      options: {
        label: [
          'Guide',
          'Networks'
        ]
      }
    }
  },

  components: {
    NavigationBar,
    SplitViewController,
    GuideContent
  },

  mounted () {
    this.$store.commit('setPlatform', this.platform)
    this.$parent.initFonts()
  },

}
</script>

<style lang="scss">
@import '../../styles/app';

html, body {
  background-color: $grey-cool-40 !important;
}

.guide {
  min-height: 100%;
}

.guide-table {
  width: 100%;

  thead {
    td {
      width: calc(100% / 3);
      padding: 5px 8px;
      border-right: 1px solid $grey-cool-80;

      &:first-child {
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
      }

      &:last-child {
        border-right: none;
      }

      .meridiem {
        position: relative;
        top: -6px;
        margin-left: 2px;
      }
    }
  }

  tbody {
    tr {
      &:nth-child(odd) {
        background-color: rgba($grey-cool-40, .5);
      }

      &:nth-child(even) {
        background-color: rgba($grey-cool-40, .3);
      }
    }

    td {
      width: calc(100% / 3);
    }

    .info {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 8px;

      h2 {
        font-weight: 700;
        line-height: 1.2;
      }
    }

    .program {
      height: 80px;
      border-right: 1px solid $grey-cool-80;
    }
  }

  .channel {
    position: relative;
    height: 80px;
    background-color: rgba($grey-cool-40, .5);

    .logo {
      position: absolute;
      width: 80px;
      height: 40px;
      left: 50%;
      top: 50%;
      background-color: $color-temp;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}
</style>

