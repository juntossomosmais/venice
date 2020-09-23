import { render } from '@testing-library/vue'

import '@testing-library/jest-dom'

import Breadcrumb from './Breadcrumb.vue'

describe('<Breadcrumb />', () => {
  it('should have "Breadcrumb" classname when render', () => {
    const { container } = render(Breadcrumb)
    expect(container.firstChild).toHaveClass('breadcrumb')
  })

  it('should have "default" classname when "color prop" is "default"', () => {
    const { container } = render(Breadcrumb, {
      props: {
        color: 'default',
      },
    })
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "contrast" classname when "color prop" is "contrast"', () => {
    const { container } = render(Breadcrumb, {
      props: {
        color: 'contrast',
      },
    })
    expect(container.firstChild).toHaveClass('contrast')
  })
})
