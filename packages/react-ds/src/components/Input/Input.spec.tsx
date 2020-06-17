import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import Input from './Input'

describe('<Input />', () => {
  it('should have "default" classname when "color prop" is empty', () => {
    const onChange = jest.fn()
    const { container } = render(
      <Input name="name" value="v" onChange={onChange} />
    )
    expect(container.firstChild).not.toHaveClass('default')
  })
})
