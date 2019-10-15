<template>
  <div class="mobile sports">
    <!-- <img class="trace" src="@/assets/mobile/home1.png" alt=""> -->

    <NavigationBar page-title="Sports" />

    <div class="content">
      <!-- <Carousel section-title="Featured" :showNetworkBar="true" /> -->
      <Carousel section-title="Featured" />
      <Carousel section-title="Live & Up Next" />
      <Carousel section-title="Recently Aired" />
      <Carousel section-title="Sports Talk" :hideMeta="true" />

      <FilterList :filterTitle="filterTitle" />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/mobile/NavigationBar';
import Carousel from '@/components/mobile/Carousel';
import FilterList from '@/components/mobile/FilterList'

export default {
  name: 'mobile-sports',

  props: ['platform'],

  data: function () {
    return {
      filterTitle: 'Sports'
    }
  },

  components: {
    NavigationBar,
    Carousel,
    FilterList
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

