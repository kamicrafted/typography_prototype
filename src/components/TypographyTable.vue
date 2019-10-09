<template>
  <table class="type-table" v-if="currentPlatformID == 0">
    <thead>
      <tr>
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
      <tr v-for="(item, index) in webTypography.typography" :key="'row' + index">
        <td
          class="type-title"
          :class="platformArray[currentPlatformID] + '-' + item.classname"
        >{{item.title}}</td>
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>