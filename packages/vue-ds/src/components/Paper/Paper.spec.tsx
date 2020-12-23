import { mount } from '@vue/test-utils'

import Paper from './Paper.vue'

describe('<Paper />', () => {
  it('should have "paper" classname when render', () => {
    const wrapper = mount(Paper)
    expect(wrapper.classes()).toContain('paper')
  })
})
