import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'

import { initial, started, completed } from '@venice/core/mocks/stepper'

import Stepper from './Stepper.vue'

describe('<Stepper />', () => {
  it('should create a stepbar with 5 steps', () => {
    const { container } = render(Stepper, {
      props: {
        steps: initial,
      },
    })

    expect(container.querySelectorAll('.step')).toHaveLength(5)
  })

  it('should have the first 3 steps completed', () => {
    const { container } = render(Stepper, {
      props: {
        steps: started,
      },
    })

    const steps = container.querySelectorAll('.step')

    expect(steps[0]).toHaveClass('active')
    expect(steps[1]).toHaveClass('active')
    expect(steps[2]).toHaveClass('active')
  })

  it('should have all steps completed', () => {
    const { container } = render(Stepper, {
      props: {
        steps: completed,
      },
    })

    const steps = container.querySelectorAll('.step')

    expect(steps[0]).toHaveClass('active')
    expect(steps[1]).toHaveClass('active')
    expect(steps[2]).toHaveClass('active')
    expect(steps[3]).toHaveClass('active')
    expect(steps[4]).toHaveClass('active')
  })
})
