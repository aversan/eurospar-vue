<template>
  <b-navbar
    type="light"
    variant="white"
    sticky
    toggleable="false"
    :class="{
      'header header-desktop flex-row flex-nowrap align-items-center px-5_25 container-fluid mx-auto': true,
    }"
  >
    <div class="header-logo-wrapper d-flex align-items-center">
      <div class="d-flex flex-column">
        <img class="header-logo spar-logo" width="143" height="22" :src="sparLogo" alt="" />
        <img
          class="header-logo mt-1 eurospar-logo"
          :src="eurosparLogo"
          width="211"
          height="22"
          alt=""
        />
      </div>
      <img
        class="header-logo mx-3 malinka-logo"
        width="173"
        height="48"
        :src="malinkaLogo"
        alt=""
      />
    </div>
    <div class="navbar-nav-scroll ml-auto">
      <b-navbar-nav class="flex-row">
        <b-nav-item v-for="(item, id) in items" :key="id" :href="item.link" v-scroll-to="item.scrollTo">
          <span class="text">{{ item.text }}</span>
          <b-badge class="ml-1 mr-n1 align-middle" v-if="item.badge" variant="danger">{{ item.badge }}</b-badge>
        </b-nav-item>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>
<script>
import sparLogo from '@/assets/images/spar-logo@2x.png';
import eurosparLogo from '@/assets/images/eurospar-logo@2x.png';
import malinkaLogo from '@/assets/images/malinka-logo@2x.png';

export default {
  props: {
    items: Array,
  },
  data() {
    return {
      sparLogo,
      eurosparLogo,
      malinkaLogo,
      hideMenu: true,
    };
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.header-desktop {
  height: $header-height;

  //.header-logo {
  //  &.spar-logo {
  //    width: 143px;
  //    height: 22px;
  //  }
  //
  //  &.eurospar-logo {
  //    width: 211px;
  //    height: 22px;
  //  }
  //
  //  &.malinka-logo {
  //    width: 173px;
  //    height: 48px;
  //  }
  //}

  .navbar-nav-container {
    margin-right: -$navbar-nav-link-padding-x;
  }

  .navbar-nav {
    .nav-link {
      @include font-size(1.125rem);
      line-height: 1.3333;
      padding-left: $navbar-nav-link-padding-x;
      padding-right: $navbar-nav-link-padding-x;
    }
  }

  .navbar-nav-scroll {
    max-width: 100%;
    height: 3rem;
    overflow: hidden;

    .navbar-nav {
      padding-bottom: 2rem;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }
  }
}
</style>
