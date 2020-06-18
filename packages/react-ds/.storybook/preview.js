import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import CustomViewports from '@venice/core/storybook/config/customViewports'
import '@juntossomosmais/venice-vue/dist/reset.css'
import '@venice/core/storybook/styles/storybook.css'
import '@juntossomosmais/venice-vue/dist/styles.css'
import 'loki/configure-react'

addParameters({
  viewport: {
    viewports: {
      ...CustomViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
})
