<template>
  <div class="mobile sports">
    <img class="trace" src="@/assets/mobile/home1.png" alt="">

    <NavigationBar page-title="Entertainment" />

    <SplitViewController :options="options.label" :selection="1"  />

    <div class="content">
      <!-- <Carousel section-title="Featured" :showNetworkBar="true" /> -->
      <CarouselMovie section-title="Popular" />
      <CarouselMovie section-title="Superheroes" />
      <CarouselMovie section-title="Action" />
      <CarouselMovie section-title="Comedy" />
      <CarouselMovie section-title="Horror" />
      <CarouselMovie section-title="Romance" />
      <CarouselMovie section-title="Science Fiction" />
      <CarouselMovie section-title="Upcoming" />

      <FilterList :filterTitle="filterTitle" />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/mobile/NavigationBar';
import CarouselMovie from '@/components/mobile/CarouselMovie';
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
    CarouselMovie,
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

