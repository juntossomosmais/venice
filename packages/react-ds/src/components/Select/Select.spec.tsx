import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import Select from './Select'

describe('<Select />', () => {
  it('Should display the base Select', () => {
    const { container } = render(<Select />)
    const errorDOM = container.querySelector(`.error`)
    expect(errorDOM).toBeNull()
  })

  it('Should display the base Select', () => {
    const { queryByText } = render(<Select icon="R$" />)
    expect(queryByText('R$')).toBeInTheDocument()
  })

  it('Should display errors in the Select', () => {
    const feedBackError = 'Errors will be displayed here'
    const { container, queryByText } = render(<Select error={feedBackError} />)
    const errorDOM = container.querySelector(`.error`)

    expect(errorDOM).toBeInTheDocument()
    expect(errorDOM?.textContent).toBe(feedBackError)
    expect(queryByText(feedBackError)).toBeInTheDocument()
  })

  it('Should change value of Select ', () => {
    const id = 'field_id'
    const { container } = render(
      <Select label="label" id={id} defaultValue="2">
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
      </Select>
    )
    const select = container.querySelector(`#${id}`)

    expect(select.value).toBe('2')
    fireEvent.change(select, { target: { value: '3' } })
    expect(select.value).toBe('3')
  })

  it('Should call onchange event of Select', () => {
    const id = 'field_id'
    const store = { value: '1' }
    const _onChange = jest.fn()
    const onChange = (e) => {
      store.value = e.target.value
      return _onChange(e.target.value)
    }
    const { container } = render(
      <Select
        label="label"
        id={id}
        onChange={onChange}
        defaultValue={store.value}
      >
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
      </Select>
    )
    const select = container.querySelector(`#${id}`)

    expect(select.value).toBe(store.value)
    fireEvent.change(select, { target: { value: '3' } })
    expect(_onChange).toBeCalledWith('3')
    expect(store.value).toBe('3')
  })
})
