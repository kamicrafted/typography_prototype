<template>
  <div class="mobile home">
    <img class="trace" src="@/assets/mobile/home1.png" alt="">

    <NavigationBar page-title="Home" />

    <div class="content">
      <Carousel section-title="Live TV" :showNetworkBar="true" />
      <Carousel section-title="Featured" />
      <Carousel section-title="Sports Live & Up Next" />
      <CarouselMovie section-title="Superhero Movies" />
      <CarouselFeatured section-title="Popular Shows" />
      <CarouselMovie section-title="Popular Movies" />
      <CarouselLeague section-title="Top Leagues & Tournaments" />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/mobile/NavigationBar';
import Carousel from '@/components/mobile/Carousel';
import CarouselMovie from '@/components/mobile/CarouselMovie';
import CarouselFeatured from '@/components/mobile/CarouselFeatured';
import CarouselLeague from '@/components/mobile/CarouselLeague';

export default {
  name: 'mobile-home',

  props: ['platform'],

  components: {
    NavigationBar,
    Carousel,
    CarouselMovie,
    CarouselFeatured,
    CarouselLeague,
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
</style>

