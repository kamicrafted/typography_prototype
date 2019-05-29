<template>
  <div class="site-footer">
    <footer class="footer">
      <p class="site-description body-sm">
        fuboTV is the world’s only sports-focused live TV streaming service with top leagues and teams, plus popular shows, movies and news for the entire household. Watch 100+ live TV channels, thousands of on-demand titles and more on your TV, phone, tablet, computer and other devices.
      </p>

      <div class="links">
        <div class="links__company">
          <h4 class="headline-sm">Company</h4>
          <a class="body-md" href="">Advertise</a>
          <a class="body-md" href="">Careers</a>
          <a class="body-md" href="">Become an Affiliate</a>
          <a class="body-md" href="">Press Inquiries</a>
        </div>

        <div class="links__support">
          <h4 class="headline-sm">Support</h4>
          <a class="body-md" href="">Help Center</a>
          <a class="body-md" href="">Link</a>
          <a class="body-md" href="">Link</a>
        </div>
      </div>

      <div class="social">
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
      </div>
    </footer>
    <div class="signoff">
      <span class="headline-xs">Terms</span>
      <span class="headline-xs">Privacy</span>
      <span class="headline-xs">Cookie Policy</span>
      <span class="headline-xs">© 2019 fuboTV Inc.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'site-footer'
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.footer {
  display: flex;
  // height: 150px;
  margin-top: 50px;
  padding: 30px 40px;
  background-color: $color-footer;

  .site-description {
    width: 45%;
    margin-right: auto;
    line-height: 1.6;
  }

  .links {
    display: flex;
    width: 30%;

    a {
      color: white;
      text-decoration: none;
      margin-bottom: 5px;
    }

    h4 {
      font-weight: 700;
      margin-bottom: 5px;
    }

    &__company,
    &__support {
      display: flex;
      flex-direction: column;
    }

    &__company {
      margin-right: 60px;
    }

    &__support {

    }
  }

  .social {
    display: flex;

    .icon {
      width: 30px;
      height: 30px;
      margin-left: 10px;
      background-color: $color-temp;
    }
  }
}

.site-description {
}

.signoff {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px 40px;

  span {
    margin-left: 20px;
    font-weight: 700;
  }
}
</style>
