<script setup lang="ts">
import TikoMaterialsItem from './TikoMaterialsItem.vue'

const materialsPart1 = [
  'Электроды, сварочная проволока',
  'Сварочное оборудование: Сварочные аппараты, держатель электродов, клеммы массы, сварочные маски',
  'Круги отрезные, шлифовальные, лепестковые, алмазные и пильные диски',
  'Проволока вязальная, сетка рабица',
  'Сетка кладочная, сетка малярная, сетка штукатурная',
  'Грунтовки, эмали, растворители, цинол',
  'Мастики, праймеры, рулонная гидроизоляция',
  'Средства индивидуальной защиты: перчатки, рукавицы, краги, респираторы, очки защитные, каски, дождевики',
  'Ручной инструмент: лопаты, метлы, уровни, рулетки, буры и др.',
]
const materialsPart2 = [
  'Геодезическое оборудование: уровни, нивелиры, штативы, тепловизоры, пирометры',
  'Электрика: вилки, колодки, кабель, лампы, щиты и т.д.',
  'Электроинструмент: дрели, шуруповерты, лобзики, миксеры, перфораторы, углошлифовальные машины, строительные фены',
  'Пена монтажная, герметики, очиститель',
  'Стропы: текстильные, канатные, цепные',
  'Гипсокартон, гипсоволокно, подвесы и профиль для ГКЛ',
  'ДВП, ДСП, ОСБ, Фанера',
  'Крепёж: гвозди, саморезы, дюбеля, заклёпки, стяжки',
  'Патроны и дюбеля для строительного монтажного пистолета',
  'Сухие строительные смеси',
]
</script>

<template>
  <section
    id="comp-louy6qp4"
    tabindex="-1"
    class="Oqnisf comp-louy6qp4 wixui-section"
    data-block-level-container="ClassicSection"
  >
    <div
      id="bgLayers_comp-louy6qp4"
      data-hook="bgLayers"
      data-motion-part="BG_LAYER comp-louy6qp4"
      class="MW5IWV"
    >
      <div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div>
      <div
        id="bgMedia_comp-louy6qp4"
        data-motion-part="BG_MEDIA comp-louy6qp4"
        class="VgO9Yg"
      ></div>
    </div>
    <div data-mesh-id="comp-louy6qp4inlineContent" data-testid="inline-content" class="">
      <div
        data-mesh-id="comp-louy6qp4inlineContent-gridContainer"
        data-testid="mesh-container-content"
      >
        <div
          id="comp-ku28u2ii"
          class="Vd6aQZ ignore-focus comp-ku28u2ii"
          tabindex="-1"
          role="region"
          aria-label="Продукция"
        >
          <span class="mHZSwn">Продукция</span>
        </div>
        <!--$-->
        <div
          id="comp-ku28u2iw"
          class="HcOXKn c9GqVL QxJLC3 lq2cno YQcXTT comp-ku28u2iw wixui-rich-text"
          data-testid="richTextElement"
          ariaAttributes="[object Object]"
        >
          <p class="font_8" style="font-size: 22px; line-height: 1.2em">
            <span style="letter-spacing: normal" class=""
              ><span style="font-size: 22px" class=""
                ><span class="color_15"
                  ><span
                    style="
                      font-family:
                        open sans,
                        sans-serif;
                    "
                    class=""
                    >Компания ООО &ldquo;ТИКО Групп&rdquo; специализируется на снабжении
                    строительных объектов такими материалами как:</span
                  ></span
                ></span
              ></span
            >
          </p>

          <p class="font_8 color_15" style="font-size: 14px; line-height: 1.2em">
            <span>​</span>
          </p>
        </div>

        <ul
          id="comp-ku28u2jw"
          class="HcOXKn SxM0TO QxJLC3 lq2cno YQcXTT comp-ku28u2jw wixui-rich-text"
          data-testid="richTextElement"
          ariaAttributes="[object Object]"
        >
          <TikoMaterialsItem
            v-for="(item, index) in materialsPart1"
            :key="`${index}-${item}`"
            :title="item"
          />
        </ul>
        <ul
          id="comp-ku28u2k3"
          class="HcOXKn SxM0TO QxJLC3 lq2cno YQcXTT comp-ku28u2k3 wixui-rich-text"
          data-testid="richTextElement"
          ariaAttributes="[object Object]"
        >
          <TikoMaterialsItem
            v-for="(item, index) in materialsPart2"
            :key="`${index}-${item}`"
            :title="item"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
#comp-ku28u2jw {
  --min-height: 10px;
}

#comp-ku28u2jw {
  width: 409px;
  height: auto;
}

[data-mesh-id='comp-louy6qp4inlineContent-gridContainer'] {
  position: static;
  display: grid;
  height: auto;
  width: 100%;
  min-height: 551px;
  grid-template-rows: repeat(2, min-content) 1fr;
  grid-template-columns: 100%;
}

[data-mesh-id='comp-louy6qp4inlineContent-gridContainer'] > [id='comp-ku28u2ii'] {
  position: relative;
  margin: 0px 0 50px 0;
  left: 0;
  grid-area: 1 / 1 / 2 / 2;
  justify-self: stretch;
  align-self: start;
}

[data-mesh-id='comp-louy6qp4inlineContent-gridContainer'] > [id='comp-ku28u2iw'] {
  position: relative;
  margin: 0px 0px 20px calc((100% - 980px) * 0.5);
  left: 41px;
  grid-area: 2 / 1 / 3 / 2;
  justify-self: start;
  align-self: start;
}

[data-mesh-id='comp-louy6qp4inlineContent-gridContainer'] > [id='comp-ku28u2k3'] {
  position: relative;
  margin: 0px 0px 10px calc((100% - 980px) * 0.5);
  left: 499px;
  grid-area: 3 / 1 / 4 / 2;
  justify-self: start;
  align-self: start;
}

[data-mesh-id='comp-louy6qp4inlineContent-gridContainer'] > [id='comp-ku28u2jw'] {
  position: relative;
  margin: 0px 0px 60px calc((100% - 980px) * 0.5);
  left: 38px;
  grid-area: 3 / 1 / 4 / 2;
  justify-self: start;
  align-self: start;
}
</style>
