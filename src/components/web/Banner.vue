<template>
  <div class="banner">
    <div class="section-header">
      <h2 class="headline-md">{{ sectionTitle }}</h2>
      <!-- <SeeMore /> -->
    </div>

    <div class="row">
      <div class="inner">
        <div class="icon">

        </div>
        <div class="message">
          <h3 class="headline headline-lg">GET WATCHING</h3>
          <p class="subhead body-md">
            If you leave a program midway, we'll hold your place!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SeeMore from '@/components/web/SeeMore';

export default {
  name: 'carousel',
  props: ['section-title'],
  components : {
    // SeeMore
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.banner {
  padding: 25px 40px 0;
}

.row {
  display: flex;
  align-items: center;
  height: 100px;
  margin-top: 20px;
  padding: 100px 50px;
  background-color: $grey-cool-20;
}

.inner {
  display: flex;
  align-items: center;
}

.headline {
  font-weight: 900;
}

.icon {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-right: 30px;
  background-color: $color-temp;
}

</style>


