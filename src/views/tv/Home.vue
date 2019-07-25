<template>
  <div class="tv home">
    <!-- <img class="trace" src="@/assets/tv/home.png" alt=""> -->

    <div class="content">
      <div class="main">
        <MenuBar page-title="Home" />
        <LivePreview /> 
      </div>
      
      <div class="content-rows">
        <Carousel section-title="Live Channels" section-title-secondary="" :showNetworkBar="true" />
        <Carousel section-title="Recommended Live TV (beta)" section-title-secondary="" />
        <CarouselFeatured section-title="Featured" section-title-secondary="" />
        <Carousel section-title="Popular on Showtime" section-title-secondary="" :showDescription="false" />
        <Carousel section-title="Sports Live & Up Next" section-title-secondary="" />
        <CarouselShows section-title="Popular Shows" section-title-secondary="" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/tv/MenuBar';
import Carousel from '@/components/tv/Carousel';
import CarouselFeatured from '@/components/tv/CarouselFeatured';
import CarouselShows from '@/components/tv/CarouselShows';
import LivePreview from '@/components/tv/LivePreview';

export default {
  name: 'tv-home',

  props: ['platform'],

  components: {
    MenuBar,
    Carousel,
    CarouselFeatured,
    CarouselShows,
    LivePreview
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

<style lang="scss">
@import '../../styles/app';

.main {
  position: relative;
}

.content-rows {
  margin-top: -250px;
}

</style>

