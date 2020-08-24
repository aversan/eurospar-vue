<template>
  <section
    :class="{
      'winner-container container-fluid px-3 px-xl-5_25': true,
      'winner-container-mobile': isMobile,
      'winner-container-desktop': isDesktop,
    }"
    id="winner-container"
  >
    <MainTitle text="Победители розыгрыша" size="1" />
    <p class="text-lg leading-snuger text-gray mt-4 text-center font-weight-bold">Все победители будут опубликованы не позднее 19 октября 2020 года. Чтобы проверить победу, введите номер телефона:</p>
    <b-input-group class="winner-search mt-4 mx-auto">
      <b-form-input class="winner-search-input rounded-pill" v-mask="'+7 (###) ###-##-##'" placeholder="+7 (___) ___-__-__"></b-form-input>
      <b-input-group-append>
        <b-button class="btn-only-icon winner-search-btn">
          <Search />
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <WinnerList />
  </section>
</template>

<script>
import { mask } from 'vue-the-mask';
import MainTitle from '@/components/shared/main-title';
import Search from '@/components/icon-search';
import WinnerList from './winner-list';

export default {
  components: {
    MainTitle,
    WinnerList,
    Search,
  },
  computed: {
    isMobile() {
      return this.$mq === 'mobile';
    },
    isDesktop() {
      return this.$mq === 'desktop';
    },
  },
  directives: {mask},
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.winner-container {
  .winner-search {
    position: relative;
    max-width: 288px;

    @include media-breakpoint-down('xs') {
      max-width: 100%;
    }

    .winner-search-input {
      padding-right: $input-height;
    }

    .input-group-append {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
    }

    .winner-search-btn {
      color: var(--yellow);

      @include hover-focus() {
        color: var(--yellow-dark);
      }
    }
  }
}

.winner-container-mobile {
  .winner-search-input {
    background-color: var(--blue-light);
  }
}
</style>
