import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { LogoAnimation } from '.'

describe('<LogoAnimation />', () => {
  it('should render the loading logo', () => {
    const { container } = render(<LogoAnimation></LogoAnimation>)
    expect(container.firstChild).toHaveClass('JSMAnimation__logo')
  })
})
