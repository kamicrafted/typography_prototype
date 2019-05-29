<template>
  <div class="home">
    <SiteHeader />
    <div class="subnav">
      <router-link class="headline-xs" to="/">ALL</router-link>
      <router-link class="headline-xs" to="/">SOCCER</router-link>
      <router-link class="headline-xs" to="/">BASKETBALL</router-link>
      <router-link class="headline-xs" to="/">HOCKEY</router-link>
      <router-link class="headline-xs" to="/">BASEBALL</router-link>
      <router-link class="headline-xs" to="/">FOOTBALL</router-link>
      <router-link class="headline-xs" to="/">TENNIS</router-link>
      <router-link class="headline-xs" to="/">RACING</router-link>
      <router-link class="headline-xs" to="/">CYCLING</router-link>
      <router-link class="headline-xs" to="/">GOLF</router-link>
      <router-link class="headline-xs" to="/">MMA</router-link>
      <router-link class="headline-xs" to="/">OTHER</router-link>
    </div>

    <Hero title="See Upcoming Matches in 4K" subhead="4K presented by the all-new Lexus RC F" />

    <div class="content">
      <div class="matches">
        <div class="header">
          <div class="dropdown">
            <span class="body-md">All Sports</span>
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
import Hero from '@/components/web/Hero';
import SportsTable from '@/components/web/SportsTable';

export default {
  name: 'web',
  components: {
    SiteHeader,
    SiteFooter,
    Hero,
    SportsTable
  },
  methods: {
    
  },
  mounted () {
    // alert(this.$store.state.bodyMD)
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.content {
  padding-top: 0;
}

.subnav {
  margin-top: 60px;
  padding: 10px 40px;
  background-color: $grey-cool-20;

  a {
    display: inline-block;
    color: $color-body;
    text-decoration: none;
    font-weight: 700;
    margin-right: 20px;
  }
}

.matches {
  margin-top: 100px;
  padding: 0 40px;
}

.header {
  margin-bottom: 20px;
}

</style>

