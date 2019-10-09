<template>
  <div class="elements web-elements" :class="'preview-' + activePlatform">
    <div class="switch switch--table">
      <div class="switch__platform">
        <div
          class="switch__item switch__item--web"
          @click="setPlatform(0)"
          :class="{'active': currentPlatformID == 0}"
        >Web</div>
        <div
          class="switch__item switch__item--mobile"
          @click="setPlatform(1)"
          :class="{'active': currentPlatformID == 1}"
        >Mobile</div>
        <div
          class="switch__item switch__item--tv"
          @click="setPlatform(2)"
          :class="{'active': currentPlatformID == 2}"
        >TV</div>
      </div>

      <div class="switch__unit">
        <strong>Unit:</strong>
        <select @change="updateUnit($event)" name="unit" id="unit" class="select">
          <option v-for="option in densityArray" :value="option" :key="option">{{option}}</option>
        </select>
      </div>
    </div>

    <table class="type-table" v-if="currentPlatform == platformArray[currentPlatformID]">
      <thead>
        <tr>
          <td>Preview</td>
          <td>Identifier</td>
          <td>Typeface</td>
          <td>Size</td>
          <td>Weight</td>
          <td>Case</td>
          <td>Line-height</td>
          <td>Description</td>
          <td style="text-align: center;">
            <svg
              class="icon-preview"
              width="24px"
              height="18px"
              viewBox="0 0 24 18"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g
                  id="eye"
                  transform="translate(1.000000, 1.000000)"
                  stroke="#ffffff"
                  stroke-width="2"
                >
                  <path
                    d="M0,8 C0,8 4,0 11,0 C18,0 22,8 22,8 C22,8 18,16 11,16 C4,16 0,8 0,8 Z"
                    id="Path"
                  />
                  <circle id="Oval" cx="11" cy="8" r="3" />
                </g>
              </g>
            </svg>
          </td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in typeData.typography" :key="'row' + index">
          <td
            class="type-preview"
            :class="platformArray[currentPlatformID] + '-' + item.classname"
          >{{item.title}}</td>
          <td class="type-title">{{item.classname}}</td>
          <td class="type-face">{{item.face}}</td>
          <td class="type-size">{{calculate(item.size)}}</td>
          <td class="type-weight">{{item.weight}}</td>
          <td class="type-case">{{item.case}}</td>
          <td class="type-height">{{calculate(item.lineheight)}}</td>
          <td class="type-description">{{item.description}}</td>
          <td class="type-img">
            <div class="type-preview" @click="setPreview(index + 1)">
              <img class="icon-link" src="../assets/icons/link.svg" alt />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <transition name="fade">
      <div class="previews" @click="setPreview(0)" v-if="currentPreview != 0">
        <div class="img-wrapper" v-for="(item, index) in typeData.typography" :key="'item' + index">
          <img
            class="previews-img"
            :class="{'active': currentPreview == index + 1}"
            :src="item.img"
            alt
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import WebType from "@/assets/data/web-type.json";
import MobileType from "@/assets/data/mobile-type.json";
import TVType from "@/assets/data/tv-type.json";

export default {
  data() {
    return {
      currentPreview: 0,
      currentPlatformID: 0,
      currentPlatform: "web",
      unit: "px",
      platformArray: ["web", "mobile", "tv"],
      densityArray: ["px", "rem", "mdpi", "hdpi", "xhdpi", "xxhdpi", "xxxhdpi"],
      unitArray: ["px", "rem", "dp", "dp", "dp", "dp", "dp"],
      typeData: WebType
    };
  },

  methods: {
    setPreview(id) {
      this.currentPreview = id;
      console.log(
        "currentPreview is " + this.currentPreview + " and ID is " + id
      );
    },

    setPlatform(val) {
      this.currentPlatform = this.platformArray[val];
      this.currentPlatformID = val;

      switch (this.currentPlatformID) {
        case 0:
          this.typeData = WebType;
          break;
        case 1:
          this.typeData = MobileType;
          break;
        case 2:
          this.typeData = TVType;
          break;
      }
    },

    calculate(val) {
      switch (this.unit) {
        case "px":
          return val + "px";

        case "rem":
          return val / 16 + "rem";

        case "mdpi":
          return val + "dp";

        case "hdpi":
          return val * 1.5 + "dp";

        case "xhdpi":
          return val * 2 + "dp";

        case "xxhhdpi":
          return val * 3 + "dp";

        case "xxxhdpi":
          return val * 4 + "dp";
      }
    },

    updateUnit(e) {
      this.unit = e.target.value;
    }
  },

  computed: {
    activePlatform() {
      return this.currentPlatform;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/app";

.elements {
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 56px;
    font-weight: 500;
  }
}

.type-table {
  width: 100%;
  font-size: 14px;
  margin-top: 48px;

  thead {
    background-color: rgba(black, 0.4);

    td {
      font-weight: bold;
      font-size: 14px;
      padding: 10px;
      border-right: 1px solid rgba(white, 0.05);
    }
  }

  tbody {
    tr {
      transition: all 0.15s ease-out;

      &:hover {
        background-color: rgba(white, 0.1);
      }

      &:last-child td {
        border-bottom: none;
      }
    }

    .type-section {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 12px;
      letter-spacing: 0.05em;
      background-color: rgba($nu-blue-100, 1);
      border-bottom: 1px solid rgba(white, 0.05);

      > td {
        border: none;
      }

      &:hover {
        background-color: rgba($nu-blue-100, 1);
      }
    }

    td {
      padding: 10px;
      vertical-align: middle;
      border-bottom: 1px solid rgba(white, 0.2);
      border-right: 1px solid rgba(white, 0.05);

      &:last-child {
        border-right: none;
      }

      &.type-preview {
        border-right: 1px dashed rgba(white, 0.1);
        background-color: rgba($nu-blue-100, 0.25);
        // mix-blend-mode: screen;
      }

      &.type-description {
        min-width: 260px;
      }

      &.type-img {
        text-align: center;
      }
    }
  }
}

.icon-preview {
  position: relative;
  top: 2px;
  width: 18px;
}

.icon-link {
  position: relative;
  top: 2px;
  width: 12px;
}

.previews {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 0 50px 100px rgba(black, 0.8);

  .previews-img {
    max-height: 90vh;
    display: none;

    &.active {
      display: block !important;
    }
  }
}

.previews,
.type-preview img {
  cursor: pointer;
}
</style>