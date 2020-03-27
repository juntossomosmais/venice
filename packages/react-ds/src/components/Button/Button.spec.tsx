import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import Button from './Button'

describe('<Button />', () => {
  it('should has "default" classname when prop color is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should has "default" classname when prop color is "default"', () => {
    const { container } = render(<Button color="default">Send</Button>)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should has "primary" classname when prop color is "primary"', () => {
    const { container } = render(<Button color="primary">Send</Button>)
    expect(container.firstChild).toHaveClass('primary')
  })

  it('should has "secondary" classname when prop color is "secondary"', () => {
    const { container } = render(<Button color="secondary">Send</Button>)
    expect(container.firstChild).toHaveClass('secondary')
  })

  it('should has "filled" classname when prop variant is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('filled')
  })

  it('should has "filled" classname when prop variant props is "filled"', () => {
    const { container } = render(<Button variant="filled">Send</Button>)
    expect(container.firstChild).toHaveClass('filled')
  })

  it('should has "outlined" classname when prop variant props is "outlined"', () => {
    const { container } = render(<Button variant="outlined">Send</Button>)
    expect(container.firstChild).toHaveClass('outlined')
  })

  it('should has "text" classname when prop variant props is "text"', () => {
    const { container } = render(<Button variant="text">Send</Button>)
    expect(container.firstChild).toHaveClass('text')
  })

  it('should be render element as <a> if has an href', () => {
    const { container } = render(<Button href="href">Send</Button>)
    expect(container.querySelector('a')).toBeInTheDOM()
  })

  it('should be render element as <button> if not has an href', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.querySelector('button')).toBeInTheDOM()
  })
})
