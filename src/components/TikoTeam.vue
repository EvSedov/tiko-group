<script setup lang="ts">
import TikoTeamMember from './TikoTeamMember.vue'
const team = [
  {
    photo: new URL('../assets/images/team/ksenia_kontieva.jpg', import.meta.url).href,
    fullName: ['Контиева', 'Ксения'],
    job: 'Управляющий',
    phone: '+7 913 740-03-63',
    email: '89137400363@MAIL.RU',
  },
  {
    photo: new URL('../assets/images/team/mikhail_kontiev.jpg', import.meta.url).href,
    fullName: ['Контиев', 'Михаил'],
    job: 'Начальник отдела продаж',
    phone: '+7 913 740-03-63',
    email: '89137400363@MAIL.RU',
  },
  {
    photo: new URL('../assets/images/team/kirill_viklushin.jpg', import.meta.url).href,
    fullName: ['Виклушкин', 'Кирилл'],
    job: 'Менеджер продаж',
    // phone: '+7 913 740-03-63',
    // email: '89137400363@MAIL.RU',
  },
  {
    photo: new URL('../assets/images/team/rodion_german.jpg', import.meta.url).href,
    fullName: ['Герман', 'Родион'],
    job: 'Менеджер продаж',
    // phone: '+7 913 740-03-63',
    // email: '89137400363@MAIL.RU',
  },
  {
    photo: new URL('../assets/images/team/anna_hostess.jpg', import.meta.url).href,
    fullName: ['Хозяйкина', 'Анна'],
    job: 'Главный бухгалтер',
    // phone: '+7 913 740-03-63',
    // email: '89137400363@MAIL.RU',
  },
]
</script>

<template>
  <section
    id="comp-louy6qp7"
    tabindex="-1"
    class="Oqnisf comp-louy6qp7 wixui-section"
    data-block-level-container="ClassicSection"
  >
    <div
      id="bgLayers_comp-louy6qp7"
      data-hook="bgLayers"
      data-motion-part="BG_LAYER comp-louy6qp7"
      class="MW5IWV"
    >
      <div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div>
      <div
        id="bgMedia_comp-louy6qp7"
        data-motion-part="BG_MEDIA comp-louy6qp7"
        class="VgO9Yg"
      ></div>
    </div>
    <div data-mesh-id="comp-louy6qp7inlineContent" data-testid="inline-content" class="">
      <!--$-->
      <div id="comp-ku28u2tz" class="comp-ku28u2tz CohWsy">
        <div data-testid="columns" class="V5AUxf">
          <!--$-->
          <div id="comp-ku28u2u7" class="comp-ku28u2u7 YzqVVZ">
            <div
              data-mesh-id="comp-ku28u2u7inlineContent-gridContainer"
              data-testid="mesh-container-content"
            >
              <!--$-->
              <div
                id="comp-ku28u2ug"
                class="HcOXKn SxM0TO QxJLC3 lq2cno YQcXTT comp-ku28u2ug wixui-rich-text"
                data-testid="richTextElement"
                ariaAttributes="[object Object]"
              >
                <h2
                  class="font_2"
                  style="
                    font-size: 44px;
                    font-family:
                      open sans,
                      sans-serif;
                    color: #2a2a2a;
                  "
                >
                  Наша команда
                </h2>
              </div>
              <div id="comp-ku28ueer">
                <div class="flex-wrap">
                  <TikoTeamMember
                    v-for="people in team"
                    :key="`${people.photo}-${people.fullName}`"
                    :photo="people.photo"
                    :full-name="people.fullName"
                    :job="people.job"
                    :phone="people.phone"
                    :email="people.email"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
[data-mesh-id='comp-ku28u2u7inlineContent'] {
  height: auto;
  width: 100%;
}

#comp-ku28u2tz {
  --bg-overlay-color: transparent;
  --bg-gradient: none;
  --padding: 0px;
  --margin: 0px;
  --firstChildMarginTop: -1px;
  --lastChildMarginBottom: -1px;
  --items-direction: row;
  margin-top: 60px;
  margin-left: 0;
  width: 100%;
  min-width: 980px;
  height: auto;
}

#comp-ku28u2u7 {
  --bg-overlay-color: rgb(255, 255, 255);
  --bg-gradient: none;
  --column-width: 980px;
  --column-flex: 980;
  width: 100%;
}

[data-mesh-id='comp-ku28u2u7inlineContent-gridContainer'] {
  display: grid;
  height: auto;
  width: 100%;
  min-height: 600px;
  grid-template-columns: 100px calc(100% - 200px) 100px;
  grid-template-rows: 200px 80%;
}

[data-mesh-id='comp-ku28u2u7inlineContent-gridContainer'] > [id='comp-ku28u2ug'] {
  grid-area: 1 / 2 / 2 / 3;
  justify-self: center;
  align-self: start;
}

[data-mesh-id='comp-ku28u2u7inlineContent-gridContainer'] > [id='comp-ku28ueer'] {
  margin: 0 50px;
  width: calc(100% - 100px);
  grid-area: 2 / 1 / 3 / 4;
  justify-self: start;
  align-self: baseline;
}

.flex-wrap {
  width: 100%;
  display: flex;
  gap: 8rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
}
</style>
