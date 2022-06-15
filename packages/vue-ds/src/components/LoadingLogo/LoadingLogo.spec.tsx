import { render } from '@testing-library/vue'

import '@testing-library/jest-dom'

import LoadingLogo from './LoadingLogo.vue'

describe('<LoadingLogo />', () => {
  it('should render the loading logo', () => {
    const { container } = render(LoadingLogo)
    expect(container.firstChild).toHaveClass('JSMLoading__logo')
  })
})
