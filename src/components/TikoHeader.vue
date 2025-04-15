<script setup lang="ts">
import DropdownMenu from './DropdownMenu.vue'
import TikoLogo from './TikoLogo.vue'
import TikoOrder from './TikoOrder.vue'
</script>

<template>
  <header id="SITE_HEADER" class="xU8fqS SITE_HEADER wixui-header" tabindex="-1">
    <div class="U4Bvut _4XcTfy">
      <div class="CJF7A2">
        <div data-mesh-id="SITE_HEADERinlineContent" data-testid="inline-content" class="">
          <div
            data-mesh-id="SITE_HEADERinlineContent-gridContainer"
            data-testid="mesh-container-content"
          >
            <TikoLogo />
            <DropdownMenu />
            <TikoOrder />
          </div>
        </div>
      </div>
    </div>
    <div id="comp-kt8ru4l5" class="comp-kt8ru4l5 horizontal-line"></div>
  </header>
</template>

<style scoped>
#SITE_HEADER {
  --above-all-in-container: 10000;
  --bg: 255, 255, 255;
  --shd: none;
  --brwt: 0px;
  --brd: 47, 46, 46;
  --brwb: 0px;
  --bgctr: 255, 255, 255;
  --rd: 0px;
  --alpha-bg: 1;
  --alpha-bgctr: 0;
  --alpha-brd: 1;
  --boxShadowToggleOn-shd: none;
  --bg-overlay-color: transparent;
  --bg-gradient: none;
  --shc-mutated-brightness: 128, 128, 128;
  position: sticky !important;
  top: var(--ads-height);
  margin: 0 auto;
  width: 100%;
  min-width: 0;
  padding-top: 20px;
  background-color: var(
    --screenwidth-corvid-background-color,
    rgba(var(--bg, var(--color_11, color_11)), var(--alpha-bg, 1))
  );
  border-bottom: var(--brwb, 0) solid
    var(
      --screenwidth-corvid-border-color,
      rgba(var(--brd, var(--color_15, color_15)), var(--alpha-brd, 1))
    );
  border-top: var(--brwt, 0) solid
    var(
      --screenwidth-corvid-border-color,
      rgba(var(--brd, var(--color_15, color_15)), var(--alpha-brd, 1))
    );
  box-shadow: var(--shd, 0 0 5px rgba(0, 0, 0, 0.7));
  z-index: 50;
}

[id='SITE_HEADER'] > [id='comp-kt8ru4l5'] {
  position: relative;
  margin: 14px 0 6px;
}

#comp-kt8ru4l5 {
  --lnw: 3px;
  --brd: var(--color_14);
  --alpha-brd: 0.51;
}

#comp-kt8ru4l5 {
  width: 100%;
  left: 0;
  margin-left: 0;
  min-width: initial;
  height: 3px;
  transform-origin: center 1.5px;
}

.horizontal-line {
  border-top: var(--lnw, 2px) solid rgba(var(--brd, var(--color_15, color_15)), var(--alpha-brd, 1));
  box-sizing: border-box;
  height: 0;
}

[data-mesh-id='SITE_HEADERinlineContent-gridContainer'] {
  position: static;
  display: grid;
  grid-template-columns: 250px 1fr 180px;
  grid-template-rows: 100%;
  justify-items: center;
  align-items: center;
  height: auto;
  width: 100%;
  min-height: auto;
}

[data-mesh-id='SITE_HEADERinlineContent-gridContainer'] > [id='comp-kt6tx3tj'] {
  /* position: relative; */
  /* margin: 0px 0px 53px calc((100% - 980px) * 0.5); */
  /* left: -135px; */
  /* justify-self: center; */
  /* align-self: center; */
  grid-area: 1 / 1 / 2 / 2;
}

[data-mesh-id='SITE_HEADERinlineContent-gridContainer'] > [id='comp-ksk3vij4'] {
  /* position: relative; */
  /* margin: 0px 0px 53px calc((100% - 980px) * 0.5); */
  /* left: 260px; */
  /* justify-self: start; */
  /* align-self: start; */
  grid-area: 1 / 2 / 2 / 3;
}

[data-mesh-id='SITE_HEADERinlineContent-gridContainer'] > [id='comp-ku3u4yr9'] {
  /* position: relative; */
  /* margin: 5px 0px 31px calc((100% - 980px) * 0.5); */
  /* left: -69px; */
  /* justify-self: start; */
  /* align-self: start; */
  grid-area: 1 / 3 / 2 / 4;
}

/* [data-mesh-id='SITE_HEADERinlineContent-gridContainer'] > [id='comp-ksk3nk1i'] { */
/* position: relative; */
/* margin: 10px 0px -36px calc((100% - 980px) * 0.5); */
/* left: 865px; */
/* grid-area: 1 / 1 / 2 / 2; */
/* justify-self: start; */
/* align-self: start; */
/* } */

/* [data-mesh-id='SITE_HEADERinlineContent-gridContainer'] > [id='comp-kwx2785c'] {
  position: relative;
  margin: 2px 0px 31px calc((100% - 980px) * 0.5);
  left: 815px;
  grid-area: 4 / 1 / 5 / 2;
  justify-self: start;
  align-self: start;
} */

/* [data-mesh-id='SITE_HEADERinlineContent-gridContainer'] > [id='comp-kwx270rd'] {
  position: relative;
  margin: 0px 0px 31px calc((100% - 980px) * 0.5);
  left: 945px;
  grid-area: 4 / 1 / 5 / 2;
  justify-self: start;
  align-self: start;
} */

/* [data-mesh-id='SITE_HEADERinlineContent-gridContainer'] > [id='comp-kwyrcx6c'] {
  position: relative;
  margin: 3px 0px 30px calc((100% - 980px) * 0.5);
  left: 1011px;
  grid-area: 4 / 1 / 5 / 2;
  justify-self: start;
  align-self: start;
} */
</style>
