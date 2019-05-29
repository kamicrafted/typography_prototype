<template>
  <div class="home">
    <SiteHeader />
    <div class="page-header">
      <h1>My Videos</h1>
      <div class="faq">
        My Videos FAQs
      </div>
    </div>

    <div class="content">
      <div class="list">
        <div class="utility">
          <div class="filters">
            <div class="filters__option">All</div>
            <div class="filters__option">Sports</div>
            <div class="filters__option">Shows</div>
            <div class="filters__option">Movies</div>
          </div>

          <div class="search">
            Find by title, team, league or channel
          </div>

          <div class="dropdown">
            All Videos
          </div>
        </div>

        <div class="items">
          <DVRItem v-for="n in 10" :key="n" />
        </div>
      </div>

      <div class="dvr">
        <div class="space">
          <h3>Cloud DVR Space</h3>
          <div class="recorded">
            <h4>15.4 of 500</h4>
            <p>Hours recorded (3%)</p>

            <div class="meter">
            </div>
          </div>
        </div>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/web/SiteHeader';
import SiteFooter from '@/components/web/SiteFooter';
import DVRItem from '@/components/web/DVRItem';

export default {
  name: 'my-videos',
  components: {
    SiteHeader,
    SiteFooter,
    DVRItem
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 40px 0 40px;
}

.page-header {
  margin-top: 60px;
  padding: 15px 40px;
  background-color: $grey-cool-40;

  h1 {
    font-size: $font-page-title;
    font-weight: 700;
  }

  .faq {
    font-weight: 700;
  }
}

.list {
  width: 80%;
}

.items {
  margin-top: 20px;

  .item:nth-child(even) {
    background-color: rgba($grey-cool-40, .5);
  }

  .item:nth-child(odd) {
    background-color: $grey-cool-40;
  }
}

.dvr {
  position: sticky;
  top: 60px;
  width: 300px;
  margin: 60px 0 0 40px;

  .space {
    background-color: $grey-cool-20;
  }

  .recorded {
    padding: 20px;
    border-radius: 0 0 6px 6px;

    h4 {
      font-size: $font-dvr-space-recorded;
      font-weight: 700;
    }

    p {
      font-size: $font-dvr-space-percent;
      text-transform: uppercase;
    }
  }

  h3 {
    padding:6px 20px;
    background-color: $grey-cool-40;
    text-transform: uppercase;
    font-size: $font-dvr-space-header;
    font-weight: 700;
    border-radius: 6px 6px 0 0;
  }

  .meter {
    position: relative;
    margin-top: 20px;
    height: 10px;
    background-color: $grey-cool-60;
    border-radius: 10px;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 10%;
      height: 100%;
      background-color: $grey-cool-160;
      border-radius: 10px;
    }
  }
}

.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;

  &__option {
    margin-right: 20px;
    font-weight: 700;
    font-size: $font-filters;
    text-transform: uppercase;
  }
}

.utility {
  display: flex;
  align-items: center;
  height: 40px;

  .dropdown {
    margin-left: 20px;
  }

  .search {
    padding: 7px 15px;
    background-color: $grey-cool-40;
    font-size: $font-field-placeholder;
    border-radius: 2px;
  }
}
</style>

