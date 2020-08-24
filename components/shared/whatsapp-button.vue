<template>
  <a
    :class="{
      'btn whatsapp-button': true,
    }"
    href=""
    role="button"
  >
    <span class="whatsapp-button-icon-wrapper flex-shrink-0"><svgicon name="whatsapp" /></span>
    <div class="overflow-hidden">Whatsapp</div>
  </a>
</template>

<script>
import '@/components/icons/whatsapp';

export default {
  props: {
    href: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.whatsapp-button {
  padding-left: $input-height;
  padding-right: 1.5rem;
  position: relative;
  background-color: $whatsapp-color;
  color: $white;

  @include hover-focus {
    background-color: $whatsapp-hover-color;
    border-color: $whatsapp-hover-color;
    color: $white;
  }

  &.disabled,
  &:disabled {
    background-color: var(--gray-400);
    border-color: var(--gray-400);
    color: var(--gray-575);
  }

  .whatsapp-button-icon-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    width: $input-height;
    height: $input-height;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .svg-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
