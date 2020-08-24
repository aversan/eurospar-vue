<template>
  <div
    :class="{
      'prize-item text-center mx-auto': true,
      'prize-item-mobile': isMobile,
      'prize-item-desktop': isDesktop,
    }"
  >
    <div
      class="prize-item-image-wrapper mx-auto d-flex align-items-center justify-content-center"
    >
      <b-img
        v-if="imageName == 'prize-01'"
        class="prize-item-image flex-shrink-0 prize-item-image-01"
        :src="prize01"
      ></b-img>
      <b-img
        v-if="imageName == 'prize-02'"
        class="prize-item-image flex-shrink-0 prize-item-image-02"
        :src="prize02"
      ></b-img>
      <b-img
        v-if="imageName == 'prize-03'"
        class="prize-item-image flex-shrink-0 prize-item-image-03"
        :src="prize03"
      ></b-img>
      <div v-if="imageName == 'prize-01'" class="x3"></div>
      <div v-if="imageName == 'prize-02'" class="x2"></div>
    </div>
    <h4
      class="h4 prize-item-title leading-snuger mb-0 mt-5 text-uppercase text-black"
    >
      {{ title }}
    </h4>
    <p
      class="prize-item-text mb-0 text-lg leading-snuger mt-3 font-weight-bold text-uppercase text-red-dark"
    >
      {{ text }}
    </p>
  </div>
</template>

<script>
import prize01 from '@/assets/images/prize-01@2x.png';
import prize02 from '@/assets/images/prize-02@2x.png';
import prize03 from '@/assets/images/prize-03@2x.png';

export default {
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
  data() {
    return {
      prize01,
      prize02,
      prize03,
    };
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


.winner-item-desktop {
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  grid-row-gap: .5rem;
}

.prize-item {
  max-width: 26.5625rem;

  .prize-item-image-wrapper {
    position: relative;
    width: 26.5625rem;
    height: 26.5625rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
    }
  }

  .prize-item-image {
    transform: scale(0.9);
    max-width: 100%;
    max-height: 100%;
  }

  .prize-item-text {
    letter-spacing: 0.04em;
  }
}

.prize-item:nth-child(2) .prize-item-image-wrapper::before {
  transform: rotate(-90deg);
}

.prize-item:nth-child(3) .prize-item-image-wrapper::before {
  transform: rotate(-225deg);
}

.prize-item-mobile {
  max-width: 19.5rem;

  .prize-item-image-wrapper {
    width: 19.5rem;
    height: 19.5rem;
  }
}
</style>
