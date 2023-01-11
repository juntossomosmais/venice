import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Button } from '.'

describe('<Button />', () => {
  it('should have "JSMButton--default" classname when "color prop" is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--default')
  })

  it('should have "default" classname when "color prop" is "default"', () => {
    const { container } = render(<Button color="default">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--default')
  })

  it('should have "white" classname when "color prop" is "white"', () => {
    const { container } = render(<Button color="white">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--white')
  })

  it('should have "primary" classname when "color prop" is "primary"', () => {
    const { container } = render(<Button color="primary">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--primary')
  })

  it('should have "secondary" classname when "color prop" is "secondary"', () => {
    const { container } = render(<Button color="secondary">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--secondary')
  })

  it('should have "filled" classname when "variant prop" is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--filled')
  })

  it('should have "filled" classname when "variant prop" is "filled"', () => {
    const { container } = render(<Button variant="filled">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--filled')
  })

  it('should have "outlined" classname when "variant prop" is "outlined"', () => {
    const { container } = render(<Button variant="outlined">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--outlined')
  })

  it('should have "text" classname when "variant prop" is "text"', () => {
    const { container } = render(<Button variant="text">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--text')
  })

  it('should have "large" classname when "size prop" is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--large')
  })

  it('should have "large" classname when "size prop" is "large"', () => {
    const { container } = render(<Button size="large">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--large')
  })

  it('should have "medium" classname when "size prop" is "medium"', () => {
    const { container } = render(<Button size="medium">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--medium')
  })

  it('should have "small" classname when "size prop" is "small"', () => {
    const { container } = render(<Button size="small">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--small')
  })

  it('should have "round-square" classname when "shape prop" is empty', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--round-square')
  })

  it('should have "round-square" classname when "shape prop" is "round-square"', () => {
    const { container } = render(<Button shape="round-square">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--round-square')
  })

  it('should have "circle" classname when "shape prop" is "circle"', () => {
    const { container } = render(<Button shape="circle">Send</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--circle')
  })

  it('should have "startIcon" element when has "startIcon prop"', () => {
    const { container } = render(<Button startIcon="←">Back</Button>)
    expect(container.firstChild?.firstChild).toContainHTML(
      `<span class="JSMButtonStartIcon">←</span>`
    )
  })

  it('should have "endIcon" element when has "endIcon prop"', () => {
    const { container } = render(<Button endIcon="→">Back</Button>)
    expect(container.firstChild?.lastChild).toContainHTML(
      `<span class="JSMButtonEndIcon">→</span>`
    )
  })

  it('should be add a href in <a> if it has href', () => {
    const { container, getByRole } = render(<Button href="href">Send</Button>)
    expect(getByRole('link', { name: 'Send' })).toBeInTheDocument()
    expect(container.querySelector('a[href="href"]')).toBeInTheDocument()
  })

  it('should be render element as <button> if not has href', () => {
    const { container } = render(<Button>Send</Button>)
    expect(container.querySelector('button')).toBeInTheDocument()
  })

  it('should have "isLoading" classname when has "isLoading prop"', () => {
    const { container } = render(<Button isLoading={true}>Loading</Button>)
    expect(container.firstChild).toHaveClass('JSMButton--isLoading')
  })

  it('should have "Spinner" component when has "isLoading prop"', () => {
    const { container } = render(<Button isLoading={true}>Loading</Button>)
    expect(container.querySelector('.loading')).toBeInTheDocument()
  })

  it('should click when button is not loading', () => {
    const onClick = jest.fn()

    const { getByText } = render(
      <Button isLoading={false} onClick={onClick}>
        Loading
      </Button>
    )

    fireEvent.click(getByText('Loading'))

    expect(onClick).toBeCalled()
  })

  it('should not click when button is loading', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Button isLoading={true} onClick={onClick}>
        Loading
      </Button>
    )

    fireEvent.click(getByText('Loading'))
    expect(onClick).not.toBeCalled()
  })

  it('should be able to submit a form with type submit', () => {
    const submitMocked = jest.fn()

    const { getByText } = render(
      <form onSubmit={submitMocked}>
        <Button type="submit">Submit</Button>
      </form>
    )

    fireEvent.submit(getByText('Submit'))

    expect(submitMocked).toHaveBeenCalled()
  })
})
