<template>
  <article
    :class="{
      'winner-item bg-light text-gray-725 rounded winner-item-desktop px-2_5': true,
    }"
  >
    <span class="title text-sm text-truncate px-2_5 font-weight-bold">{{ title }}</span>
    <span class="phone text-sm px-2_5 text-center">{{ phone }}</span>
    <span class="date px-2_5 text-center">{{ date }}</span>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    date: {
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

.winner-item-desktop {
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  align-items: center;
  height: 3rem;
}
</style>
