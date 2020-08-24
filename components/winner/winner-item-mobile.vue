<template>
  <b-card
    no-body
    tag="article"
    bg-variant="light"
    :class="{
      'winner-item faq-item-mobile text-center py-4 px-3_5': true,
    }"
  >
    <div
      class="winner-item-image-wrapper mx-auto d-flex align-items-center justify-content-end"
    >
      <b-img
        class="winner-item-image"
        :src="image"
      ></b-img>
    </div>
    <h4
      class="text-sm winner-item-title leading-snuger mb-0 mt-2_5 tet-gray-dark"
    >
      {{ title }}
    </h4>
    <p
      class="winner-item-text mb-0 text-xs leading-snuger mt-2"
    >
      {{ phone }}
    </p>
    <p
      class="winner-item-text mb-0 text-xs leading-snuger mt-2"
    >
      {{ date }}
    </p>
  </b-card>
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
    image: {
      type: String,
      default: '',
    },
  },
  computed: {
    isMobile() {
      return this.$mq === 'mobile';
    },
    isDesktop() {
      return this.$mq === 'desktop';
    },
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.winner-item-mobile {
  max-width: 10rem;

  .winner-item-image-wrapper {
    position: relative;
    width: 7.25rem;
    height: 7.25rem;
  }

  .winner-item-image {
    max-width: 100%;
    max-height: 100%;
  }

  .winner-item-text {
    letter-spacing: 0.04em;
    color: var(--gray-725);
  }
}
</style>
