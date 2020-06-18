import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { initial, started, completed } from '@venice/core/mocks/stepper'

import Stepper from './Stepper'

describe('<Stepper />', () => {
  it('should create a stepbar with 5 steps', () => {
    const { container } = render(<Stepper steps={initial} />)

    expect(container.getElementsByClassName('step')).toHaveLength(5)
  })

  it('should have the first 3 steps completed', () => {
    const { container } = render(<Stepper steps={started} />)

    const steps = container.getElementsByClassName('step')

    expect(steps[0]).toHaveClass('active')
    expect(steps[1]).toHaveClass('active')
    expect(steps[2]).toHaveClass('active')
  })

  it('should have all steps completed', () => {
    const { container } = render(<Stepper steps={completed} />)

    const steps = container.getElementsByClassName('step')

    expect(steps[0]).toHaveClass('active')
    expect(steps[1]).toHaveClass('active')
    expect(steps[2]).toHaveClass('active')
    expect(steps[3]).toHaveClass('active')
    expect(steps[4]).toHaveClass('active')
  })
})
