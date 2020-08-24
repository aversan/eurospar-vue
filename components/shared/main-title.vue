<template>
  <h2
    :class="{
      'main-title mb-0 text-monospace text-center': true,
      [sizeClassMap[size]]: true,
      'text-white': isLight,
      'text-green-dark': !isLight,
      'main-title-mobile': isMobile,
      'main-title-desktop': isDesktop,
    }"
  >
    {{ text }}
  </h2>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$mq === 'mobile';
    },
    isDesktop() {
      return this.$mq === 'desktop';
    },
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    isLight: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '1',
    },
  },
  data() {
    return {
      sizeClassMap: {
        '1': 'display-1',
        '2': 'display-2',
        '3': 'display-3',
        '4': 'display-4',
        '5': 'display-5',
      },
    };
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.main-title-mobile {
  &.display-1,
  &.display-2,
  &.display-3,
  &.display-4 {
    @include font-size($h1-font-size);
  }
}
</style>
