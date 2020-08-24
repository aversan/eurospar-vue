<template>
  <b-card
    no-body
    tag="section"
    bg-variant="light"
    :class="{
      'faq-item': true,
      'faq-item-mobile': isMobile,
      'faq-item-desktop': isDesktop,
    }"
  >
    <b-card-header
      header-tag="header"
      class="faq-item-header position-relative px-3 px-xl-4_5 py-3"
      role="tab"
    >
      <h5 class="h5_5 leading-4 mb-0 faq-item-title">
        <span class="faq-item-toggle d-flex flex-nowrap stretched-link clickable" v-b-toggle:[id]>
          <span class="flex-fill text-nowrap overflow-hidden">{{ title }}</span>
          <svgicon class="faq-item-icon flex-shrink-0 ml-2_5 text-primary" name="plus" />
        </span>
      </h5>
    </b-card-header>
    <b-collapse :id="id" role="tabpanel" class="faq-item-collapse">
      <b-card-body class="px-3 px-xl-4_5 pb-3 pt-0_25 mt-n2">
        <b-card-text class="leading-4 text-base font-weight-bold faq-item-text">
          {{ text }}
        </b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
import '@/components/icons/plus';

export default {
  computed: {
    isMobile() {
      return this.$mq === 'mobile';
    },
    isDesktop() {
      return this.$mq === 'desktop';
    },
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '01',
    },
  },
  components: {
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.faq-item {
  .faq-item-header {
    padding-left: 0;
  }

  .faq-item-title {
    color: var(--black);
  }

  .faq-item-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .faq-item-toggle {
    color: var(--black);

    &:focus {
      outline: none;
    }

    @include hover-focus {
      color: var(--gray-950);
    }
  }

  .faq-item-toggle .faq-item-icon {
    opacity: .8;
    @include transition($transition-base);
  }

  .faq-item-toggle:hover .faq-item-icon {
    opacity: 1;
  }

  .faq-item-toggle.not-collapsed .faq-item-icon {
    transform: rotate(-45deg);
  }

  .faq-item-text {
    color: var(--gray-light);
  }
}

.faq-item-mobile {
  .faq-item-title {
    @include font-size(1rem);
    color: var(--gray);
  }

  .faq-item-toggle {
    color: var(--gray);

    @include hover-focus {
      color: var(--gray-dark);
    }
  }

  .faq-item-text {
    @include font-size(.8125rem);
  }
}
</style>
