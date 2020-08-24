<template>
  <div class="faq-list mt-5 mt-xl-7_5" role="tab-list">
    <FaqItem
      v-for="(item, id) in items"
      :key="id"
      :id="`accordion-0${id}`"
      :title="item.title"
      :text="item.text"
    />
  </div>
</template>

<script>
import FaqItem from './faq-item';

export default {
  components: {
    FaqItem,
  },
  data() {
    return {
      items: [
        {
          title: 'Сроки проведения акции?',
          text:
            'Период регистрации чеков: 0:00:00 1 сентября 2020 года по 23:59:59 30 сентября 2020 года включительно, по московскому времени. Период выдачи призов: до 19 октября 2020 включительно.',
        },
        {
          title: 'Как принять участие в акции?',
          text:
            'Период регистрации чеков: 0:00:00 1 сентября 2020 года по 23:59:59 30 сентября 2020 года включительно, по московскому времени. Период выдачи призов: до 19 октября 2020 включительно.',
        },
        {
          title: 'Какая продукция участвует в акции?',
          text:
            'Период регистрации чеков: 0:00:00 1 сентября 2020 года по 23:59:59 30 сентября 2020 года включительно, по московскому времени. Период выдачи призов: до 19 октября 2020 включительно.',
        },
        {
          title: 'Где приобрести акционную продукцию?',
          text:
            'Период регистрации чеков: 0:00:00 1 сентября 2020 года по 23:59:59 30 сентября 2020 года включительно, по московскому времени. Период выдачи призов: до 19 октября 2020 включительно.',
        },
        {
          title: 'Как принять участие в акции?',
          text:
            'Период регистрации чеков: 0:00:00 1 сентября 2020 года по 23:59:59 30 сентября 2020 года включительно, по московскому времени. Период выдачи призов: до 19 октября 2020 включительно.',
        },
        {
          title: 'Какая продукция участвует в акции?',
          text:
            'Период регистрации чеков: 0:00:00 1 сентября 2020 года по 23:59:59 30 сентября 2020 года включительно, по московскому времени. Период выдачи призов: до 19 октября 2020 включительно.',
        },
        {
          title: 'Где приобрести акционную продукцию?',
          text:
            'Период регистрации чеков: 0:00:00 1 сентября 2020 года по 23:59:59 30 сентября 2020 года включительно, по московскому времени. Период выдачи призов: до 19 октября 2020 включительно.',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';

.faq-list {
  .faq-item {
    &:not(:last-child)::before {
      content: '';
      position: absolute;
      left: 2rem;
      right: 2rem;
      bottom: 0;
      height: 1px;
      background-color: rgba(180, 196, 204, .4);

      @include media-breakpoint-down('xs') {
        left: 1rem;
        right: 1rem;
      }
    }

    &:first-child {
      padding-top: 1.5rem;

      @include media-breakpoint-down('xs') {
        padding-top: 0.5rem;
      }
    }

    &:last-child {
      padding-bottom: 1.5rem;

      @include media-breakpoint-down('xs') {
        padding-bottom: 0.5rem;
      }
    }

    &:not(:last-child) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:not(:first-child) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
}
</style>
