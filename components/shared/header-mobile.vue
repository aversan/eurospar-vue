<template>
  <b-navbar
    type="light"
    sticky
    toggleable="true"
    :class="{
      'header header-mobile flex-row flex-nowrap align-items-center px-3 container-fluid mx-auto': true,
      'bg-gray-200': !isHideMenu,
      'bg-white': isHideMenu,
    }"
  >
    <div class="header-logo-wrapper d-flex align-items-center">
      <div class="d-flex flex-column">
        <img
          class="header-logo spar-logo"
          width="74"
          height="13"
          :src="sparLogo"
          alt=""
        />
        <img
          class="header-logo mt-0_5 eurospar-logo"
          :src="eurosparLogo"
          width="116"
          height="13"
          alt=""
        />
      </div>
      <img
        class="header-logo mx-2 malinka-logo"
        width="95"
        height="27"
        :src="malinkaLogo"
        alt=""
      />
    </div>
    <div
      role="button"
      :class="{
        'header-action ml-auto mr-n2': true,
        'hide-menu': isHideMenu,
      }"
      @click="toggleMenu"
    >
      <svgicon v-if="isHideMenu" name="hamburger" />
      <svgicon v-if="!isHideMenu" class="svg-stroke" name="close" />
    </div>
    <b-collapse
      :class="{
        'header-collapse bg-gray-200': true,
        show: !isHideMenu,
      }"
      :show="!isHideMenu"
    >
      <b-navbar-nav>
        <b-nav-item v-for="(item, id) in items" :key="id" class="text-center" @click="hideMenu()"  v-scroll-to="item.scrollTo">
          <span>{{ item.text }}</span>
          <b-badge
            v-if="item.badge"
            class="mr-n1 align-middle"
            variant="danger"
            >{{ item.badge }}</b-badge
          >
        </b-nav-item>
      </b-navbar-nav>
      <div
        class="header-bottom d-flex flex-column mt-auto py-4_75 text-center w-100 bg-gray-200 position-relative"
      >
        <div>
          <a
            class="text-green-dark text-sm font-weight-bold underline leading-tightest"
            href=""
            >Правила акции</a
          >
        </div>
        <small
          class="py-3_5 text-sm leading-tightest text-gray d-flex flex-column"
          ><span>© 2020, ООО «Пепсико Холдингс»</span>
          <span>Все права защищены.</span></small
        >
      </div>
    </b-collapse>
  </b-navbar>
</template>
<script>
import sparLogo from '@/assets/images/spar-logo-mobile@2x.png';
import eurosparLogo from '@/assets/images/eurospar-logo-mobile@2x.png';
import malinkaLogo from '@/assets/images/malinka-logo-mobile@2x.png';
import '@/components/icons/hamburger';
import '@/components/icons/close';

export default {
  data() {
    return {
      sparLogo,
      eurosparLogo,
      malinkaLogo,
      isHideMenu: true,
    };
  },
  props: {
    items: Array,
  },
  watch: {
    isHideMenu() {
      document.body.className = this.isHideMenu ? '' : 'no-scrollable-mobile';
    },
  },
  methods: {
    toggleMenu() {
      this.isHideMenu = !this.isHideMenu;
    },
    hideMenu() {
      this.isHideMenu = true;
    },
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.header-mobile {
  height: $header-height-mobile;

  //.header-logo {
  //  &.spar-logo {
  //    width: 74px;
  //    height: 13px;
  //  }
  //
  //  &.eurospar-logo {
  //    width: 116px;
  //    height: 13px;
  //  }
  //
  //  &.malinka-logo {
  //    width: 95px;
  //    height: 27px;
  //  }
  //}

  .header-action {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    color: theme-color('primary');
    cursor: pointer;
    @include transition($transition-base);

    .svg-icon {
      width: 1.5rem;
      height: 1.5rem;
      vertical-align: top;
    }
  }

  .header-collapse {
    position: absolute;
    left: 0;
    top: $header-height-mobile;
    width: 100%;
    height: calc(100vh - #{$header-height-mobile});
    z-index: 2;
    overflow-y: auto;
    opacity: 0;
    display: flex !important;
    visibility: hidden;
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
    min-height: 520px;

    &.show {
      visibility: visible;
      opacity: 1;
    }
  }

  .navbar-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-top: calc(-#{$header-height-mobile / 2});
    left: 0;
    right: 0;

    .nav-link {
      @include font-size(1.5rem);
      line-height: 1;
      letter-spacing: 0.04em;
      padding: 1.25rem 1rem;

      .badge {
        padding-top: 0.325rem;
        padding-bottom: 0.325rem;
      }
    }
  }
}
</style>
