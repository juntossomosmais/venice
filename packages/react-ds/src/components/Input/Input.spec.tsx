import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import Input from './Input'

describe('<Input />', () => {
  it('Should display the base input', () => {
    const { queryByTestId } = render(<Input name="name" />)
    expect(queryByTestId('error')).not.toBeInTheDocument()
  })

  it('Should display errors in the input', () => {
    const { queryByTestId } = render(<Input name="name" error="error" />)
    expect(queryByTestId('error')).toBeInTheDocument()
  })
})
