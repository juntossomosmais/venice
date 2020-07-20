import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import Input from './Input'

const props = {
  id: 'field_id',
  label: 'My Label',
}

describe('<Input />', () => {
  it('Should display the base input', () => {
    const { container } = render(<Input />)
    const errorDOM = container.querySelector(`.error`)
    expect(errorDOM).toBeNull()
  })

  it('Should display errors in the input', () => {
    const feedBackError = 'Errors will be displayed here'
    const { container, queryByText } = render(<Input error={feedBackError} />)
    const errorDOM = container.querySelector(`.error`)

    expect(errorDOM).toBeInTheDocument()
    expect(errorDOM?.textContent).toBe(feedBackError)
    expect(queryByText(feedBackError)).toBeInTheDocument()
  })

  it('Should change value of input ', () => {
    const { getByLabelText } = render(<Input {...props} />)
    const input = getByLabelText(props.label)

    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
  })

  it('Should call onchange event of input', () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(<Input {...props} onChange={onChange} />)
    const input = getByLabelText(props.label)

    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
    expect(onChange).toBeCalled()
  })
})
