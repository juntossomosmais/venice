import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'

import { completed } from '@venice/core/mocks/stepper-mocks'

import Stepper from './Stepper.vue'

describe('<Stepper />', () => {
  it('should create a stepbar with 5 steps', () => {
    const { getByTestId } = render(Stepper, {
      props: {
        steps: completed,
      },
    })

    expect(getByTestId('stepper').children).toHaveLength(5)
  })
})
