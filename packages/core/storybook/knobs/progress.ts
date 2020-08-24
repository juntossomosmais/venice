import { number, text } from '@storybook/addon-knobs'

export const knobProgressValue = () => number('Value', 50)
export const knobProgressColor = () => text('Color', 'secondary')
