import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Checkbox } from '.'

const props = {
  id: 'field_id',
  label: 'My Label',
}

describe('<Checkbox />', () => {
  it('Should display the base input', () => {
    // TODO - Fix TypeScript compilation errors
    const { container } = render(<Checkbox />)
    const checkbox = container.querySelector(`.container`)
    expect(checkbox).toBeInTheDocument()
  })

  it('Should change value of input ', () => {
    const { getByLabelText } = render(<Checkbox {...props} />)
    const input = getByLabelText(props.label) as HTMLInputElement

    fireEvent.change(input, { target: { checked: true } })
    expect(input.checked).toBe(true)
  })

  it('Should call onchange event of input', () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(
      <Checkbox {...props} onChange={onChange} />
    )
    const input = getByLabelText(props.label) as HTMLInputElement

    fireEvent.click(input)
    expect(input.checked).toBe(true)
    expect(onChange).toBeCalled()
  })
})
