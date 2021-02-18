import { mount } from '@vue/test-utils'

import Breadcrumb from './Breadcrumb.vue'

describe('<Breadcrumb />', () => {
  it('should have "Breadcrumb" classname when render', () => {
    const wrapper = mount(Breadcrumb)
    expect(wrapper.classes()).toContain('JSMBreadcrumb')
  })

  it('should have "default" classname when "color prop" is "default"', () => {
    const wrapper = mount(Breadcrumb, {
      propsData: {
        color: 'default',
      },
    })
    expect(wrapper.classes()).toContain('JSMBreadcrumb--default')
  })

  it('should have "contrast" classname when "color prop" is "contrast"', () => {
    const wrapper = mount(Breadcrumb, {
      propsData: {
        color: 'contrast',
      },
    })
    expect(wrapper.classes()).toContain('JSMBreadcrumb--contrast')
  })
})
