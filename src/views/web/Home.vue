<template>
  <div class="home">
    <SiteHeader />

    <div class="content">
      <Carousel section-title="Live TV" :showNetworkBar="true" />

      <Carousel section-title="Recommended Live TV" />
      
      <CarouselFeatured section-title="Recommended Shows" />

      <CarouselMovie section-title="Recommended Movies" />

      <CarouselLeague section-title="Top Leagues & Tournaments" />

      <Banner section-title="Continue Watching" />
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/web/SiteHeader';
import SiteFooter from '@/components/web/SiteFooter';
import Banner from '@/components/web/Banner';
import Carousel from '@/components/web/Carousel';
import CarouselFeatured from '@/components/web/CarouselFeatured';
import CarouselMovie from '@/components/web/CarouselMovie';
import CarouselLeague from '@/components/web/CarouselLeague';

export default {
  name: 'web',
  components: {
    SiteHeader,
    SiteFooter,
    Banner,
    Carousel,
    CarouselFeatured,
    CarouselMovie,
    CarouselLeague
  },
  mounted () {
    this.$parent.initFonts()
  }
}
</script>

<style lang="scss">
@import '../../styles/app';

</style>

