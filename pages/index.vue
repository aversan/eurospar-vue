<template>
  <div class="min-vh-100 d-flex flex-column">
    <div class="flex-grow-1">
      <Header />
      <main class="container-fluid px-0 overflow-x-hidden mx-auto">
        <MainHero />
        <HowContainer />
        <div class="section-divider"></div>
        <PrizeContainer />
        <div class="section-divider"></div>
        <WinnerContainer />
        <div class="section-divider"></div>
        <b-container fluid>
          <FaqContainer />
        </b-container>
      </main>
    </div>
    <Footer />
    <AlertCoockie />
    <ModalAddCheck />
    <ModalRequest />
  </div>
</template>

<script>
import Header from '@/components/shared/header';
import MainHero from '@/components/main/main-hero';
import HowContainer from '@/components/how/how-container';
import PrizeContainer from '@/components/prize/prize-container';
import WinnerContainer from '@/components/winner/winner-container';
import FaqContainer from '@/components/faq/faq-container';
import Footer from '@/components/shared/footer';
import AlertCoockie from '@/components/alert/alert-cookie';
import ModalAddCheck from '@/components/modal/modal-add-check';
import ModalRequest from '@/components/modal/modal-request';

export default {
  loading: false,
  components: {
    Header,
    MainHero,
    HowContainer,
    PrizeContainer,
    WinnerContainer,
    FaqContainer,
    Footer,
    AlertCoockie,
    ModalAddCheck,
    ModalRequest,
  },
};
</script>
