<template>
  <b-modal
    id="modal-request"
    :modal-class="{
      'modal-request': !success,
      'modal-request-desktop': isDesktop && !success,
      'modal-request-mobile': isMobile && !success,
      'modal-success': success,
      'modal-success-desktop': isDesktop && success,
      'modal-success-mobile': isMobile && success,
    }"
    hide-footer
    hide-backdrop
  >
    <div class="container-fluid px-3 px-xl-4_5 mx-auto">
      <b-form class="modal-wrapper mx-auto" v-if="!success">
        <h4 class="h4_5 text-uppercase mb-0 text-center title">Остались вопросы?</h4>
        <p class="mt-2 mb-4 font-weight-bold text-center subtitle">Напишите и мы ответим в кратчайший срок!</p>
        <b-form-group
          id="input-group-1"
          label="Электронная почта"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Ваше сообщение"
          label-for="input-2"
        >
          <b-form-textarea
            id="input-2"
            v-model="form.message"
            required
            rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group
          id="input-group-3"
          label="Прикрепить файл"
          label-for="input-3"
        >
          <b-form-file
            id="input-3"
            v-model="form.file"
            type="textarea"
            placeholder="Выберите файл"
          ></b-form-file>
        </b-form-group>
        <b-form-group
          id="input-group-4"
          class="my-4"
        >
          <b-form-checkbox
            v-model="form.yes"
            value="yes"
            unchecked-value=""
            size="lg"
          >
            <span class="text-xs text-gray-725">
              Согласен(а) на обработку моих персональных данных в соответствии с Политикой конфиденциальности, а также получение E-mail сообщений от Организатора акции.
            </span>
          </b-form-checkbox>
        </b-form-group>
        <div class="mt-4">
          <Button text="Задать вопрос" @click.native="onSubmit" />
        </div>
      </b-form>
      <div class="modal-wrapper mx-auto text-center" v-if="success">
        <svgicon class="mx-auto modal-icon text-success" name="check-circle" />
        <h4 class="h4_5 text-uppercase mb-0 title mt-4">Вопрос отправлен</h4>
        <p class="mt-3 mb-0 font-weight-bold text">Спасибо за проявленный интерес. С вами свяжутся как только техническая поддержка обработает ваш вопрос!</p>
      </div>
    </div>
  </b-modal>
</template>

<script>
import Button from '@/components/shared/button';
import '@/components/icons/check-circle';

export default {
  methods: {
    // checkFormValidity() {
    //   const valid = this.$refs.form.checkValidity()
    //   this.nameState = valid
    //   return valid
    // },
    onReset(event) {
      event.preventDefault();
      this.form.email = '';
      this.form.message = '';
      this.form.file = null;
      this.form.yes = '';
      this.show = false;
    },
    onSubmit(event) {
      event.preventDefault();

      // if (!this.checkFormValidity()) {
      //   return;
      // }

      this.submittedNames.push(this.form.email);
      this.submittedNames.push(this.form.message);
      this.submittedNames.push(this.form.file);
      // this.$nextTick(() => {
      //   this.$bvModal.hide('modal-request');
      // });
      // alert(JSON.stringify(this.form));
      this.success = true;
    },
  },
  data() {
    return {
      form: {
        email: '',
        file: null,
        yes: '',
      },
      success: false,
      submittedNames: [],
    };
  },
  components: {
    Button,
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

.modal-request,
.modal-success {
  .modal-dialog {
    max-width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }

  .modal-body {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-1.75rem);
  }

  .modal-content {
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
  }

  .modal-wrapper {
    max-width: 424px;
  }

  .title {
    letter-spacing: 0.04em;
    color: var(--gray-950);
  }

  .subtitle,
  .text {
    color: var(--gray-950);
  }
}

.modal-request-desktop,
.modal-success-desktop {
  .close {
    transform: translate(-2.25rem, 2.25rem);
  }
}

.modal-request {
  .form-group {
    & > label {
      color: var(--gray-800);
    }
  }
}

.modal-request-mobile {
  .subtitle {
    color: var(--gray-750);
  }
}

.modal-success {
  .modal-icon {
    width: 2.375rem;
    height: 2.375rem;
  }
}
</style>
