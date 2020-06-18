import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import Input from './Input'

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
    const id = 'field_id'
    const { container } = render(<Input id={id} />)
    const input = container.querySelector(`#${id}`)

    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
  })

  it('Should call onchange event of input', () => {
    const id = 'field_id'
    const onChange = jest.fn()
    const { container } = render(<Input id={id} onChange={onChange} />)
    const input = container.querySelector(`#${id}`)

    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
    expect(onChange).toBeCalled()
  })
})
