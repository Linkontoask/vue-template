<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$listeners"
  />
  <svg
    v-else
    :class="svgClass"
    aria-hidden="true"
    v-on="$listeners"
    :style="style"
  >
    <use :href="iconName" />
  </svg>
</template>

<script>
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: '24'
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    style() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        color: this.color
      }
    },
    isExternal() {
      return isExternal(this.name)
    },
    iconName() {
      return `#icon-${this.name}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.name}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.name}) no-repeat 50% 50%`
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
