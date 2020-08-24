<template>
  <b-modal
    id="modal-add-check"
    :modal-class="{
      'modal-add-check text-center': true,
      'modal-add-check-desktop': isDesktop,
      'modal-add-check-mobile': isMobile,
    }"
    hide-footer
    centered
  >
    <h2 class="h2 mb-0 title text-gray-dark text-monospace">Зарегистрировать чек</h2>
    <p class="mt-3 mb-0 font-weight-bold subtitle text-lg leading-snuger text-gray-light mx-auto">Выберите удобный для вас способ регистрации чека:</p>
    <div class="d-inline-flex mt-4">
      <WhatsappButton href="" />
      <ViberButton class="ml-2" href="" />
    </div>
  </b-modal>
</template>

<script>
import ViberButton from '@/components/shared/viber-button';
import WhatsappButton from '@/components/shared/whatsapp-button';

export default {
  components: {
    ViberButton,
    WhatsappButton,
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

.modal-add-check {
  .title {
    letter-spacing: 0.01em;
  }

  .subtitle {
    color: var(--gray-700);
    max-width: 20rem;
  }

  .modal-body {
    padding-top: 2.5rem;
    padding-bottom: 4.375rem;
  }
}

.modal-add-check-desktop {
  .modal-header,
  .modal-body {
    padding-left: 3.125rem;
    padding-right: 3.125rem;
  }

  .modal-header .close {
    transform: translate(1.75rem, .25rem);
  }
}
</style>
