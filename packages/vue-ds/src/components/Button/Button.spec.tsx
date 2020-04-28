import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'

import Button from './Button.vue'

describe('<Button />', () => {
  it('should has "default" classname when prop color is empty', () => {
    const { container } = render(Button)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should has "default" classname when prop color is "default"', () => {
    const { container } = render(Button, {
      props: {
        color: 'default',
      },
    })
    expect(container.firstChild).toHaveClass('default')
  })

  it('should has "primary" classname when prop color is "primary"', () => {
    const { container } = render(Button, {
      props: {
        color: 'primary',
      },
    })
    expect(container.firstChild).toHaveClass('primary')
  })

  it('should has "secondary" classname when prop color is "secondary"', () => {
    const { container } = render(Button, {
      props: {
        color: 'secondary',
      },
    })
    expect(container.firstChild).toHaveClass('secondary')
  })

  it('should has "filled" classname when prop variant is empty', () => {
    const { container } = render(Button)
    expect(container.firstChild).toHaveClass('filled')
  })

  it('should has "filled" classname when prop variant props is "filled"', () => {
    const { container } = render(Button, {
      props: {
        variant: 'filled',
      },
    })
    expect(container.firstChild).toHaveClass('filled')
  })

  it('should has "outlined" classname when prop variant props is "outlined"', () => {
    const { container } = render(Button, {
      props: {
        variant: 'outlined',
      },
    })
    expect(container.firstChild).toHaveClass('outlined')
  })

  it('should has "text" classname when prop variant props is "text"', () => {
    const { container } = render(Button, {
      props: {
        variant: 'text',
      },
    })
    expect(container.firstChild).toHaveClass('text')
  })

  it('should has "small" classname when prop size props is "small"', () => {
    const { container } = render(Button, {
      props: {
        size: 'small',
      },
    })
    expect(container.firstChild).toHaveClass('small')
  })

  it('should be render element as <a> if has an href', () => {
    const { container } = render(Button, {
      props: {
        href: 'href',
      },
    })
    expect(container.querySelector('a')).toBeInTheDocument()
  })

  it('should be render element as <button> if not has an href', () => {
    const { container } = render(Button)
    expect(container.querySelector('button')).toBeInTheDocument()
  })
})
