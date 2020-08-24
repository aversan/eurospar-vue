<template>
  <div class="how-list mt-5_5">
    <HowItem
      v-for="(item, id) in items"
      :key="id"
      :image-name="item.imageName"
      :title="item.title"
      :text="item.text"
    />
  </div>
</template>

<script>
import HowItem from './how-item';

export default {
  components: {
    HowItem,
  },
  data() {
    return {
      items: [
        {
          imageName: 'buy',
          title: '1. Покупай',
          text:
            "Купите два товара-участника акции: Lipton Ice Tea 0,5/1/1,5л., Lay's «Из печи» 80/120г, в одном чеке.",
        },
        {
          imageName: 'scan',
          title: '2. Присылай чеки',
          text: 'В WhatsApp/Viber на номер: +7 (988) 382-53-19',
        },
        {
          imageName: 'bonus',
          title: '3. Выигрывай призы',
          text:
            'Каждый день – 3 сертификата DiGift на 2000₽. Каждую неделю – 2 сертификата Спортматер на 20 000₽. Главный приз – Apple iPhone 11',
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

.how-list {
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  justify-content: center;

  @include media-breakpoint-down('xs') {
    grid-template-columns: 100%;
  }
}
</style>
