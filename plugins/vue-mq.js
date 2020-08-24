import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    // mobile: 576,
    // tablet: 992,
    mobile: 1200,
    desktop: Infinity,
  },
});
