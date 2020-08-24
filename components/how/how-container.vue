<template>
  <section
    id="how-container"
    :class="{
      'how-container container-fluid px-3 px-xl-5_25 bg-how position-relative': true,
      'how-container-mobile': isMobile,
      'how-container-desktop': isDesktop,
    }"
  >
    <MainTitle text="Как участвовать?" size="3" is-light />
    <HowList />
  </section>
</template>

<script>
import MainTitle from '@/components/shared/main-title';
import HowList from './how-list';

export default {
  components: {
    MainTitle,
    HowList,
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

.how-container {
}

.how-container-desktop {
  margin-top: -100px;
}
</style>
