import React from 'react'

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Breadcrumb } from '.'

describe('<Breadcrumb />', () => {
  it('should have "breadcrumb" classname when render', () => {
    const { container } = render(<Breadcrumb>Default</Breadcrumb>)
    expect(container.firstChild).toHaveClass('breadcrumb')
  })

  it('should have "default" classname when "color prop" is "default"', () => {
    const { container } = render(<Breadcrumb>Default</Breadcrumb>)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "contrast" classname when "color prop" is "contrast"', () => {
    const { container } = render(
      <Breadcrumb color="contrast">Contrast</Breadcrumb>
    )
    expect(container.firstChild).toHaveClass('contrast')
  })
})
