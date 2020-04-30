import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import CustomViewports from '@venice/core/storybook/config/customViewports'
import '@juntossomosmais/venice-react/dist/styles.css'
import 'loki/configure-react'

addParameters({
  viewport: {
    viewports: {
      ...CustomViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
})
