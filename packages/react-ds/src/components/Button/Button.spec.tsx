import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import Button from './Button'

describe('<Button />', () => {
  it('should have "default" classname when "color prop" is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "default" classname when "color prop" is "default"', () => {
    const { container } = render(<Button color="default">Send</Button>)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "primary" classname when "color prop" is "primary"', () => {
    const { container } = render(<Button color="primary">Send</Button>)
    expect(container.firstChild).toHaveClass('primary')
  })

  it('should have "secondary" classname when "color prop" is "secondary"', () => {
    const { container } = render(<Button color="secondary">Send</Button>)
    expect(container.firstChild).toHaveClass('secondary')
  })

  it('should have "filled" classname when "variant prop" is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('filled')
  })

  it('should have "filled" classname when "variant prop" is "filled"', () => {
    const { container } = render(<Button variant="filled">Send</Button>)
    expect(container.firstChild).toHaveClass('filled')
  })

  it('should have "outlined" classname when "variant prop" is "outlined"', () => {
    const { container } = render(<Button variant="outlined">Send</Button>)
    expect(container.firstChild).toHaveClass('outlined')
  })

  it('should have "text" classname when "variant prop" is "text"', () => {
    const { container } = render(<Button variant="text">Send</Button>)
    expect(container.firstChild).toHaveClass('text')
  })

  it('should have "medium" classname when "size prop" is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('medium')
  })

  it('should have "medium" classname when "size prop" is "medium"', () => {
    const { container } = render(<Button size="medium">Send</Button>)
    expect(container.firstChild).toHaveClass('medium')
  })

  it('should have "small" classname when "size prop" is "small"', () => {
    const { container } = render(<Button size="small">Send</Button>)
    expect(container.firstChild).toHaveClass('small')
  })

  it('should have "round-square" classname when "shape prop" is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('round-square')
  })

  it('should have "round-square" classname when "shape prop" is "round-square"', () => {
    const { container } = render(<Button shape="round-square">Send</Button>)
    expect(container.firstChild).toHaveClass('round-square')
  })

  it('should have "circle" classname when "shape prop" is "circle"', () => {
    const { container } = render(<Button shape="circle">Send</Button>)
    expect(container.firstChild).toHaveClass('circle')
  })

  it('should have "startIcon" element when has "startIcon prop"', () => {
    const { container } = render(<Button startIcon="←">Back</Button>)
    expect(container.firstChild.firstChild).toContainHTML(
      `<span class="startIcon">←</span>`
    )
  })

  it('should have "endIcon" element when has "endIcon prop"', () => {
    const { container } = render(<Button endIcon="→">Back</Button>)
    expect(container.firstChild.lastChild).toContainHTML(
      `<span class="endIcon">→</span>`
    )
  })

  it('should be add a href in <a> if it has href', () => {
    const { container } = render(<Button href="href">Send</Button>)
    expect(container.querySelector('a[href="href"]')).toBeInTheDocument()
  })

  it('should be render element as <button> if not has href', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.querySelector('button')).toBeInTheDocument()
  })

  it('should have "isLoading" classname when has "isLoading prop"', () => {
    const { container } = render(<Button isLoading={true}>Loading</Button>)
    expect(container.firstChild).toHaveClass('isLoading')
  })

  it('should have "Spinner" component when has "isLoading prop"', () => {
    const { container } = render(<Button isLoading={true}>Loading</Button>)
    expect(container.querySelector('.loading')).toBeInTheDocument()
  })
})
