<template>
  <div class="web sports">
    <SiteHeader />
    
    <SubNav :subnav="subnav" />

    <Hero title="See Upcoming Matches in 4K" subhead="4K presented by the all-new Lexus RC F" />

    <div class="content">
      <div class="matches">
        <div class="header">
          <div class="dropdown">
            <span class="body-md" :class="{ 'force-opacity': showLabels }">All Sports</span>
          </div>
        </div>

        <SportsTable />
      </div>
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/web/SiteHeader';
import SiteFooter from '@/components/web/SiteFooter';
import SubNav from '@/components/web/SubNav';
import Hero from '@/components/web/Hero';
import SportsTable from '@/components/web/SportsTable';

export default {
  name: 'web-sports',

  props: ['platform'],

  data: function () {
    return {
      subnav: ['All', 'Soccer', 'Basketball', 'Hockey', 'Baseball', 'Football', 'Tennis', 'Racing', 'Cycling', 'Golf', 'MMA', 'Other']
    }
  },

  components: {
    SiteHeader,
    SiteFooter,
    SubNav,
    Hero,
    SportsTable,
  },

  methods: {
    
  },

  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  },

  mounted () {
    this.$store.commit('setPlatform', this.platform)
    this.$parent.initFonts()
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.content {
  padding-top: 0;
}

.matches {
  margin-top: 100px;
  padding: 0 40px;
}

.header {
  margin-bottom: 20px;
}

</style>

