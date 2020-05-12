import { render } from '@testing-library/vue'

import '@testing-library/jest-dom'

import Spinner from './Spinner.vue'

describe('<Spinner />', () => {
  it('should have "default" classname when prop color is empty', () => {
    const { container } = render(Spinner)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "default" classname when prop color is "default"', () => {
    const { container } = render(Spinner, {
      props: {
        color: 'default',
      },
    })
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "primary" classname when prop color is "primary"', () => {
    const { container } = render(Spinner, {
      props: {
        color: 'primary',
      },
    })
    expect(container.firstChild).toHaveClass('primary')
  })

  it('should have "secondary" classname when prop color is "secondary"', () => {
    const { container } = render(Spinner, {
      props: {
        color: 'secondary',
      },
    })
    expect(container.firstChild).toHaveClass('secondary')
  })

  it('should have 36px as a default size', () => {
    const { container } = render(Spinner)
    expect(container.firstChild).toHaveStyle('height: 36px;')
    expect(container.firstChild).toHaveStyle('width: 36px;')
  })

  it('should have a 20px when prop size is "20"', () => {
    const { container } = render(Spinner, {
      props: {
        size: 20,
      },
    })
    expect(container.firstChild).toHaveStyle('height: 20px;')
    expect(container.firstChild).toHaveStyle('width: 20px;')
  })
})
