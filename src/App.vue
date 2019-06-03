<template>
  <div id="app">
    <ConfigPanel />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import ConfigPanel from '@/components/web/ConfigPanel';

export default {
  name: 'app',
  data: function () {
    return {
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
  components: {
    ConfigPanel
  },
  methods: {
    setFonts: function () {
      this.HXS = document.querySelectorAll('.headline-xs');
      this.HSM = document.querySelectorAll('.headline-sm');
      this.HMD = document.querySelectorAll('.headline-md');
      this.HLG = document.querySelectorAll('.headline-lg');
      this.HXL = document.querySelectorAll('.headline-xl');
      this.HXXL = document.querySelectorAll('.headline-xxl');

      // for (let i=0; i< this.HXS.length; i++) {
      //   this.HXS[i].style.fontSize = this.$store.state.webSizes.headline[0].px + 'px';
      // }
      
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

.headline-xs {
  position: relative;

  &:before {
    content: "headline-xs";
    position: absolute;
    background: white;
    color: black;
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
  }
  
  &:hover:before {
    opacity: 1;
  }
}

.headline-sm {
  position: relative;

  &:before {
    content: "headline-sm";
    position: absolute;
    background: white;
    color: black;
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
  }
  
  &:hover:before {
    opacity: 1;
  }
}

.headline-md {
  position: relative;

  &:before {
    content: "headline-md";
    position: absolute;
    background: white;
    color: black;
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
  }
  
  &:hover:before {
    opacity: 1;
  }
}

.headline-lg {
  position: relative;

  &:before {
    content: "headline-lg";
    position: absolute;
    background: white;
    color: black;
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
  }
  
  &:hover:before {
    opacity: 1;
  }
}

.headline-xl {
  position: relative;

  &:before {
    content: "headline-xl";
    position: absolute;
    background: white;
    color: black;
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
  }
  
  &:hover:before {
    opacity: 1;
  }
}

.headline-xxl {
  position: relative;

  &:before {
    content: "headline-xxl";
    position: absolute;
    background: white;
    color: black;
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
  }
  
  &:hover:before {
    opacity: 1;
  }
}

.body-xs {
  position: relative;

  &:before {
    content: "body-xs";
    position: absolute;
    background: white;
    color: black;
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
  }
  
  &:hover:before {
    opacity: 1;
  }
}

.body-sm {
  position: relative;

  &:before {
    content: "body-sm";
    position: absolute;
    background: white;
    color: black;
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
  }
  
  &:hover:before {
    opacity: 1;
  }
}

.body-md {
  position: relative;

  &:before {
    content: "body-md";
    position: absolute;
    background: white;
    color: black;
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
  }
  
  &:hover:before {
    opacity: 1;
  }
}

.body-lg {
  position: relative;

  &:before {
    content: "body-lg";
    position: absolute;
    background: white;
    color: black;
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
  }
  
  &:hover:before {
    opacity: 1;
  }
}

.body-lg {
  position: relative;

  &:before {
    content: "body-xl";
    position: absolute;
    background: white;
    color: black;
    padding: 5px;
    font-size: 10px;
    font-weight: normal;
    font-family: arial;
    opacity: 0;
    text-transform: uppercase;
    transition: all 15s eases-in-out;
    pointer-events: none;
    top: -15px;
  }
  
  &:hover:before {
    opacity: 1;
  }
}
</style>
