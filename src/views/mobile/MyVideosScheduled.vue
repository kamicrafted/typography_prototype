<template>
  <div class="mobile myvideos">
    <!-- <img class="trace" src="@/assets/mobile/myvideos-recorded.png" alt=""> -->

    <NavigationBar page-title="My Fubo" />

    <SplitViewController :options="options.label" :selection="1"  />

    <div class="capacity">
      <span class="recorded-hours headline-lg" :class="{ 'force-opacity': showLabels }">
        52.4 of 500.0
      </span>
      <span class="recorded-label headline-xs" :class="{ 'force-opacity': showLabels }">
        Hours Recorded (3%)
      </span>

      <div class="storage-bar"></div>
    </div>

    <div class="dvr-list">
      <DVRItem :recordings="recordings" :index="index" v-for="(n, index) of 10" :key="n" />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/mobile/NavigationBar'
import SplitViewController from '@/components/mobile/SplitViewController'
import DVRItem from '@/components/mobile/DVRItem'

export default {
  name: 'my-videos',

  props: ['platform'],

  data: function () {
    return {
      options: {
        label: [
          'Recorded',
          'Scheduled',
          'Continue'
        ]
      },

      recordings: [
        {
          title: 'Huang\'s World',
          episodeCount: 2,
          meta: '',
          duration: '3h 40min'
        },
        {
          title: 'How I Met Your Mother',
          episodeCount: 4,
          meta: 'S3 EP14 • The Bracket',
          duration: ''
        },    
        {
          title: '44 Cats',
          episodeCount: 1,
          meta: '',
          duration: ''
        }
      ]
    }
  },

  components: {
    NavigationBar,
    SplitViewController,
    DVRItem
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

html, body {
  background-color: $grey-cool-40 !important;
}

.myvideos {
  min-height: 100%;
}

.capacity {
  margin-top: -5px;
  padding: 10px 15px;
  // height: 100px;
  // background-color: rgba(red, .3);

  .recorded-hours {
    font-weight: 700;
  }

  .recorded-label {
    font-weight: 700;
    text-transform: uppercase;
  }

  .storage-bar {
    position: relative;
    margin-top: 5px;
    height: 10px;
    background: $grey-cool-60;
    border-radius: 6px;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15%;
      height: 100%;
      background: $grey-cool-160;
      border-radius: 6px;
    }
  }
}

.dvr-list {
  margin-top: 20px;

  .item {
    &:nth-child(odd) {
      background-color: rgba($grey-cool-40, .5);
    }

    &:nth-child(even) {
      background-color: rgba($grey-cool-40, .3);
    }
  }
}

</style>

