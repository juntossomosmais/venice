import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Tooltip } from '.'

describe('<Tooltip />', () => {
  it('should return the children text', () => {
    const textResult = 'Tooltip here'

    const component = render(
      <Tooltip render={() => <span>{textResult}</span>} />
    )

    expect(component.getByText('Tooltip here')).toBeInTheDocument()
  })
})
