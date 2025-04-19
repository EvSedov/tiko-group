<script lang="ts" setup>
const { photo, fullName, job, phone, email } = defineProps({
  photo: String,
  fullName: Array,
  job: String,
  phone: String,
  email: String,
})
</script>

<template>
  <div class="team-card">
    <!--Фотография-->
    <div id="comp-ku28u2x0" class="dWLwCn comp-ku28u2x0 wixui-image">
      <div data-testid="linkElement" class="mGoGm2">
        <img class="HlRz5e lDHlrQ" :src="photo" :alt="fullName?.join(' ')" loading="lazy" />
      </div>
    </div>
    <!--Персональные данные-->
    <div
      id="comp-ku28u2x6"
      class="HcOXKn SxM0TO QxJLC3 lq2cno YQcXTT comp-ku28u2x6 wixui-rich-text"
      data-testid="richTextElement"
      ariaAttributes="[object Object]"
    >
      <h3
        v-for="(data, index) in fullName"
        :key="`${index}-${data}`"
        class="font_0"
        style="font-size: 18px; line-height: 0.8em; text-align: center"
      >
        <span
          style="
            font-size: 18px;
            font-family:
              open sans,
              sans-serif;
            color: #0f0f0f;
            font-weight: normal;
          "
        >
          {{ data }}
        </span>
      </h3>
    </div>
    <!--Должность-->
    <div
      id="comp-ku28u2xi"
      class="HcOXKn SxM0TO QxJLC3 lq2cno YQcXTT comp-ku28u2xi wixui-rich-text"
      data-testid="richTextElement"
      ariaAttributes="[object Object]"
    >
      <h3 class="font_0" style="font-size: 14px; line-height: 0.8em; text-align: center">
        <span
          style="
            font-size: 14px;
            font-family:
              open sans,
              sans-serif;
            color: #0f0f0f;
            font-weight: normal;
          "
          >{{ job }}</span
        >
      </h3>
    </div>
    <!--Контакты-->
    <div
      id="comp-ku28u2xo"
      class="HcOXKn SxM0TO QxJLC3 lq2cno YQcXTT comp-ku28u2xo wixui-rich-text"
      data-testid="richTextElement"
      ariaAttributes="[object Object]"
    >
      <p class="font_8" style="font-size: 14px; line-height: 1.3em; text-align: center">
        <span style="font-size: 14px" class=""
          ><span style="color: #000000" class=""
            ><span
              style="font-family: helvetica-w01-light, helvetica-w02-light, sans-serif"
              class=""
              >{{ phone }}</span
            ></span
          ></span
        >
      </p>

      <p class="font_8" style="font-size: 14px; line-height: 1.3em; text-align: center">
        <span
          style="
            font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
            font-size: 14px;
            color: #000000;
          "
        >
          <a data-auto-recognition="true" :href="`mailto:${email}`" class="">{{ email }}</a>
        </span>
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
}

#comp-ku28u2xi {
  width: 164px;
  height: auto;
}

#comp-ku28u2x0 {
  --shd: none;
  --brw: 0px;
  --brd: 255, 255, 255;
  --contentPaddingLeft: 0px;
  --contentPaddingRight: 0px;
  --contentPaddingBottom: 0px;
  --contentPaddingTop: 0px;
  --alpha-brd: 1;
  --boxShadowToggleOn-shd: none;
  --height: 102px;
  --width: 101px;
  width: 30em;
  height: auto;
}

.mGoGm2 {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}

.dWLwCn .mGoGm2 {
  background-color: rgba(var(--brd, var(--color_11, color_11)), var(--alpha-brd, 1));
  border-color: rgba(var(--brd, var(--color_11, color_11)), var(--alpha-brd, 1));
  border-radius: 5px;
  border-style: solid;
  border-width: var(--brw, 2px);
  box-shadow: var(--shd, 0 1px 3px rgba(0, 0, 0, 0.5));
  display: block;
  overflow: hidden;
}

.lDHlrQ {
  min-height: var(--image-min-height);
  min-width: var(--image-min-width);
  object-fit: cover;
  object-position: 50% 50%;
}

.lDHlrQ img,
img.lDHlrQ {
  filter: var(--filter-effect-svg-url);
  -webkit-mask-image: var(--mask-image, none);
  mask-image: var(--mask-image, none);
  -webkit-mask-position: var(--mask-position, 0);
  mask-position: var(--mask-position, 0);
  -webkit-mask-repeat: var(--mask-repeat, no-repeat);
  mask-repeat: var(--mask-repeat, no-repeat);
  -webkit-mask-size: var(--mask-size, 100% 100%);
  mask-size: var(--mask-size, 100% 100%);
  -o-object-position: var(--object-position);
  object-position: var(--object-position);
}

.dWLwCn .lDHlrQ img {
  box-shadow: 0 0 0 #000;
  position: static;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.dWLwCn .lDHlrQ {
  border-radius: 5%;
  overflow: hidden;
}
</style>
