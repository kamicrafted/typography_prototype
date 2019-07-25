<template>
  <table class="guide-table">
    <thead>
      <tr>
        <td><span class="date headline-md" :class="{ 'force-opacity': showLabels }">Wed, May</span> <span class="day headline-md" :class="{ 'force-opacity': showLabels }">22</span></td>
        <td><span class="time headline-md" :class="{ 'force-opacity': showLabels }">9:00</span> <span class="meridiem headline-xs" :class="{ 'force-opacity': showLabels }">AM</span></td>
        <td><span class="time headline-md" :class="{ 'force-opacity': showLabels }">9:30</span> <span class="meridiem headline-xs" :class="{ 'force-opacity': showLabels }">AM</span></td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="channel">
          <div class="logo"></div>
        </td>

        <td class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">Hot Bench</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>

        <td class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">Hot Bench</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>
      </tr>

      <tr>
        <td class="channel">
          <div class="logo"></div>
        </td>

        <td colspan="2" class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">Good Morning Vietnam</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>
      </tr>

      <tr>
        <td class="channel">
          <div class="logo"></div>
        </td>

        <td colspan="2" class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">XY Chelsea</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>
      </tr>

      <tr>
        <td class="channel">
          <div class="logo"></div>
        </td>

        <td class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">Rapture</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>

        <td class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">Goodbye Charlie</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>
      </tr>

      <tr>
        <td class="channel">
          <div class="logo"></div>
        </td>

        <td colspan="2" class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">The Three Stooges</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>
      </tr>

      <tr>
        <td class="channel">
          <div class="logo"></div>
        </td>

        <td class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">Hot Bench</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>

        <td class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">Hot Bench</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>
      </tr>

      <tr>
        <td class="channel">
          <div class="logo"></div>
        </td>

        <td colspan="2" class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">Good Morning Vietnam</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>
      </tr>

      <tr>
        <td class="channel">
          <div class="logo"></div>
        </td>

        <td colspan="2" class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">XY Chelsea</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>
      </tr>

      <tr>
        <td class="channel">
          <div class="logo"></div>
        </td>

        <td class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">Rapture</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>

        <td class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">Goodbye Charlie</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>
      </tr>

      <tr>
        <td class="channel">
          <div class="logo"></div>
        </td>

        <td colspan="2" class="program">
          <div class="info">
            <h2 class="title headline-sm" :class="{ 'force-opacity': showLabels }">The Three Stooges</h2>
            <p class="body-sm" :class="{ 'force-opacity': showLabels }">9:00-9:30AM</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'guide-content',
  computed: {
    showLabels () {
      return this.$store.state.showLabels
    }
  },
}
</script>

<style lang="scss" scoped>

</style>