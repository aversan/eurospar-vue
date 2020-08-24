<template>
  <div
    :class="{
      'how-item text-center mx-auto text-white': true,
      'how-item-mobile': isMobile,
      'how-item-desktop': isDesktop,
    }"
  >
    <div class="how-item-icon-wrapper mx-auto d-flex align-items-end justify-content-center">
      <Scan class="how-item-icon flex-shrink-0" v-if="imageName == 'scan'" />
      <Bonus class="how-item-icon flex-shrink-0" v-if="imageName == 'bonus'" />
      <Buy class="how-item-icon flex-shrink-0" v-if="imageName == 'buy'" />
    </div>
    <h4 class="h4 how-item-title leading-snuger mb-0 mt-3 mt-xl-4_5 text-uppercase">{{ title }}</h4>
    <p class="how-item-text mb-0 text-2xl leading-snuger mt-2 font-weight-bold" v-if="isDesktop">{{ text }}</p>
    <p class="how-item-text mb-0 text-1_5xl leading-snugest mt-2 font-weight-bold" v-if="isMobile">{{ text }}</p>
  </div>
</template>

<script>
import Bonus from '@/assets/images/bonus.svg';
import Scan from '@/assets/images/scan.svg';
import Buy from '@/assets/images/buy.svg';

export default {
  computed: {
    isMobile() {
      return this.$mq === 'mobile';
    },
    isDesktop() {
      return this.$mq === 'desktop';
    },
  },
  components: {
    Bonus,
    Scan,
    Buy,
  },
  props: {
    imageName: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    text: {
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

.how-item {
  max-width: 26.25rem;

  .how-item-icon-wrapper {
    width: 132px;
    height: 132px;
  }
}
</style>
