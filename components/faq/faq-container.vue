<template>
  <section class="faq-container position-relative" id="faq-container">
    <MainTitle text="Вопросы и ответы" size="1" />
    <FaqList />
    <FaqFooter />
  </section>
</template>

<script>
import MainTitle from '@/components/shared/main-title';
import FaqFooter from './faq-footer';
import FaqList from './faq-list';

export default {
  components: {
    MainTitle,
    FaqFooter,
    FaqList,
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.faq-container {
  z-index: 2;
}

</style>
