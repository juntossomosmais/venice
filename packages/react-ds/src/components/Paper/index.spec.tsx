import React from 'react'

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Paper } from '.'

const Mount = (props) => <Paper {...props}>Message</Paper>

describe('<Paper />', () => {
  it('Should display Paper base', () => {
    const { container, queryByText } = render(<Mount />)
    const icon = container.querySelector('svg')

    expect(container.firstChild).toHaveClass('with-icon')
    expect(icon).toBeInTheDocument()

    expect(queryByText('Message')).toBeInTheDocument()
  })
})
