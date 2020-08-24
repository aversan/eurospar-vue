<template>
  <section
    :class="{
      'main-hero container-fluid px-0 position-relative': true,
      'main-hero-mobile': isMobile,
      'main-hero-desktop': isDesktop,
    }"
  >
    <mq-layout mq="desktop">
      <div class="main-hero-bg-01"></div>
    </mq-layout>
    <b-row class="align-items-center" no-gutters>
      <b-col sm="12" xl="6">
        <b-img class="main-hero-girl" :src="girlImg" :fluid="isMobile" />
      </b-col>
      <b-col sm="12" xl="6" class="text-center px-3 px-xl-5_25 position-relative">
        <div class="main-hero-wrapper">
          <h3 class="main-hero-title mb-0 text-monospace text-center display-4 d-flex flex-column text-white">
            <span>Выигрывай призы</span>
            <small class="font-weight-bold">с Lay’s «Из печи» и Lipton!</small>
          </h3>
          <p class="main-hero-text mb-0 mt-4 text-white">С 1 сентября по 30 сентября купи два товара «Lipton Ice Tea» и Lay's «Из печи» в сети магазинов «СПАР Миддл Волга», присылай чек  и выигрывай призы!</p>
          <div class="mt-4 mt-xl-4_5">
            <Button text="Отправить чек" size="large" shadow icon-name="viber" :block="isMobile" v-b-modal.modal-add-check />
          </div>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Button from '@/components/shared/button';
import girlImg from './main-hero-girl.png';

export default {
  data() {
    return {
      girlImg,
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
  components: {
    Button,
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.main-hero {
  .main-hero-title {
    small {
      font-size: 70%;
      white-space: nowrap;
    }
  }

  .main-hero-text {
    font-weight: bold;
    @include font-size(1.5rem);
    line-height: 1.444;
  }
}

.main-hero-desktop {
  min-height: 823px;

  .main-hero-bg-01 {
    width: 1404px;
    height: 775px;
    transform: rotate(-12deg);
    background-image: url("./main-hero-bg-01.png");
    background-position: left center;
    background-size: cover;
    left: calc(50% - 90px);
    top: -90px;
    position: absolute;
  }

  .main-hero-wrapper {
    margin-top: calc(-#{$header-height} - 100px);
  }
}

.main-hero-mobile {
  .main-hero-girl {
    margin-bottom: 1rem;
  }

  .main-title,
  .main-title-mobile {
    @include font-size(2.0625rem);
  }

  .main-hero-text {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    @include font-size(1.125rem);
  }
}
</style>
