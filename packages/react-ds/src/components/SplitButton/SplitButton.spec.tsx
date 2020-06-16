import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import SplitButton from './SplitButton'

describe('<SplitButton />', () => {
  it('should have on menu the "dropdown" and "hide" classnames by default', () => {
    const { getByRole } = render(
      <SplitButton text="Button">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('dropdown')
    expect(getByRole('menu')).toHaveClass('hide')
  })

  it('should have on menu the "default" classname when the prop "color" is empty', () => {
    const { getByRole } = render(
      <SplitButton text="Button">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('default')
  })

  it('should have on menu the "large" classname when the prop "size" is empty', () => {
    const { getByRole } = render(
      <SplitButton text="Button">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('large')
  })

  it('should have on menu the "default" classname when the prop "color" is "default"', () => {
    const { getByRole } = render(
      <SplitButton text="Button" color="default">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('default')
  })

  it('should have on menu the "primary" classname when the prop "color" is "primary"', () => {
    const { getByRole } = render(
      <SplitButton text="Button" color="primary">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('primary')
  })

  it('should have on menu the "secondary" class when the prop "color" is "secondary"', () => {
    const { getByRole } = render(
      <SplitButton text="Button" color="secondary">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('secondary')
  })

  it('should have on menu the "large" classname when the prop "size" is "large"', () => {
    const { getByRole } = render(
      <SplitButton text="Button" size="large">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('large')
  })

  it('should have on menu the "medium" class when the prop "size" is "medium"', () => {
    const { getByRole } = render(
      <SplitButton text="Button" size="medium">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('medium')
  })

  it('should have "show" as classname when click on button', () => {
    const { getByRole } = render(
      <SplitButton text="Button">
        <a>Action</a>
      </SplitButton>
    )

    fireEvent.click(getByRole('button'))

    expect(getByRole('menu')).toHaveClass('show')
  })

  it('should have three options inside the menu', () => {
    const { getByRole } = render(
      <SplitButton text="Button">
        <a>Action</a>
        <a>Action</a>
        <a>Action</a>
      </SplitButton>
    )

    fireEvent.click(getByRole('button'))

    expect(getByRole('menu').children).toHaveLength(3)
  })
})
