<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
</script>

<template>
  <section
    id="comp-louy6qp3"
    tabindex="-1"
    class="Oqnisf comp-louy6qp3 wixui-section"
    data-block-level-container="ClassicSection"
  >
    <Splide
      :options="{
        type: 'loop',
        padding: { left: 'auto' },
        gup: 20,
        role: 'region',
        rewind: true,
        perPage: 1,
        perMove: 1,
        autoplay: true,
        interval: 5000,
      }"
      aria-label="Slide show gallery"
    >
      <SplideSlide>
        <img
          src="../assets/images/gallery/3ee397_6c7c468688e046e9b3b9bd0a374b1d9e~mv2.jpg"
          alt="Слайд с электродами МЭЗ"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="../assets/images/gallery/3ee397_20dcf05d2b93486f9254d66dd117ec4d~mv2.jpg"
          alt="Слайд с инструментами"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="../assets/images/gallery/3ee397_2df54979974e4eeca31102a580247ab2~mv2.jpg"
          alt="Слайд с электродами ESAB"
        />
      </SplideSlide>
    </Splide>
  </section>
</template>

<style lang="css" scoped>
.splide__slide img {
  width: 100vw;
  height: auto;
  margin: 0 auto;
  object-fit: cover;
}
</style>
