<template>
  <b-form-input
    :class="{
      'text-uppercase button': true,
      [sizeClassMap[size]]: true,
      'shadow btn-w-shadow': shadow,
      'btn-flat': !shadow,
      'btn-w-icon': hasIcon,
    }"
    variant="warning"
  >
    <svgicon name="hamburger" v-if="hasIcon" />
    {{ text }}
  </b-form-input>
</template>

<script>
export default {
  computed: {
    hasIcon() {
      return !!this.iconName;
    },
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    iconName: {
      type: String,
      default: '',
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium', // large
    },
  },
  data() {
    return {
      sizeClassMap: {
        large: 'btn-lg',
        medium: '',
      },
    };
  },
};
</script>

<style lang="scss">
.button {
  letter-spacing: .06em;
}
</style>
