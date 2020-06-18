import React from 'react'

import { render, waitFor, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import SplitButton from './SplitButton'

describe('<SplitButton />', () => {
  it('should have on menu the "dropdown" classname by default', () => {
    const { getByRole } = render(
      <SplitButton text="Button">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('dropdown')
  })

  it('should have on menu the "default" classname when the prop "color" is empty', () => {
    const { getByRole } = render(
      <SplitButton text="Button">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('default')
  })

  it('should have on menu the "rtl" classname when the prop "direction" is empty', () => {
    const { getByRole } = render(
      <SplitButton text="Button">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('rtl')
  })

  it('should have on menu the "large" classname when the prop "size" is empty', () => {
    const { getByRole } = render(
      <SplitButton text="Button">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('large')
  })

  it('should have on menu the "rtl" classname when the prop "direction" is "rtl"', () => {
    const { getByRole } = render(
      <SplitButton text="Button" direction="rtl">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('rtl')
  })

  it('should have on menu the "ltr" classname when the prop "direction" is "ltr"', () => {
    const { getByRole } = render(
      <SplitButton text="Button" direction="ltr">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('ltr')
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

  it('should have on menu the "secondary" classname when the prop "color" is "secondary"', () => {
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

  it('should have on menu the "medium" classname when the prop "size" is "medium"', () => {
    const { getByRole } = render(
      <SplitButton text="Button" size="medium">
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu')).toHaveClass('medium')
  })

  it('should have the "active" classname when menu is open', async () => {
    const { getByRole } = render(
      <SplitButton text="Button">
        <a>Action</a>
      </SplitButton>
    )

    fireEvent.click(getByRole('button'))

    expect(getByRole('menu')).toHaveClass('active')
  })

  it('should have three options inside the menu', () => {
    const { getByRole } = render(
      <SplitButton text="Button">
        <a>Action</a>
        <a>Action</a>
        <a>Action</a>
      </SplitButton>
    )

    expect(getByRole('menu').children).toHaveLength(3)
  })
})
