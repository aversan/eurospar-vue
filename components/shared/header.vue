<template>
  <Fragment>
    <HeaderMobile :items="items" id="header" v-if="isMobile"></HeaderMobile>
    <HeaderDesktop :items="items" id="header" v-if="isDesktop"></HeaderDesktop>
  </Fragment>
</template>

<script>
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';
import { Fragment } from 'vue-fragment';

export default {
  data() {
    return {
      items: [
        { text: 'Правила акции', link: '', badge: 'PDF' },
        { text: 'Призы', link: '', scrollTo: '#prize-container' },
        { text: 'Победители', link: '', scrollTo: '#winner-container' },
        { text: 'Вопросы и ответы', link: '', scrollTo: '#faq-container' },
      ],
    };
  },
  components: {
    HeaderDesktop,
    HeaderMobile,
    Fragment,
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

.header {
  .navbar-nav {
    .nav-link {
      font-weight: bold;
      text-transform: uppercase;
      @include transition($transition-base);

      .badge {
        margin-top: -.3rem;
      }
    }

    .nav-link .text {
      position: relative;
    }

    .nav-link .text::before {
      position: absolute;
      content: '';
      left: 0;
      width: 0;
      bottom: -2px;
      height: 2px;
      transition: width .4s cubic-bezier(.19,1,.22,1);
      background-color: var(--green-dark);
    }

    .nav-link:hover .text::before {
      width: 100%;
    }
  }
}
</style>
