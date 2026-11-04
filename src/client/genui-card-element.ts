/**
 * Vue GenUI renderer as a light-DOM custom element so the React conversation
 * slot can host cards without sharing a Vue app with DeepSeek Harness.
 *
 * Theme: observes `body[data-ds-dark-theme]` (DSH's stable theme contract,
 * set by the pre-plugin bootstrap) and feeds the resolved mode to
 * GenuiConfigProvider and HuiCharts schemas.
 */
import { computed, defineComponent, defineCustomElement, h, onMounted, onUnmounted, ref, type PropType } from 'vue'
import { GenuiConfigProvider } from '@opentiny/genui-sdk-vue/config-provider'
import { GenuiRenderer } from '@opentiny/genui-sdk-vue/renderer'
import type { ICustomAction } from '@opentiny/genui-sdk-vue/renderer'
import { plusMaterials } from '@opentiny/genui-sdk-materials-vue-opentiny-vue/materials'
import '@opentiny/tiny-robot/dist/style.css'
import { DSH_GENUI_CARD_TAG } from './genui-card-tag.ts'
import { DARK_ATTR, isDarkMode, parseThemedContent } from './genui-theme.ts'
import './genui-card-host.css'

export { DSH_GENUI_CARD_TAG }

let cardSeq = 0

const DshGenuiCard = defineComponent({
  props: {
    content: { type: String, default: '' },
    generating: { type: Boolean, default: false },
    isJsonComplete: { type: Boolean, default: true },
    customActions: {
      type: Object as PropType<Record<string, ICustomAction> | undefined>,
      default: undefined,
    },
  },
  setup(props) {
    const id = `dsh-genui-card-${++cardSeq}`
    const themeMode = ref<'light' | 'dark'>(isDarkMode() ? 'dark' : 'light')
    const themedContent = computed(() => (
      parseThemedContent(props.content, themeMode.value === 'dark', props.isJsonComplete)
    ))

    // Follow DSH host theme switches live (Settings → Appearance, or OS when
    // preference is "system"). body[data-ds-dark-theme] is the stable signal.
    let observer: MutationObserver | undefined
    onMounted(() => {
      observer = new MutationObserver(() => {
        const dark = isDarkMode()
        const next = dark ? 'dark' : 'light'
        if (themeMode.value !== next) {
          themeMode.value = next
        }
      })
      observer.observe(document.body, { attributes: true, attributeFilter: [DARK_ATTR] })
    })
    onUnmounted(() => void observer?.disconnect())

    return () => h(GenuiConfigProvider, {
      materials: plusMaterials,
      id,
      theme: themeMode.value,
    }, {
      default: () => h(GenuiRenderer, {
        content: themedContent.value.content,
        generating: props.generating,
        isJsonComplete: themedContent.value.isJsonComplete,
        customActions: props.customActions,
      }),
    })
  },
})

/** Vue 3.5: light DOM so TinyVue popovers/teleports and theme CSS work. */
export const DshGenuiCardElement = defineCustomElement(DshGenuiCard, { shadowRoot: false })

/** Register `dsh-genui-card` once per browser document. */
export function ensureDshGenuiCardDefined(): void {
  if (typeof customElements === 'undefined') return
  if (customElements.get(DSH_GENUI_CARD_TAG) !== undefined) return
  customElements.define(DSH_GENUI_CARD_TAG, DshGenuiCardElement)
}

ensureDshGenuiCardDefined()
