import { boolean, select } from '@storybook/addon-knobs'

const sizes = ['large', 'medium', 'small']

export const knobButtonLoading = () => boolean('isLoading', false)

export const knobButtonSizes = () => select('Sizes', sizes, sizes[0])
