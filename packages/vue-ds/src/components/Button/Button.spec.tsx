import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'

import '@testing-library/jest-dom'

import Button from './Button.vue'

describe('<Button />', () => {
  it('should have "default" classname when "color prop" is empty', () => {
    const { container } = render(Button)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "default" classname when "color prop" is "default"', () => {
    const { container } = render(Button, {
      props: {
        color: 'default',
      },
    })
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "primary" classname when "color prop" is "primary"', () => {
    const { container } = render(Button, {
      props: {
        color: 'primary',
      },
    })
    expect(container.firstChild).toHaveClass('primary')
  })

  it('should have "secondary" classname when "color prop" is "secondary"', () => {
    const { container } = render(Button, {
      props: {
        color: 'secondary',
      },
    })
    expect(container.firstChild).toHaveClass('secondary')
  })

  it('should have "filled" classname when "variant prop" is empty', () => {
    const { container } = render(Button)
    expect(container.firstChild).toHaveClass('filled')
  })

  it('should have "filled" classname when "variant prop" props is "filled"', () => {
    const { container } = render(Button, {
      props: {
        variant: 'filled',
      },
    })
    expect(container.firstChild).toHaveClass('filled')
  })

  it('should have "outlined" classname when "variant prop" props is "outlined"', () => {
    const { container } = render(Button, {
      props: {
        variant: 'outlined',
      },
    })
    expect(container.firstChild).toHaveClass('outlined')
  })

  it('should have "text" classname when "variant prop" props is "text"', () => {
    const { container } = render(Button, {
      props: {
        variant: 'text',
      },
    })
    expect(container.firstChild).toHaveClass('text')
  })

  it('should have "medium" classname when "size prop" is empty', () => {
    const { container } = render(Button)
    expect(container.firstChild).toHaveClass('medium')
  })

  it('should have "medium" classname when "size prop" is "medium"', () => {
    const { container } = render(Button, {
      props: {
        size: 'medium',
      },
    })
    expect(container.firstChild).toHaveClass('medium')
  })

  it('should have "small" classname when "size prop" is "small"', () => {
    const { container } = render(Button, {
      props: {
        size: 'small',
      },
    })
    expect(container.firstChild).toHaveClass('small')
  })

  it('should have "round-square" classname when "shape prop" is empty', () => {
    const { container } = render(Button)
    expect(container.firstChild).toHaveClass('round-square')
  })

  it('should have "round-square" classname when "shape prop" is "round-square"', () => {
    const { container } = render(Button, {
      props: {
        shape: 'round-square',
      },
    })
    expect(container.firstChild).toHaveClass('round-square')
  })

  it('should have "circle" classname when "shape prop" is "circle"', () => {
    const { container } = render(Button, {
      props: {
        shape: 'circle',
      },
    })
    expect(container.firstChild).toHaveClass('circle')
  })

  it('should have "startIcon" element when has "startIcon prop"', () => {
    const { container } = render(Button, {
      slots: {
        startIcon: '←',
      },
    })
    expect(container.firstChild).toContainHTML(
      `<span class="startIcon">←</span>`
    )
  })

  it('should have "endIcon" element when has "endIcon prop"', () => {
    const { container } = render(Button, {
      slots: {
        endIcon: '→',
      },
    })
    expect(container.firstChild).toContainHTML(`<span class="endIcon">→</span>`)
  })

  it('should be render element as <a> if has href', () => {
    const { container } = render(Button, {
      props: {
        href: 'href',
      },
    })
    expect(container.querySelector('a')).toBeInTheDocument()
  })

  it('should be render element as <button> if not has href', () => {
    const { container } = render(Button)
    expect(container.querySelector('button')).toBeInTheDocument()
  })

  it('should be call `click` when emit it', async () => {
    const wrapper = mount(Button)
    wrapper.vm.$emit('click')

    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('should have "isLoading" classname when has "isLoading prop"', () => {
    const { container } = render(Button, {
      props: {
        isLoading: true,
      },
    })
    expect(container.firstChild).toHaveClass('isLoading')
  })

  it('should have "Spinner" component when has "isLoading prop"', () => {
    const { container } = render(Button, {
      props: {
        isLoading: true,
      },
    })
    expect(container.querySelector('.loading')).toBeInTheDocument()
  })
})
