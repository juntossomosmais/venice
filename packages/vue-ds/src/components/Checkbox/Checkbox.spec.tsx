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
const FEED_BACK_ERROR = 'Errors will be displayed here'

describe('<Checkbox />', () => {
  it('Should display the base input', () => {
    const container = mount(Checkbox)

    expect(container.exists()).toBeTruthy()
  })

  it('Should display errors in the input', () => {
    const container = mount(Checkbox, {
      propsData: {
        error: FEED_BACK_ERROR,
      },
    })
    const errorDOM = container.find(ERRO_SELECTOR)

    expect(errorDOM.exists()).toBeTruthy()
  })

  it('Should change value of checkbox by clicking label', async () => {
    const container = mount(Checkbox, {
      propsData: PROPS,
      attrs: ATTRS,
    })
    const label = container.find(LABEL_SELECTOR)

    await label.trigger('click')
    const input = container.find(ID_SELECTOR)

    expect((input.element as HTMLInputElement).checked).toBeTruthy()
  })

  it('Should pass attributes to child only', () => {
    const container = mount(Checkbox, {
      attrs: ATTRS_WITH_DISABLED,
      propsData: PROPS,
    })
    const checkbox = container.findAll(ID_SELECTOR)

    expect(checkbox.length).toBe(1)
    expect(checkbox.at(0).attributes().disabled).toBeTruthy()
  })

  it('Should change checkbox value and emit it to parent by clicking', async () => {
    const container = mount(Checkbox, {
      attrs: ATTRS,
    })
    const checkbox = container.find(ID_SELECTOR)

    await checkbox.setChecked()

    expect(container.emitted().input).toBeTruthy()
  })


  it('Should render slot inside label if it is passed', async () => {
    const container = mount(Checkbox, {
      attrs: ATTRS,
      slots:{
        default: '<a class="anchor-slot" href="link"> Accept </a>',

      }
    })
    const label = container.find(LABEL_SELECTOR)
    const slot = label.find('.anchor-slot')

    expect(slot.exists()).toBeTruthy()
  })
})
