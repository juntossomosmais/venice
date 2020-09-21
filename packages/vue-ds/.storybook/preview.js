import { addParameters } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import CustomViewports from '@venice/core/storybook/config/customViewports'
import '@juntossomosmais/venice-vue/dist/reset.css'
import '@venice/core/storybook/styles/storybook.css'
import '@juntossomosmais/venice-vue/dist/styles.css'
import '@juntossomosmais/venice-icons/styles/storybook.css'
import '../src/fontello/css/jsm-icons.css'
import 'github-markdown-css/github-markdown.css'
import 'loki/configure-vue'

addParameters({
  viewport: {
    viewports: {
      ...CustomViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
})
