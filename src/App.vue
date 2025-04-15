<script setup lang="ts">
import AboutCompany from './components/AboutCompany.vue'
import BackgroundGroup from './components/BackgroundGroup.vue'
import Certificates from './components/Certificates.vue'
import FeedbackForm from './components/FeedbackForm.vue'
import Gallery from './components/Gallery.vue'
import Materials from './components/Materials.vue'
import ScrollToBottom from './components/ScrollToBottom.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import TikoTeam from './components/TikoTeam.vue'
import TikoFooter from './components/TikoFooter.vue'
import TikoHeader from './components/TikoHeader.vue'

// const bodyCacheable = true
// const exclusionReason = { shouldRender: true, forced: false }
// const ssrInfo = {
//   cacheExclusionReason: '',
//   renderBodyTime: 813,
//   renderTimeStamp: 1743411094416,
// }

// if (
//   window.ResizeObserver &&
//   (!window.PerformanceObserver ||
//     !PerformanceObserver.supportedEntryTypes ||
//     PerformanceObserver.supportedEntryTypes.indexOf('paint') === -1)
// ) {
//   new ResizeObserver(function (entries, observer) {
//     entries.some(function (entry) {
//       const contentRect = entry.contentRect
//       if (contentRect.width > 0 && contentRect.height > 0) {
//         requestAnimationFrame(function (now) {
//           window.wixFirstPaint = now
//           dispatchEvent(new CustomEvent('wixFirstPaint'))
//         })
//         observer.disconnect()
//         return true
//       }
//     })
//   }).observe(document.body)
// }
</script>

<template>
  <div id="SITE_CONTAINER">
    <div id="main_MF" class="main_MF">
      <ScrollToTop />
      <BackgroundGroup />
      <div id="site-root" class="overflow-clip-in-mobile site-root">
        <!--$-->
        <div
          id="masterPage"
          class="mesh-layout overflow-x-clip-in-mobile masterPage css-editing-scope"
        >
          <TikoHeader />
          <main id="PAGES_CONTAINER" class="PAGES_CONTAINER" tabindex="-1" data-main-content="true">
            <div id="SITE_PAGES" class="JsJXaX SITE_PAGES">
              <div id="a6zlk" class="dBAkHi a6zlk">
                <div class="PFkO7r wixui-page" data-testid="page-bg"></div>
                <div class="HT5ybB">
                  <div id="Containera6zlk" class="Containera6zlk SPY_vo">
                    <div data-mesh-id="Containera6zlkinlineContent" data-testid="inline-content">
                      <div
                        data-mesh-id="Containera6zlkinlineContent-gridContainer"
                        data-testid="mesh-container-content"
                      >
                        <Gallery />
                        <Materials />
                        <AboutCompany />
                        <TikoTeam />
                        <FeedbackForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <TikoFooter />
        </div>
      </div>
      <ScrollToBottom />
    </div>
  </div>
</template>

<style scoped>
#comp-ku28u35u {
  visibility: hidden !important;
}

.horizontal-line {
  border-top: var(--lnw, 2px) solid rgba(var(--brd, var(--color_15, color_15)), var(--alpha-brd, 1));
  box-sizing: border-box;
  height: 0;
}
</style>
