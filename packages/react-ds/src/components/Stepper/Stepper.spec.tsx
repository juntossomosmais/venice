import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { initial, started, completed } from '@venice/core/mocks/stepper'

import Stepper from './Stepper'

describe('<Stepper />', () => {
  it('should create a stepbar with 5 steps', () => {
    const { getByTestId } = render(<Stepper steps={initial} />)

    expect(getByTestId('stepper').children).toHaveLength(5)
  })

  it('should have the first 3 steps completed', () => {
    const { getByTestId } = render(<Stepper steps={started} />)

    const stepper = getByTestId('stepper')

    expect(stepper.children[0]).toHaveClass('active')
    expect(stepper.children[1]).toHaveClass('active')
    expect(stepper.children[2]).toHaveClass('active')
  })

  it('should have all steps completed', () => {
    const { getByTestId } = render(<Stepper steps={completed} />)

    const stepper = getByTestId('stepper')

    expect(stepper.children[0]).toHaveClass('active')
    expect(stepper.children[1]).toHaveClass('active')
    expect(stepper.children[2]).toHaveClass('active')
    expect(stepper.children[3]).toHaveClass('active')
    expect(stepper.children[4]).toHaveClass('active')
  })
})
