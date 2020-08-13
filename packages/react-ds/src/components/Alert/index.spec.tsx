import React from 'react'

import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { Store, Star, Bell } from '../Icons'

import { Alert, VALID_COLORS, TYPES } from '.'

const Icons = [Store, Star, Bell]

const Mount = (props) => <Alert {...props}>Message</Alert>

describe('<Alert />', () => {
  it('Should display Alert base', () => {
    const { container, queryByText } = render(<Mount />)
    const icon = container.querySelector('svg')

    expect(container.firstChild).toHaveClass('with-icon')
    expect(icon).toBeInTheDocument()

    expect(queryByText('Message')).toBeInTheDocument()
  })

  it('Should display close in Alert', () => {
    const { container } = render(<Mount closable />)
    const closeIcon = container.querySelector('.icon-close')

    expect(container.firstChild).toHaveClass('with-close')
    expect(closeIcon).toBeInTheDocument()
    expect(container).toBeInTheDocument()

    act(() => {
      if (closeIcon) fireEvent.click(closeIcon)
    })

    expect(container.firstChild).toBeFalsy()
  })

  it('Should call event onClose', () => {
    const onClose = jest.fn()
    const { container } = render(<Mount onClose={onClose} />)
    const closeIcon = container.querySelector('.icon-close')

    expect(container.firstChild).toHaveClass('with-close')
    expect(closeIcon).toBeInTheDocument()
    expect(container).toBeInTheDocument()

    act(() => {
      if (closeIcon) fireEvent.click(closeIcon)
    })

    expect(onClose).toBeCalled()
    expect(container.firstChild).toBeFalsy()
  })
  
  it('Should display Alert with colors', () => {
    VALID_COLORS.forEach((color) => {
      const { container } = render(<Mount color={color} />)
      expect(container.firstChild).toHaveClass(color)
    })
  })

  it('Should display Alert by types', () => {
    Object.entries(TYPES).forEach(([type, config]) => {
      const { container } = render(<Mount type={type} />)
      expect(container.firstChild).toHaveClass(
        config['color'] || TYPES.default.color
      )
    })
  })

  it('Should display Alert with custom Icons', () => {
    Icons.forEach((Icon, key) => {
      const { container, getByTestId } = render(
        <Mount icon={<Icon data-testid={`icon-${key}`} />} />
      )
      expect(container.firstChild).toHaveClass('with-icon')
      expect(getByTestId(`icon-${key}`)).toBeInTheDocument()
    })
  })
})
