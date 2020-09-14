import React from 'react'

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Paper } from '.'

describe('<Paper />', () => {
  it('should have "paper" classname when render', () => {
    const { container } = render(<Paper>Default</Paper>)
    expect(container.firstChild).toHaveClass('paper')
  })
})
