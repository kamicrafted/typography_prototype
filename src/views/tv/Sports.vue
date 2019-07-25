<template>
  <div class="tv home">
    <!-- <img class="trace" src="@/assets/tv/home.png" alt=""> -->

    <div class="content">
      <div class="main">
        <MenuBar page-title="Sports" />
        <LivePreview /> 
      </div>
      
      <div class="content-rows">
        <Carousel section-title="Live Channels" section-title-secondary="" :showNetworkBar="true" />
        <CarouselFeatured section-title="Featured" section-title-secondary="" />
        <Carousel section-title="Recommended Live TV (beta)" section-title-secondary="" :showNetworkBar="false" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/tv/MenuBar';
import Carousel from '@/components/tv/Carousel';
import CarouselFeatured from '@/components/tv/CarouselFeatured';
import LivePreview from '@/components/tv/LivePreview';

export default {
  name: 'tv-home',

  props: ['platform'],

  components: {
    MenuBar,
    Carousel,
    CarouselFeatured,
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

