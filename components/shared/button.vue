<template>
  <b-button
    :class="{
      'text-uppercase button': true,
      [sizeClassMap[size]]: true,
      'shadow button-w-shadow': shadow,
      'button-flat': !shadow,
      'button-w-icon': hasIcon,
    }"
    :pill="pill"
    variant="warning"
    :disabled="disabled"
    :block="block"
  >
    <span v-if="hasIcon" class="button-icon-wrapper flex-shrink-0"><svgicon :name="iconName" /></span>
    <div class="overflow-hidden">{{ text }}</div>
  </b-button>
</template>

<script>
import '@/components/icons/index';

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
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium', // large
    },
    block: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: false,
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
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.button {
  letter-spacing: 0.06em;

  &.btn-warning {
    @include hover-focus {
      background-color: var(--yellow-dark);
      border-color: var(--yellow-dark);
    }
  }

  &.disabled,
  &:disabled {
    background-color: var(--gray-400) !important;
    border-color: var(--gray-400) !important;
    color: var(--gray-575) !important;
  }
}

.button-w-icon {
  padding-left: $input-height;
  padding-right: 1.5rem;
  position: relative;

  .button-icon-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .svg-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  &.btn-lg {
    padding-left: $input-height-lg;
    padding-right: 2rem;

    .button-icon-wrapper {
      width: $input-height-lg;
      height: $input-height-lg;
    }

    .svg-icon {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
