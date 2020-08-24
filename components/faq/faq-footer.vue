<template>
  <footer
    :class="{
      'faq-footer px-3 px-xl-4 pt-4 pb-4_5 rounded-lg text-center bg-light mt-2 mt-xl-3': true,
      'faq-footer-mobile': isMobile,
      'faq-footer-desktop': isDesktop,
    }"
  >
    <h4 class="h4_5 mb-0">Остались вопрсы?</h4>
    <h6 class="h6 mb-0 mt-1">Напишите и мы ответим в кратчайший срок!</h6>
    <div class="mt-3">
      <Button text="Задать вопрос" v-b-modal.modal-request />
    </div>
  </footer>
</template>

<script>
import Button from '@/components/shared/button';

export default {
  methods: {
    showModal() {
      this.$root.$emit('bv::show::modal', 'modal-request');
    },
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

.faq-footer {
  .h4_5 {
    color: var(--gray-950);
  }

  .h6 {
    color: var(--gray-600);
  }

  .btn {
    max-width: 14rem;
  }
}

.faq-footer-mobile {
  .h4_5 {
    color: var(--gray-light);
  }

  .h6 {
    color: var(--gray-light);
  }
}
</style>
