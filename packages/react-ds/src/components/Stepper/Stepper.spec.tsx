import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { completed } from '@venice/core/mocks/stepper-mocks'

import Stepper from './Stepper'

describe('<Stepper />', () => {
  it('should create a stepbar with 5 steps', () => {
    const { getByTestId } = render(<Stepper steps={completed} />)

    expect(getByTestId('stepper').children).toHaveLength(5)
  })
})
