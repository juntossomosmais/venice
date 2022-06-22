import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { LoadingLogo } from '.'

describe('<LoadingLogo />', () => {
  it('should render the loading logo', () => {
    const { container } = render(<LoadingLogo></LoadingLogo>)
    expect(container.firstChild).toHaveClass('JSMLoading__logo')
  })
})
