<template>
  <div>
    <div
      v-if="isDesktop"
      :class="{
        'winner-list-container winner-list-container-desktop mt-5_25 mx-auto': true,
      }"
    >
      <b-button-group class="winner-buttons">
        <b-button class="text-uppercase winner-btn active">Ежедневно</b-button>
        <b-button class="text-uppercase winner-btn">Главный приз</b-button>
        <b-button class="text-uppercase winner-btn">Еженедельно</b-button>
      </b-button-group>
      <div v-if="isDesktop" class="winner-list mt-3_75">
        <WinnerItemDesktop
          v-for="(item, id) in items"
          :key="id"
          :title="item.title"
          :phone="item.phone"
          :date="item.date"
        />
      </div>
      <div class="mt-3 text-center">
        <Button class="winner-more" text="Показать еще" />
      </div>
    </div>
    <swiper
      v-if="isMobile"
      ref="mySwiper"
      :options="swiperOptions"
      class="winner-list winner-list-mobile mt-4_5 mx-n3"
    >
      <swiper-slide v-for="(item, id) in items" :key="id">
        <WinnerItemMobile
          :title="item.title"
          :phone="item.phone"
          :date="item.date"
          :image="item.image"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import Button from '@/components/shared/button';
import WinnerItemDesktop from './winner-item-desktop';
import WinnerItemMobile from './winner-item-mobile';

export default {
  components: {
    WinnerItemDesktop,
    WinnerItemMobile,
    Swiper,
    SwiperSlide,
    Button,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 16,
        centeredSlides: true,
        slidesPerView: 2,
        initialSlide: 1,
      },
      items: [
        {
          title: 'Сертификат Digift card',
          phone: '+79624***824',
          date: '4 августа',
          image: 'http://placehold.it/116x116',
        },
        {
          title: 'Сертификат Digift card',
          phone: '+79624***824',
          date: '4 августа',
          image: 'http://placehold.it/116x116',
        },
        {
          title: 'Сертификат Digift card',
          phone: '+79624***824',
          date: '4 августа',
          image: 'http://placehold.it/116x116',
        },
        {
          title: 'Сертификат Digift card',
          phone: '+79624***824',
          date: '4 августа',
          image: 'http://placehold.it/116x116',
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$mq === 'mobile';
    },
    isDesktop() {
      return this.$mq === 'desktop';
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import 'assets/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~swiper/swiper.scss';

.winner-list-container-desktop {
  max-width: 600px;

  .winner-buttons {
    display: grid;
    grid-template-columns: 33.333% 33.333% 33.333%;
  }

  .winner-btn {
    background-color: var(--light);

    @include hover-focus() {
      background-color: var(--yellow-light);
    }

    &.active {
      background-color: var(--yellow);
    }
  }

  .winner-list {
    display: grid;
    grid-row-gap: 0.5rem;
  }

  .winner-more {
    min-width: 14rem;
  }
}
</style>
