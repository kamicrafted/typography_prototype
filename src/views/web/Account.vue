<template>
  <div class="web account">
    <SiteHeader />

    <div class="content">
      <div class="sidebar">
        <div class="sidebar__menu">
          <div class="item headline-sm" :class="{ 'force-opacity': showLabels }">
            Profile
          </div>
          <div class="item headline-sm" :class="{ 'force-opacity': showLabels }">
            Subscription & Billing
          </div>
          <div class="item headline-sm" :class="{ 'force-opacity': showLabels }">
            Manage Add-ons
          </div>
          <div class="item headline-sm" :class="{ 'force-opacity': showLabels }">
            Help
          </div>
        </div>
      </div>
      <div class="main">
        <div class="main__section">
          <h2 class="headline-md" :class="{ 'force-opacity': showLabels }">Account Details</h2>

          <div class="plan-overview">
            <div class="left">
              <h3 class="headline-sm" :class="{ 'force-opacity': showLabels }">fubo Extra</h3>
              <p class="body-sm" :class="{ 'force-opacity': showLabels }">Your next billing cycle begins Jun 17, 2019</p>

            </div>

            <div class="right">
              <span class="body-xs" :class="{ 'force-opacity': showLabels }">View subscription details</span>
            </div>
          </div>
        </div>

        <div class="main__section">
          <h2 class="headline-md" :class="{ 'force-opacity': showLabels }">Account Information</h2>
          
          <div class="field-group">
            <h3 class="field-label headline-sm" :class="{ 'force-opacity': showLabels }">Email</h3>
            <div class="input body-md" :class="{ 'force-opacity': showLabels }">
              <input class="body-md" type="text" value="jsnow@fubo.tv" disabled>
            </div>
          </div>

          <div class="field-group">
            <div class="group-head">
              <h3 class="field-label headline-sm" :class="{ 'force-opacity': showLabels }">Password</h3>
              <div class="body-xs" :class="{ 'force-opacity': showLabels }">Change password</div>
            </div>
            <div class="input body-md" :class="{ 'force-opacity': showLabels }">
              <input class="body-md" type="text" value="********" disabled>
            </div>
          </div>

          <div class="field-group">
            <h3 class="field-label headline-sm" :class="{ 'force-opacity': showLabels }">Zip Code</h3>
            <div class="input body-md" :class="{ 'force-opacity': showLabels }">
              <input class="body-md" type="text" value="07650" disabled>
            </div>
          </div>

          <div class="field-group flex-group">
            <div class="button headline-sm" :class="{ 'force-opacity': showLabels }">Update</div>
          </div>
        </div>

        <div class="main__section">
          <h2 class="headline-md" :class="{ 'force-opacity': showLabels }">Social Accounts</h2>
          
          <div class="social-option active">
            <div class="left">
              <div class="icon"></div>
              <h3 class="headline-sm" :class="{ 'force-opacity': showLabels }">Facebook</h3>
            </div>

            <div class="right">
              <span class="body-xs" :class="{ 'force-opacity': showLabels }">Disconnect</span>
            </div>
          </div>

          <div class="social-option">
            <div class="left">
              <div class="icon"></div>
              <h3 class="headline-sm" :class="{ 'force-opacity': showLabels }">Google</h3>
            </div>

            <div class="right">
              <span class="body-xs" :class="{ 'force-opacity': showLabels }">Connect</span>
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

export default {
  name: 'web-movies',

  props: ['platform'],

  components: {
    SiteHeader,
    SiteFooter,
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

<style lang="scss" scoped>
@import '../../styles/app';

.content {
  display: flex;
  justify-content: space-between;
  max-width: 980px !important;
  margin-top: 50px !important;
}

.sidebar {
  flex: 0 0 auto;
  width: 300px;
  padding: 0 0 0 20px;
  
  &__menu {
    .item {
      margin-bottom: 20px; 
      font-weight: 700;
    }
  }
}

.main {
  width: calc(100% - 350px);
  padding: 0 20px 0 0;

  &__section {
    margin-bottom: 50px;
  }

  h2 {
    font-weight: 700;
    margin-bottom: 10px;
  }

  h3 {
    font-weight: 700;
  }
}

.plan-overview,
.social-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
}

.plan-overview {
  background-color: $grey-cool-180;
  color: $grey-cool-0;
  
  .left {
    h3 {
      font-weight: 700;
      margin-bottom: 5px;
    }
  }
}

.social-option {
  background-color: $grey-cool-20;
  margin-bottom: 10px;

  .left {
    display: flex;
    align-items: center;
  }

  &.active {
    border: 4px solid white;
  }

  .icon {
    width: 28px;
    height: 28px;
    margin-right: 10px;
    background-color: $color-temp;
  }
}

</style>

