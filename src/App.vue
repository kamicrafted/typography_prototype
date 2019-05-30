<template>
  <div id="app">
    <div class="config" draggable="true">
      <div @click="togglePanel" class="header">
        <div class="header__left">
          Configuration
        </div>
        <div class="header__right">
          <div v-if="!panelOpen" class="marker marker__plus"></div>
          <div v-if="panelOpen" class="marker marker__minus"></div>
        </div>
      </div>
      <transition name="fadeHeight">
        <div v-if="panelOpen" class="options">
          <div class="options__item">
            <div class="label">
              Headline SM
            </div>
            <select class="select" name="" id="">
              <option value="">12px</option>
              <option value="">14px</option>
              <option value="">16px</option>
              <option value="">18px</option>
              <option value="">20px</option>
              <option value="">24px</option>
              <option value="">26px</option>
              <option value="">28px</option>
              <option value="">30px</option>
              <option value="">32px</option>
              <option value="">34px</option>
              <option value="">36px</option>
              <option value="">38px</option>
              <option value="">40px</option>
              <option value="">42px</option>
              <option value="">44px</option>
              <option value="">46px</option>
              <option value="">48px</option>
              <option value="">50px</option>
            </select>
          </div>

          <div class="options__item">
            <div class="label">
              Headline MD
            </div>
            <select class="select" name="" id="">
              <option value="">12px</option>
              <option value="">14px</option>
              <option value="">16px</option>
              <option value="">18px</option>
              <option value="">20px</option>
              <option value="">24px</option>
              <option value="">26px</option>
              <option value="">28px</option>
              <option value="">30px</option>
              <option value="">32px</option>
              <option value="">34px</option>
              <option value="">36px</option>
              <option value="">38px</option>
              <option value="">40px</option>
              <option value="">42px</option>
              <option value="">44px</option>
              <option value="">46px</option>
              <option value="">48px</option>
              <option value="">50px</option>
            </select>
          </div>

          <div class="options__item">
            <div class="label">
              Headline LG
            </div>
            <select class="select" name="" id="">
              <option value="">12px</option>
              <option value="">14px</option>
              <option value="">16px</option>
              <option value="">18px</option>
              <option value="">20px</option>
              <option value="">24px</option>
              <option value="">26px</option>
              <option value="">28px</option>
              <option value="">30px</option>
              <option value="">32px</option>
              <option value="">34px</option>
              <option value="">36px</option>
              <option value="">38px</option>
              <option value="">40px</option>
              <option value="">42px</option>
              <option value="">44px</option>
              <option value="">46px</option>
              <option value="">48px</option>
              <option value="">50px</option>
            </select>
          </div>

          <div class="options__item">
            <div class="label">
              Headline XL
            </div>
            <select class="select" name="" id="">
              <option value="">12px</option>
              <option value="">14px</option>
              <option value="">16px</option>
              <option value="">18px</option>
              <option value="">20px</option>
              <option value="">24px</option>
              <option value="">26px</option>
              <option value="">28px</option>
              <option value="">30px</option>
              <option value="">32px</option>
              <option value="">34px</option>
              <option value="">36px</option>
              <option value="">38px</option>
              <option value="">40px</option>
              <option value="">42px</option>
              <option value="">44px</option>
              <option value="">46px</option>
              <option value="">48px</option>
              <option value="">50px</option>
            </select>
          </div>

          <div class="options__item">
            <div class="label">
              Body XS
            </div>
            <select class="select" name="" id="">
              <option value="">12px</option>
              <option value="">14px</option>
              <option value="">16px</option>
              <option value="">18px</option>
              <option value="">20px</option>
              <option value="">24px</option>
              <option value="">26px</option>
              <option value="">28px</option>
              <option value="">30px</option>
              <option value="">32px</option>
              <option value="">34px</option>
              <option value="">36px</option>
              <option value="">38px</option>
              <option value="">40px</option>
              <option value="">42px</option>
              <option value="">44px</option>
              <option value="">46px</option>
              <option value="">48px</option>
              <option value="">50px</option>
            </select>
          </div>

          <div class="options__item">
            <div class="label">
              Body SM
            </div>
            <select class="select" name="" id="">
              <option value="">12px</option>
              <option value="">14px</option>
              <option value="">16px</option>
              <option value="">18px</option>
              <option value="">20px</option>
              <option value="">24px</option>
              <option value="">26px</option>
              <option value="">28px</option>
              <option value="">30px</option>
              <option value="">32px</option>
              <option value="">34px</option>
              <option value="">36px</option>
              <option value="">38px</option>
              <option value="">40px</option>
              <option value="">42px</option>
              <option value="">44px</option>
              <option value="">46px</option>
              <option value="">48px</option>
              <option value="">50px</option>
            </select>
          </div>

          <div class="options__item">
            <div class="label">
              Body MD
            </div>
            <select class="select" name="" id="">
              <option value="">12px</option>
              <option value="">14px</option>
              <option value="">16px</option>
              <option value="">18px</option>
              <option value="">20px</option>
              <option value="">24px</option>
              <option value="">26px</option>
              <option value="">28px</option>
              <option value="">30px</option>
              <option value="">32px</option>
              <option value="">34px</option>
              <option value="">36px</option>
              <option value="">38px</option>
              <option value="">40px</option>
              <option value="">42px</option>
              <option value="">44px</option>
              <option value="">46px</option>
              <option value="">48px</option>
              <option value="">50px</option>
            </select>
          </div>

          <div class="options__item">
            <div class="label">
              Body LG
            </div>
            <select class="select" name="" id="">
              <option value="">12px</option>
              <option value="">14px</option>
              <option value="">16px</option>
              <option value="">18px</option>
              <option value="">20px</option>
              <option value="">24px</option>
              <option value="">26px</option>
              <option value="">28px</option>
              <option value="">30px</option>
              <option value="">32px</option>
              <option value="">34px</option>
              <option value="">36px</option>
              <option value="">38px</option>
              <option value="">40px</option>
              <option value="">42px</option>
              <option value="">44px</option>
              <option value="">46px</option>
              <option value="">48px</option>
              <option value="">50px</option>
            </select>
          </div>

          <div class="options__item">
            <div class="label">
              Body XL
            </div>
            <select class="select" name="" id="">
              <option value="">12px</option>
              <option value="">14px</option>
              <option value="">16px</option>
              <option value="">18px</option>
              <option value="">20px</option>
              <option value="">24px</option>
              <option value="">26px</option>
              <option value="">28px</option>
              <option value="">30px</option>
              <option value="">32px</option>
              <option value="">34px</option>
              <option value="">36px</option>
              <option value="">38px</option>
              <option value="">40px</option>
              <option value="">42px</option>
              <option value="">44px</option>
              <option value="">46px</option>
              <option value="">48px</option>
              <option value="">50px</option>
            </select>
          </div>
        </div>
      </transition>
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      panelOpen: false,
      HXS: null,
      HSM: null,
      HMD: null,
      HLG: null,
      HXL: null,
      HXXL: null,
      BXS: null,
      BSM: null,
      BMD: null,
      BLG: null,
      BXL: null,
    }
  },
  methods: {
    togglePanel: function () {
      this.panelOpen = !this.panelOpen
    },

    setFonts: function () {
      this.HXS = document.querySelectorAll('.headline-xs');
      this.HSM = document.querySelectorAll('.headline-sm');
      this.HMD = document.querySelectorAll('.headline-md');
      this.HLG = document.querySelectorAll('.headline-lg');
      this.HXL = document.querySelectorAll('.headline-xl');
      this.HXXL = document.querySelectorAll('.headline-xxl');
      
      for (let i=0; i< this.HXS.length; i++) {
        this.HXS[i].style.fontSize = this.$store.state.headlineXS + 'px';
      }
      for (let i=0; i< this.HSM.length; i++) {
        this.HSM[i].style.fontSize = this.$store.state.headlineSM + 'px';
      }
      for (let i=0; i< this.HMD.length; i++) {
        this.HMD[i].style.fontSize = this.$store.state.headlineMD + 'px';
      }
      for (let i=0; i< this.HLG.length; i++) {
        this.HLG[i].style.fontSize = this.$store.state.headlineLG + 'px';
      }
      for (let i=0; i< this.HXL.length; i++) {
        this.HXL[i].style.fontSize = this.$store.state.headlineXL + 'px';
      }
      for (let i=0; i< this.HXXL.length; i++) {
        this.HXXL[i].style.fontSize = this.$store.state.headlineXXL + 'px';
      }
      
      
      this.BXS = document.querySelectorAll('.body-xs');
      this.BSM = document.querySelectorAll('.body-sm');
      this.BMD = document.querySelectorAll('.body-md');
      this.BLG = document.querySelectorAll('.body-lg');
      this.BXL = document.querySelectorAll('.body-xl');

      for (let i=0; i< this.BXS.length; i++) {
        this.BXS[i].style.fontSize = this.$store.state.bodyXS + 'px';
      }
      for (let i=0; i< this.BSM.length; i++) {
        this.BSM[i].style.fontSize = this.$store.state.bodySM + 'px';
      }
      for (let i=0; i< this.BMD.length; i++) {
        this.BMD[i].style.fontSize = this.$store.state.bodyMD + 'px';
      }
      for (let i=0; i< this.BLG.length; i++) {
        this.BLG[i].style.fontSize = this.$store.state.bodyLG + 'px';
      }
      for (let i=0; i< this.BXL.length; i++) {
        this.BXL[i].style.fontSize = this.$store.state.bodyXL + 'px';
      }
    },
  },
  mounted () {
    this.setFonts();
  }
}
</script>


<style lang="scss">
@import 'styles/app';

#app {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.config {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 10px;
  width: 250px;
  max-height: 350px;
  box-shadow: 0 14px 30px rgba(black, .5);
  overflow: auto;
  opacity: 0;
  transition: all .15s ease-in-out;

  &:hover {
    opacity: 1;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: white;
    color: black;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid rgba(black, .1);
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
  }
}

.options {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: #f0f0f0;
    color: black;

    &:nth-child(even) {
      background: #fafafa;
    }
  }

  .select {
    width: 30%;
    font-size: 14px;
    text-align: right;
  }

  .label {
    font-size: 14px;
  }
}

.marker {
  &__minus {
    width: 10px;
    height: 2px;
    background-color: black;
  }

  &__plus {
    position: relative;
    width: 10px;
    height: 2px;
    background-color: black;

    &:after {
      content: '';
      position: absolute;
      left: 4px;
      top: -4px;
      width: 2px;
      height: 10px;
      background-color: black;
    }
  }
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.2s;
  max-height: 350px;
}
.fadeHeight-enter,
.fadeHeight-leave-to
{
  opacity: 0;
  max-height: 0px;
}
</style>
