import { render } from '@testing-library/vue'

import '@testing-library/jest-dom'

import LogoAnimation from './LogoAnimation.vue'

describe('<LogoAnimation />', () => {
  it('should render the loading logo', () => {
    const { container } = render(LogoAnimation)
    expect(container.firstChild).toHaveClass('JSMAnimation__logo')
  })
})
