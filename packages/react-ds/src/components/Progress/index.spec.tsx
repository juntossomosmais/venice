import { setTimeout } from 'timers'

import React from 'react'

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { VALID_COLORS } from './Progress.base'

import { Progress, transitionDuration } from './'

const transition = () =>
  new Promise((resolve) => setTimeout(resolve, transitionDuration * 2))

describe('<Progress />', () => {
  it('Should display simple Progress', () => {
    const { container } = render(<Progress />)

    expect(container.firstChild.tagName).toBe('PROGRESS')
  })

  it('Should display simple Progress with colors', () => {
    VALID_COLORS.forEach((color) => {
      const { container } = render(<Progress color={color} />)
      expect(container.firstChild).toHaveClass(color)
    })
  })

  it('Should display the value after transition', async () => {
    const { container, queryByText } = render(
      <Progress value="50" display="left" />
    )
    const value = container.querySelector('.value')
    expect(value).toBeInTheDocument()
    expect(queryByText('0%')).toBeInTheDocument()

    await act(async () => {
      await transition()

      expect(queryByText('50%')).toBeInTheDocument()
      expect(queryByText('0%')).not.toBeInTheDocument()
    })
  })

  it('Should display the value at left', () => {
    const { container } = render(<Progress value="50" display="left" />)
    expect(container.firstChild).toHaveClass('left')
  })
  it('Should display the value at right', () => {
    const { container } = render(<Progress value="50" display="right" />)
    expect(container.firstChild).toHaveClass('right')
  })
})
