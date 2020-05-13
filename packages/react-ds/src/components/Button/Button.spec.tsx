import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import Button from './Button'

describe('<Button />', () => {
  it('should have "default" classname when prop color is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "default" classname when prop color is "default"', () => {
    const { container } = render(<Button color="default">Send</Button>)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "primary" classname when prop color is "primary"', () => {
    const { container } = render(<Button color="primary">Send</Button>)
    expect(container.firstChild).toHaveClass('primary')
  })

  it('should have "secondary" classname when prop color is "secondary"', () => {
    const { container } = render(<Button color="secondary">Send</Button>)
    expect(container.firstChild).toHaveClass('secondary')
  })

  it('should have "filled" classname when prop variant is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('filled')
  })

  it('should have "filled" classname when prop variant props is "filled"', () => {
    const { container } = render(<Button variant="filled">Send</Button>)
    expect(container.firstChild).toHaveClass('filled')
  })

  it('should have "outlined" classname when prop variant props is "outlined"', () => {
    const { container } = render(<Button variant="outlined">Send</Button>)
    expect(container.firstChild).toHaveClass('outlined')
  })

  it('should have "text" classname when prop variant props is "text"', () => {
    const { container } = render(<Button variant="text">Send</Button>)
    expect(container.firstChild).toHaveClass('text')
  })

  it('should have "small" classname when prop size props is "small"', () => {
    const { container } = render(<Button size="small">Send</Button>)
    expect(container.firstChild).toHaveClass('small')
  })

  it('should have "startIcon" element when has startIcon prop', () => {
    const { container } = render(<Button startIcon="←">Back</Button>)
    expect(container.firstChild.firstChild).toContainHTML(
      `<span class="startIcon">←</span>`
    )
  })

  it('should have "endIcon" element when has endIcon prop', () => {
    const { container } = render(<Button endIcon="→">Back</Button>)
    expect(container.firstChild.lastChild).toContainHTML(
      `<span class="endIcon">→</span>`
    )
  })

  it('should be render element as <a> if has an href', () => {
    const { container } = render(<Button href="href">Send</Button>)
    expect(container.querySelector('a')).toBeInTheDocument()
  })

  it('should be render element as <button> if not has an href', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.querySelector('button')).toBeInTheDocument()
  })

  it('should have "isLoading" classname when has "isLoading" prop', () => {
    const { container } = render(<Button isLoading={true}>Loading</Button>)
    expect(container.firstChild).toHaveClass('isLoading')
  })

  it('should have "Spinner" component when has "isLoading" prop', () => {
    const { container } = render(<Button isLoading={true}>Loading</Button>)
    expect(container.querySelector('.loading')).toBeInTheDocument()
  })
})
