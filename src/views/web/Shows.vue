<template>
  <div class="home">
    <SiteHeader />

    <Hero title="The Name of The Rose" subhead="Series Premiere" />
    
    <div class="content">
      <Carousel section-title="Live Now" :showNetworkBar="false" />
      <CarouselFeatured section-title="Popular" />
      <Carousel section-title="Upcoming" />

      <div class="browse">
        <div class="section-header">
          <h2 class="headline-md">Shows on Demand</h2>
        </div>

        <div class="filter-bar">
          <div class="icon"></div>
          <div class="option headline-sm" v-for="n in 20" :key="n">Option</div>
        </div>

        <Grid type="show" />
      </div>
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/web/SiteHeader';
import SiteFooter from '@/components/web/SiteFooter';
import Hero from '@/components/web/Hero';
import Carousel from '@/components/web/Carousel';
import CarouselFeatured from '@/components/web/CarouselFeatured';
import Grid from '@/components/web/Grid';

export default {
  name: 'web',
  components: {
    SiteHeader,
    SiteFooter,
    Hero,
    Carousel,
    CarouselFeatured,
    Grid
  }
}
</script>

<style lang="scss">
@import '../../styles/app';

.browse {
  margin: 0 20px;
  padding: 30px 0;
}

.section-header {
  margin-bottom: 20px;
}

.filter-bar {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: $grey-cool-40;
  overflow: hidden;

  .icon {
    flex: 0 0 auto;
    width: 30px;
    height: 30px;
    background-color: $color-temp;
  }

  > div {
    font-weight: 700;
    margin-right: 15px;
  }
}
</style>

