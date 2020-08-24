<template>
  <div>
    <div v-if="isDesktop" class="prize-list prize-list-desktop mt-6_5">
      <PrizeItem
        v-for="(item, id) in items"
        :key="id"
        :image-name="item.imageName"
        :title="item.title"
        :text="item.text"
      />
    </div>
    <swiper v-if="isMobile" ref="mySwiper" :options="swiperOptions" class="prize-list prize-list-mobile mt-5_5 mx-n3">
      <swiper-slide v-for="(item, id) in items" :key="id">
        <PrizeItem
          :image-name="item.imageName"
          :title="item.title"
          :text="item.text"
        />
      </swiper-slide>
      <div class="swiper-button-prev rounded-pill" title="Назад" slot="button-prev">
        <svgicon name="arrow-left" />
      </div>
      <div class="swiper-button-next rounded-pill" title="Вперед" slot="button-next">
        <svgicon name="arrow-right" />
      </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import PrizeItem from './prize-item';
import '@/components/icons/arrow-left';
import '@/components/icons/arrow-right';

export default {
  components: {
    PrizeItem,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 40,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      items: [
        {
          imageName: 'prize-01',
          title: 'Каждый день',
          text: 'Сертификат Digift card на 2000 руб.',
        },
        {
          imageName: 'prize-02',
          title: 'Каждую неделю',
          text: 'Сертификат спортмастер на 20 000 руб.',
        },
        {
          imageName: 'prize-03',
          title: 'Главный приз',
          text: 'Apple iPhone 11',
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

.prize-list-desktop {
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  justify-content: center;
}

.prize-list-mobile {
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 9.75rem;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 78px;
    width: 36px;
    z-index: 2;
    color: var(--black);
    cursor: pointer;
    @include transition($transition-base);

    &.swiper-button-disabled {
      color: var(--gray-575);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      width: 78px;
      height: 78px;
      border-radius: 100px;
      background-color: var(--yellow);
      z-index: -1;
      @include transition($transition-base);
    }

    .svg-icon {
      width: 13px;
      height: 13px;
    }
  }

  .swiper-button-prev::before {
    right: 0;
  }

  .swiper-button-next::before {
    left: 0;
  }

  .swiper-button-prev:hover::before,
  .swiper-button-next:hover::before {
    background-color: var(--yellow-dark);
  }

  .swiper-button-prev.swiper-button-disabled::before,
  .swiper-button-next.swiper-button-disabled::before {
    background-color: var(--gray-400);
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }
}
</style>
