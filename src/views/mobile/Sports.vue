<template>
  <div class="mobile sports">
    <img class="trace" src="@/assets/mobile/home1.png" alt="">

    <SiteHeader page-title="SPORTS" />

    <div class="content">
      <!-- <Carousel section-title="Featured" :showNetworkBar="true" /> -->
      <Carousel section-title="Featured" />
      <Carousel section-title="Live & Up Next" />
      <Carousel section-title="Recently Aired" />
      <Carousel section-title="Sports Talk" :hideMeta="true" />

      <FilterList />
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/mobile/SiteHeader';
import TabMenu from '@/components/mobile/TabMenu';
import Carousel from '@/components/mobile/Carousel';
import CarouselMovie from '@/components/mobile/CarouselMovie';
import CarouselFeatured from '@/components/mobile/CarouselFeatured';
import CarouselLeague from '@/components/mobile/CarouselLeague';
import FilterList from '@/components/mobile/FilterList'

export default {
  name: 'mobile-sports',

  props: ['platform'],

  components: {
    SiteHeader,
    TabMenu,
    Carousel,
    CarouselMovie,
    CarouselFeatured,
    CarouselLeague,
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

