import { mount } from '@vue/test-utils'

import '@testing-library/jest-dom'

import Button from './Button.vue'

describe('<Button />', () => {
  it('should have "default" classname when "color prop" is empty', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('default')
  })

  it('should have "default" classname when "color prop" is "default"', () => {
    const wrapper = mount(Button, {
      propsData: {
        color: 'default',
      },
    })
    expect(wrapper.classes()).toContain('default')
  })

  it('should have "primary" classname when "color prop" is "primary"', () => {
    const wrapper = mount(Button, {
      propsData: {
        color: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('primary')
  })

  it('should have "secondary" classname when "color prop" is "secondary"', () => {
    const wrapper = mount(Button, {
      propsData: {
        color: 'secondary',
      },
    })
    expect(wrapper.classes()).toContain('secondary')
  })

  it('should have "filled" classname when "variant prop" is empty', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('filled')
  })

  it('should have "filled" classname when "variant prop" propsData is "filled"', () => {
    const wrapper = mount(Button, {
      propsData: {
        variant: 'filled',
      },
    })
    expect(wrapper.classes()).toContain('filled')
  })

  it('should have "outlined" classname when "variant prop" propsData is "outlined"', () => {
    const wrapper = mount(Button, {
      propsData: {
        variant: 'outlined',
      },
    })
    expect(wrapper.classes()).toContain('outlined')
  })

  it('should have "text" classname when "variant prop" propsData is "text"', () => {
    const wrapper = mount(Button, {
      propsData: {
        variant: 'text',
      },
    })
    expect(wrapper.classes()).toContain('text')
  })

  it('should have "large" classname when "size prop" is empty', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('large')
  })

  it('should have "large" classname when "size prop" is "large"', () => {
    const wrapper = mount(Button, {
      propsData: {
        size: 'large',
      },
    })
    expect(wrapper.classes()).toContain('large')
  })

  it('should have "medium" classname when "size prop" is "medium"', () => {
    const wrapper = mount(Button, {
      propsData: {
        size: 'medium',
      },
    })
    expect(wrapper.classes()).toContain('medium')
  })

  it('should have "small" classname when "size prop" is "small"', () => {
    const wrapper = mount(Button, {
      propsData: {
        size: 'small',
      },
    })
    expect(wrapper.classes()).toContain('small')
  })

  it('should have "round-square" classname when "shape prop" is empty', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('round-square')
  })

  it('should have "round-square" classname when "shape prop" is "round-square"', () => {
    const wrapper = mount(Button, {
      propsData: {
        shape: 'round-square',
      },
    })
    expect(wrapper.classes()).toContain('round-square')
  })

  it('should have "circle" classname when "shape prop" is "circle"', () => {
    const wrapper = mount(Button, {
      propsData: {
        shape: 'circle',
      },
    })
    expect(wrapper.classes()).toContain('circle')
  })

  it('should have "startIcon" element when has "startIcon prop"', () => {
    const wrapper = mount(Button, {
      slots: {
        startIcon: '←',
      },
    })
    const endIcon = wrapper.find('.endIcon')

    expect(wrapper.find('.startIcon').html()).toBe(
      `<span class="startIcon">←</span>`
    )
    expect(endIcon.exists()).toBeFalsy()
  })

  it('should have "endIcon" element when has "endIcon prop"', () => {
    const wrapper = mount(Button, {
      slots: {
        endIcon: '→',
      },
    })
    const startIcon = wrapper.find('.startIcon')

    expect(startIcon.exists()).toBeFalsy()
    expect(wrapper.find('.endIcon').html()).toBe(
      `<span class="endIcon">→</span>`
    )
  })

  it('should be add a href in <a> if it has href', () => {
    const wrapper = mount(Button, {
      propsData: {
        href: 'href',
      },
    })
    expect(wrapper.find('a[href="href"]').exists()).toBeTruthy()
  })

  it('should be mount element as <button> if not has href', () => {
    const wrapper = mount(Button)
    expect(wrapper.find('button').exists()).toBeTruthy()
  })

  it('should have "isLoading" classname when has "isLoading prop"', () => {
    const wrapper = mount(Button, {
      propsData: {
        isLoading: true,
      },
    })
    expect(wrapper.classes()).toContain('isLoading')
  })

  it('should have "Spinner" component when has "isLoading prop"', () => {
    const wrapper = mount(Button, {
      propsData: {
        isLoading: true,
      },
    })
    expect(wrapper.find('.loading').exists()).toBeTruthy()
  })

  it('should not execute click when button is loading', () => {
    const wrapper = mount(Button, {
      propsData: {
        isLoading: true,
      },
    })

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('should execute click when button is not loading', () => {
    const wrapper = mount(Button, {
      propsData: {
        isLoading: false,
      },
    })

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
