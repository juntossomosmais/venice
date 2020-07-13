import { boolean, select } from '@storybook/addon-knobs'

const openTypes = ['hover', 'click']

const sizes = ['large', 'medium']

export const knobSplitButtonOpenType = () =>
  select('Open Types', openTypes, openTypes[0])

export const knobSplitButtonIsFitMenu = () => boolean('isFitMenu', false)

export const knobSplitButtonSizes = () => select('Sizes', sizes, sizes[0])
