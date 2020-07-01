import { boolean, select } from '@storybook/addon-knobs'

const openTypes = ['hover', 'click']

export const knobSplitButtonOpenType = () =>
  select('Open Types', openTypes, openTypes[0])

export const knotSplitButtonIsFitMenu = () => boolean('isFitMenu', false)
