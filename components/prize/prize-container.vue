<template>
  <section class="prize-container container-fluid px-3 px-xl-5_25" id="prize-container">
    <MainTitle text="Призы" size="2" />
    <PrizeList />
  </section>
</template>

<script>
import MainTitle from '@/components/shared/main-title';
import PrizeList from './prize-list';

export default {
  components: {
    MainTitle,
    PrizeList,
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.prize-container {
}
</style>
