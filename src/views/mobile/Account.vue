<template>
  <div class="mobile account">
    <img class="trace" src="@/assets/mobile/myaccount.png" alt="">

    <NavigationBar page-title="Account" />

    <div class="content">
      <div class="form-section headline-md" :class="{ 'force-opacity': showLabels }">Profile</div>

      <div class="field-group">
        <div class="group-left body-md" :class="{ 'force-opacity': showLabels }">John Snow</div>
        <div class="group-right"><div class="icon"></div></div>
      </div>

      <div class="field-group">
        <div class="group-left body-md" :class="{ 'force-opacity': showLabels }">jsnow@fubo.tv</div>
      </div>

      <div class="field-group">
        <div class="group-left body-md" :class="{ 'force-opacity': showLabels }">Password</div>
        <div class="group-right"><div class="icon"></div></div>
      </div>

      <div class="form-section headline-md" :class="{ 'force-opacity': showLabels }">Social</div>

      <div class="field-group">
        <div class="group-left body-md" :class="{ 'force-opacity': showLabels }">Facebook</div>
        <div class="group-right body-md" :class="{ 'force-opacity': showLabels }">Connect</div>
      </div>

      <div class="field-group">
        <div class="group-left body-md" :class="{ 'force-opacity': showLabels }">Google</div>
        <div class="group-right body-md" :class="{ 'force-opacity': showLabels }">Connect</div>
      </div>

      <div class="form-section headline-md" :class="{ 'force-opacity': showLabels }">About</div>

      <div class="field-group">
        <div class="group-left body-md" :class="{ 'force-opacity': showLabels }">Video View Tracking</div>
        <div class="group-right"><div class="icon"></div></div>
      </div>

      <div class="form-section headline-md" :class="{ 'force-opacity': showLabels }">Legal</div>

      <div class="field-group">
        <div class="group-left body-md" :class="{ 'force-opacity': showLabels }">Terms of Service</div>
        <div class="group-right"><div class="icon"></div></div>
      </div>

      <div class="field-group">
        <div class="group-left body-md" :class="{ 'force-opacity': showLabels }">Privacy Policy</div>
        <div class="group-right"><div class="icon"></div></div>
      </div>

      <div class="field-group">
        <div class="group-left body-md" :class="{ 'force-opacity': showLabels }">Cookie Policy</div>
        <div class="group-right"><div class="icon"></div></div>
      </div>

      <div class="form-section headline-md" :class="{ 'force-opacity': showLabels }">Support</div>

      <div class="field-group">
        <div class="group-left body-md" :class="{ 'force-opacity': showLabels }">iTunes Auto-renewable Subscriptions</div>
        <div class="group-right"><div class="icon"></div></div>
      </div>

      <div class="field-group">
        <div class="group-left body-md" :class="{ 'force-opacity': showLabels }">Help Center</div>
        <div class="group-right"><div class="icon"></div></div>
      </div>

      <div class="field-group manage-account">
        <p class="body-md"><span class="strong">Account management:</span> To manage your account, please visit 'My Account' at fubo.tv/account.</p>
      </div>

      <div class="footer">
        <span class="button headline-md" :class="{ 'force-opacity': showLabels }">Sign out</span>

        <div class="version">
          <span class="body-md" :class="{ 'force-opacity': showLabels }">App v5.0.4.6526</span>
          <span class="body-md" :class="{ 'force-opacity': showLabels }">Player v11.0.8</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/mobile/NavigationBarAccount';

export default {
  name: 'mobile-account',

  props: ['platform'],

  data: function () {
    return {
    }
  },

  components: {
    NavigationBar
  },

  mounted () {
    this.$store.commit('setPlatform', this.platform)
    this.$parent.initFonts()
  },

  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  }

}
</script>

<style lang="scss">
@import '../../styles/app';

html, body {
  background-color: $grey-cool-40 !important;
}

.account {
  min-height: 100%;
  padding-bottom: 100px;
}

.form-section {
  padding: 13px $mobile-gutter;
  text-transform: uppercase;
  font-weight: 700;
  background-color: rgba($grey-cool-40, .5);
  opacity: .7;
}

.field-group {
  position: relative;
  padding: 12px $mobile-gutter;
  border-bottom: 1px solid $grey-cool-20;

  .group-left {
    font-weight: 600;
  }

  .group-right {
    position: absolute;
    right: $mobile-gutter;
    top: 50%;
    transform: translateY(-50%);
  }

  .icon {
    width: 30px;
    height: 30px;
    background-color: $color-temp;
  }

  .strong {
    font-weight: 700;
  }
}

.manage-account {
  background-color: $grey-cool-20;
  padding: $mobile-gutter;
  margin: 10px 16px;
  border-radius: 4px;
}

.version {
  text-align: center;
  opacity: .7;
  margin-bottom: 10px;

  span {
    display: block;
  }
}

.button {
  display: block;
  margin: 30px auto;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
}
</style>

