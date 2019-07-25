<template>
  <div class="preview">
    <div class="scale">
      <div class="font font56">
        Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.
      </div>
      <div class="font font48">
        Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.
      </div>
      <div class="font font32">
        Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.
      </div>
      <div class="font font24">
        Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.
      </div>
      <div class="font font18">
        Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.
      </div>
      <div class="font font16">
        Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.
      </div>
      <div class="font font14">
        Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.
      </div>
      <div class="font font12">
        Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.
      </div>
      <div class="font font10">
        Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.
      </div>
    </div>
    <div class="grid">
      <div class="grid__line" v-for="n in 100" :key="'line' + n"></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.grid {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &__line {
    border-top: 1px solid rgba(white, .1);
    height: 15px;
  }
}

.preview {
  width: 1200px;
  margin: 0 auto;

  &:hover {
    .font10,
    .font12,
    .font14,
    .font16,
    .font18,
    .font24,
    .font32,
    .font48,
    .font56 {
      background: transparent;
    }

    .grid {
      opacity: 0;
    }
  }
}
</style>