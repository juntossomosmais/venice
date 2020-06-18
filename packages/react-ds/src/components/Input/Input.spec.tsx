import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import Input from './Input'

describe('<Input />', () => {
  it('Should display the base input', () => {
    const { queryByTestId } = render(<Input />)
    expect(queryByTestId('error')).not.toBeInTheDocument()
  })

  it('Should display errors in the input', () => {
    const { queryByText } = render(
      <Input error="Errors will be displayed here" />
    )
    expect(queryByText('Errors will be displayed here')).toBeInTheDocument()
  })

  it('Should change value of input ', () => {
    const id = 'field_id'
    const { getByLabelText } = render(<Input id={id} />)
    const input = getByLabelText(id)

    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
  })

  it('Should call onchange event of input', () => {
    const id = 'field_id'
    const onChange = jest.fn()
    const { getByLabelText } = render(<Input id={id} onChange={onChange} />)
    const input = getByLabelText(id)

    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
    expect(onChange).toBeCalled()
  })
})
