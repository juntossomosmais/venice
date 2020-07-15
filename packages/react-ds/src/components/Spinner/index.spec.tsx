import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Spinner } from '.'

describe('<Spinner />', () => {
  it('should have "default" classname when prop color is empty', () => {
    const { container } = render(<Spinner></Spinner>)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "default" classname when prop color is "default"', () => {
    const { container } = render(<Spinner color="default"></Spinner>)
    expect(container.firstChild).toHaveClass('default')
  })

  it('should have "primary" classname when prop color is "primary"', () => {
    const { container } = render(<Spinner color="primary"></Spinner>)
    expect(container.firstChild).toHaveClass('primary')
  })

  it('should have "secondary" classname when prop color is "secondary"', () => {
    const { container } = render(<Spinner color="secondary"></Spinner>)
    expect(container.firstChild).toHaveClass('secondary')
  })

  it('should have 36px as a default size', () => {
    const { container } = render(<Spinner></Spinner>)
    expect(container.firstChild).toHaveStyle('height: 36px;')
    expect(container.firstChild).toHaveStyle('width: 36px;')
  })

  it('should have a 20px when prop size is "20"', () => {
    const { container } = render(<Spinner size={20}></Spinner>)
    expect(container.firstChild).toHaveStyle('height: 20px;')
    expect(container.firstChild).toHaveStyle('width: 20px;')
  })
})
