<template>
  <div class="home">
    <SiteHeader />

    <Hero title="MEN IN BLACK" subhead="Secret agents monitor extraterrestrial activity on Earth." /> 
    <div class="content">
      <CarouselMovie section-title="Live Now" />
      <CarouselMovie section-title="Popular" />
      <CarouselMovie section-title="Upcoming" />

      <div class="browse">
        <div class="section-header">
          <h2 class="headline-md">Movies on Demand</h2>
        </div>

        <div class="filter-bar">
          <div class="icon"></div>
          <div class="option headline-sm" v-for="n in 20" :key="n">Option</div>
        </div>

        <Grid type="movie" />
      </div>
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/web/SiteHeader';
import SiteFooter from '@/components/web/SiteFooter';
import Hero from '@/components/web/Hero';
import CarouselMovie from '@/components/web/CarouselMovie';
import Grid from '@/components/web/Grid';

export default {
  name: 'web',
  components: {
    SiteHeader,
    SiteFooter,
    Hero,
    CarouselMovie,
    Grid
  },
  mounted () {
    this.$parent.setFonts()
  }
}
</script>

<style lang="scss">
@import '../../styles/app';

</style>

