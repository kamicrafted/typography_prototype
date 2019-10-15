<template>
  <div class="mobile sports">
    <!-- <img class="trace" src="@/assets/mobile/ent-shows1.png" alt=""> -->

    <NavigationBar page-title="Entertainment" />

    <SplitViewController :options="options.label" :selection="0"  />

    <div class="content">
      <!-- <Carousel section-title="Featured" :showNetworkBar="true" /> -->
      <Carousel section-title="Popular" :hideMeta="true" />
      <Carousel section-title="Popular on Showtime" :hideMeta="true" />
      <Carousel section-title="Worth Binging" :hideMeta="true" />
      <Carousel section-title="Best of the 90s" :hideMeta="true" />
      <Carousel section-title="Action" :hideMeta="true" />
      <Carousel section-title="Comedy" :hideMeta="true" />
      <Carousel section-title="Crime TV" :hideMeta="true" />
      <Carousel section-title="Docuseries" :hideMeta="true" />
      <Carousel section-title="Kids & Family" :hideMeta="true" />

      <FilterList :filterTitle="filterTitle" />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/mobile/NavigationBar';
import Carousel from '@/components/mobile/Carousel';
import FilterList from '@/components/mobile/FilterList'
import SplitViewController from '@/components/mobile/SplitViewController'

export default {
  name: 'mobile-sports',

  props: ['platform'],

  data: function () {
    return {
      filterTitle: 'Genres',
      
      options: {
        label: [
          'Shows',
          'Movies'
        ]
      }
    }
  },

  components: {
    NavigationBar,
    Carousel,
    FilterList,
    SplitViewController
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

.home {
  padding-bottom: 100px;
}
</style>

