import { render } from '@testing-library/vue'

import '@testing-library/jest-dom'

import Paper from './Paper.vue'

describe('<Paper />', () => {
  it('should have "paper" classname when render', () => {
    const { container } = render(Paper)
    expect(container.firstChild).toHaveClass('paper')
  })
})
