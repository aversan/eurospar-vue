<template>
  <div class="fixed-bottom alert-coockie-wrapper container-fluid px-0 mx-auto">
    <b-alert :show="!hideAlert" class="alert alert-coockie d-flex flex-column flex-xl-row align-items-xl-center mx-auto pt-3 pt-xl-2_25 pb-3 pb-xl-2_25 pl-3 pl-xl-5 pr-3 pr-xl-4_5 mb-0 rounded-0 text-gray bg-yellow-lighter">
      <div class="flex-fill leading-snug font-weight-bold">
        Мы используем Cookies. Они помогают сделать акцию лучше.
      </div>
      <div>
        <Button class="alert-btn mt-3 mt-xl-0 ml-xl-3" pill @click.native="hideAlert = true" text="Все ясно" />
      </div>
    </b-alert>
  </div>
</template>

<script>
import Button from '@/components/shared/button';

export default {
  data() {
    return {
      hideAlert: false,
    };
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

.alert-cookie {
}

</style>
