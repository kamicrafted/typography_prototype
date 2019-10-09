<template>
  <div class="preview" :class="activeWeight">
    <div class="switch">
      <div class="switch__item switch__item--normal" @click="setWeight(0)" :class="{'active': currentIndex == 0}">Normal</div>
      <div class="switch__item switch__item--medium" @click="setWeight(1)" :class="{'active': currentIndex == 1}">Medium</div>
      <div class="switch__item switch__item--semibold" @click="setWeight(2)" :class="{'active': currentIndex == 2}">SemiBold</div>
      <div class="switch__item switch__item--bold" @click="setWeight(3)" :class="{'active': currentIndex == 3}">Bold</div>
      <div class="switch__item switch__item--extrabold" @click="setWeight(4)" :class="{'active': currentIndex == 4}">ExtraBold</div>
      <div class="switch__item switch__item--black" @click="setWeight(5)" :class="{'active': currentIndex == 5}">Black</div>

      <div class="switch__grid" :class="{'active': showGrid}">
        <span>GRID</span>
        <div class="toggle" @click="toggleGrid"></div>
      </div>
    </div>

    <div class="scale" :class="{'showgrid': showGrid}">
      <div class="label">72px</div>
      <p class="font font72">
        fuboTV is the world’s only sports-focused live TV streaming service.
      </p>

      <div class="label">56px</div>
      <p class="font font56">
        fuboTV is the world’s only sports-focused live TV streaming service.
      </p>

      <div class="label">46px</div>
      <p class="font font46">
        fuboTV is the world’s only sports-focused live TV streaming service with top leagues and teams, plus popular shows, movies and news for the entire household.
      </p>

      <div class="label">32px</div>
      <p class="font font32">
        fuboTV is the world’s only sports-focused live TV streaming service with top leagues and teams, plus popular shows, movies and news for the entire household. Watch 100+ live TV channels, thousands of on-demand titles and more on your TV, phone, tablet, computer and other devices.
      </p>

      <div class="label">24px</div>
      <p class="font font24">
        fuboTV is the world’s only sports-focused live TV streaming service with top leagues and teams, plus popular shows, movies and news for the entire household. Watch 100+ live TV channels, thousands of on-demand titles and more on your TV, phone, tablet, computer and other devices.
      </p>

      <div class="label">18px</div>
      <p class="font font18">
        fuboTV is the world’s only sports-focused live TV streaming service with top leagues and teams, plus popular shows, movies and news for the entire household. Watch 100+ live TV channels, thousands of on-demand titles and more on your TV, phone, tablet, computer and other devices.
      </p>

      <div class="label">16px</div>
      <p class="font font16">
        fuboTV is the world’s only sports-focused live TV streaming service with top leagues and teams, plus popular shows, movies and news for the entire household. Watch 100+ live TV channels, thousands of on-demand titles and more on your TV, phone, tablet, computer and other devices.
      </p>

      <div class="label">14px</div>
      <p class="font font14">
        fuboTV is the world’s only sports-focused live TV streaming service with top leagues and teams, plus popular shows, movies and news for the entire household. Watch 100+ live TV channels, thousands of on-demand titles and more on your TV, phone, tablet, computer and other devices.
      </p>

      <div class="label">12px</div>
      <p class="font font12">
        fuboTV is the world’s only sports-focused live TV streaming service with top leagues and teams, plus popular shows, movies and news for the entire household. Watch 100+ live TV channels, thousands of on-demand titles and more on your TV, phone, tablet, computer and other devices.
      </p>

      <div class="label">10px</div>
      <p class="font font10">
        fuboTV is the world’s only sports-focused live TV streaming service with top leagues and teams, plus popular shows, movies and news for the entire household. Watch 100+ live TV channels, thousands of on-demand titles and more on your TV, phone, tablet, computer and other devices.
      </p>

      <div class="label">8px</div>
      <p class="font font8">
        fuboTV is the world’s only sports-focused live TV streaming service with top leagues and teams, plus popular shows, movies and news for the entire household. Watch 100+ live TV channels, thousands of on-demand titles and more on your TV, phone, tablet, computer and other devices.
      </p>
    </div>
    <div class="grid" :class="{'active': showGrid}">
      <div class="grid__line" v-for="n in 100" :key="'line' + n"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showGrid: true,
      currentWeight: 'normal',
      currentIndex: 0,
      weightArray: [
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ]  
    }
  },

  computed: {
    activeWeight () {
      return this.currentWeight
    }
  },

  methods: {
    setWeight (val) {
      this.currentWeight = this.weightArray[val];
      this.currentIndex = val;
      console.log(val)
    },

    toggleGrid () {
      this.showGrid = !this.showGrid;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/app';

.grid {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  transition: all .15s ease-out;

  &.active {
    opacity: 1;

    .font8,
    .font10,
    .font12,
    .font14,
    .font16,
    .font18,
    .font24,
    .font32,
    .font46,
    .font56,
    .font72 {
      background-color: rgba($nu-purple-100, .25);
      mix-blend-mode: screen;
    }
  }

  &__line {
    border-top: 1px solid rgba(white, .1);
    height: $base-line-height;
  }
}

.preview {
  max-width: 1200px;
  margin: 0 auto;

  &.normal {
    .font8, .font10, .font12, .font14, .font16, .font18, .font24, .font32, .font46, .font56, .font72 {
      font-weight: normal;
    }
  }

  &.medium {
    .font8, .font10, .font12, .font14, .font16, .font18, .font24, .font32, .font46, .font56, .font72 {
      font-weight: 500;
    }
  }

  &.semibold {
    .font8, .font10, .font12, .font14, .font16, .font18, .font24, .font32, .font46, .font56, .font72 {
      font-weight: 600;
    }
  }

  &.bold {
    .font8, .font10, .font12, .font14, .font16, .font18, .font24, .font32, .font46, .font56, .font72 {
      font-weight: 700;
    }
  }

  &.extrabold {
    .font8, .font10, .font12, .font14, .font16, .font18, .font24, .font32, .font46, .font56, .font72 {
      font-weight: 800;
    }
  }

  &.black {
    .font8, .font10, .font12, .font14, .font16, .font18, .font24, .font32, .font46, .font56, .font72 {
      font-weight: 900;
    }
  }
}

.scale {
  margin-top: 3rem;

  .font8,
  .font10,
  .font12,
  .font14,
  .font16,
  .font18,
  .font24,
  .font32,
  .font46,
  .font56,
  .font72 {
    transition: all .5s ease-out;
  }

  &.showgrid {
    .font8,
    .font10,
    .font12,
    .font14,
    .font16,
    .font18,
    .font24,
    .font32,
    .font46,
    .font56,
    .font72 {
      background-color: rgba($nu-purple-100, .25);
      mix-blend-mode: screen;
    }
  }

  .label {
    display: inline-block;
    height: 1.5rem;
    margin: 3rem 0 0;
    padding: 0 10px;
    border-left: 2px solid $orange-100;
  }
}

.switch {
  &__grid {
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin-left: auto;

    > span {
      font-weight: 800;
      font-size: 12px;
    }

    .toggle {
      position: relative;
      width: 40px;
      height: 24px;
      margin-left: 10px;
      background-color: $grey-cool-60;
      border-radius: 50px;

      &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        background-color: $grey-cool-160;
        border-radius: 20px;
        transition: all .15s ease-out;
      }
    }

    &.active {
      .toggle {
        background-color: $green-100;
      }

      .toggle:after {
        left: 18px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(black, .25);
      } 
    }
  }
}
</style>