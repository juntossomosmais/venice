import { mount } from '@vue/test-utils'

import Checkbox from './Checkbox.vue'

jest.mock('uniqid', () => ({
  default: () => 'someId',
}))

const PROPS = {
  label: 'My Label',
}
const ATTRS = { id: 'id' }
const ATTRS_WITH_DISABLED = { disabled: 'disabled', id: 'id' }
const ID_SELECTOR = '#id'
const ERRO_SELECTOR = '.error'
const LABEL_SELECTOR = '.label'

describe('<Checkbox />', () => {
  it('Should display the base input', () => {
    // given
    const container = mount(Checkbox)

    // then
    expect(container.exists()).toBeTruthy()
  })

  it('Should change value of checkbox by clicking label', async () => {
    // given
    const container = mount(Checkbox, {
      propsData: PROPS,
      attrs: ATTRS,
    })
    const label = container.find(LABEL_SELECTOR)

    //when
    await label.trigger('click')
    const input = container.find(ID_SELECTOR)

    // then
    expect((input.element as HTMLInputElement).checked).toBeTruthy()
  })

  it('Should pass attributes to child only', async () => {
    // given
    const container = mount(Checkbox, {
      attrs: ATTRS_WITH_DISABLED,
      propsData: PROPS,
    })
    const checkbox = container.findAll(ID_SELECTOR)

    // then
    expect(checkbox.length).toBe(1)
    expect(checkbox.at(0).attributes().disabled).toBeTruthy()
  })

  it('Should change checkbox value and emit it to parent by clicking', async () => {
    // given
    const container = mount(Checkbox, {
      attrs: ATTRS,
    })
    const checkbox = container.find(ID_SELECTOR)

    // when
    await checkbox.setChecked()

    // then
    expect(container.emitted().input).toBeTruthy()
  })
})
