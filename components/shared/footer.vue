<template>
  <footer
    :class="{
      'footer container-fluid flex-row bg-footer mx-auto py-5_25': true,
      [footerClass]: true,
      'footer-mobile bg-footer-mobile px-3': isMobile,
      'footer-desktop bg-footer-desktop px-5_25': isDesktop,
    }"
  >
    <b-row class="align-items-center">
      <b-col class="footer-col-copy" :cols="$mq | mq({ mobile: 12, desktop: 3 })">
        <small class="footer-text text-white d-flex flex-column">
          <span>© 2020, ООО «Пепсико Холдингс»</span>
          <span>Все права защищены.</span>
        </small>
      </b-col>
      <b-col class="footer-col-center" v-if="isDesktop" cols="6">
        <small class="footer-text text-white">
          Призы могут отличаться от изображения на рекламных материалах. Полная
          информация об организаторе, правилах, призовом фонде, количестве
          призов, сроке, месте и порядке их получения читайте <a class="text-white underline" href="">в правилах акции</a>.
          Сохраняйте чеки до конца Акции.
        </small>
      </b-col>
      <b-col class="footer-col-up" :cols="$mq | mq({ mobile: 12, desktop: 3 })">
        <div class="footer-action" role="button" v-scroll-to="'#header'">
          <ArrowUpCircle />
        </div>
      </b-col>
    </b-row>
  </footer>
</template>
<script>
// import '@/components/icons/arrow-up-circle';
import ArrowUpCircle from '@/components/icon-arrow-up-circle';

export default {
  computed: {
    footerClass() {
      return this.$mq === 'mobile' ? 'footer-mobile' : 'footer-desktop';
    },
    isMobile() {
      return this.$mq === 'mobile';
    },
    isDesktop() {
      return this.$mq === 'desktop';
    },
  },
  components: {
    ArrowUpCircle,
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';
@import 'assets/scss/type';

.footer {
  .footer-text {
    @extend .text-sm;
    @extend .leading-snuger;
  }

  .footer-action {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    display: inline-block;
    @include transition($transition-base);

    .svg-icon {
      width: 3rem;
      height: 3rem;
    }
  }

  .footer-action {
    color: $white;

    @include hover-focus() {
      color: var(--yellow-dark);
    }

    &.disabled {
      pointer-events: none;
      color: $btn-link-disabled-color;
    }
  }
}

.footer-desktop {
  margin-top: 6rem;

  .footer-text {
    font-weight: bold;
  }

  .footer-col-up {
    text-align: right;
  }

  .footer-col-center {
    text-align: center;
  }
}

.footer-mobile {
  text-align: center;
  margin-top: 4rem;

  .footer-text {
    font-family: 'Roboto', sans-serif;
  }

  .footer-col-copy {
    order: 13;
    margin-top: 2rem;
  }
}
</style>
