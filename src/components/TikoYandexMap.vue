<script setup lang="ts">
import { shallowRef } from 'vue'
import type { YMap } from '@yandex/ymaps3-types'
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
} from 'vue-yandex-maps'

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)
</script>

<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: [82.912884, 55.032433],
        zoom: 17,
      },
    }"
    width="100%"
    height="700px"
    :style="{ marginBottom: '10px' }"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />
    <yandex-map-default-marker :settings="{ coordinates: [82.912884, 55.032433] }" />
  </yandex-map>
</template>
