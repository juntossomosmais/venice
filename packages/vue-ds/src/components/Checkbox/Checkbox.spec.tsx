import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
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
const FEED_BACK_ERROR = 'Errors will be displayed here'

describe('<Checkbox />', () => {
  it('Should display the base input', () => {
    const { container, queryByText } = render(Checkbox)
    const errorDOM = container.querySelector(`.error`)
    expect(errorDOM).toBeNull()
  })

  it('Should display errors in the input', () => {
    const { container, queryByText } = render(Checkbox, {
      props: {
        error: FEED_BACK_ERROR,
      },
    })

    const errorDOM = container.querySelector(`.error`)

    expect(errorDOM).toBeInTheDocument()
    expect(queryByText(FEED_BACK_ERROR)).toBeInTheDocument()
  })

  it('Should change value of checkbox', () => {
    const { getByLabelText, container } = render(Checkbox, {
      attrs: ATTRS,
    })
    const checkbox = container.querySelector(`#id`) as HTMLInputElement

    fireEvent.click(checkbox)
    expect(checkbox.checked).toBeTruthy()
  })

  it('Should change value of checkbox by clicking label', () => {
    const { getByLabelText } = render(Checkbox, {
      props: PROPS,
    })
    const checkbox = getByLabelText(PROPS.label) as HTMLInputElement

    fireEvent.click(checkbox)
    expect(checkbox.checked).toBeTruthy()
  })

  it('Should pass attributes to child only', async () => {
    const container = mount(Checkbox, {
      attrs: ATTRS_WITH_DISABLED,
      propsData: PROPS,
    })

    const checkbox = container.findAll(ID_SELECTOR)

    expect(checkbox.length).toBe(1)
    expect(checkbox.at(0).attributes().disabled).toBeTruthy()
  })

  it('Should emit value to parent by clicking', async () => {
    const container = mount(Checkbox, {
      attrs: ATTRS,
    })
    const checkbox = container.find(ID_SELECTOR)

    await checkbox.setChecked()
    expect(container.emitted().input).toBeTruthy()
  })
})
