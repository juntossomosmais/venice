import { setTimeout } from 'timers'

import React from 'react'

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { transitionDuration } from './Progress.wrapper'

import { Progress } from './'

const transition = () =>
  new Promise((resolve) => setTimeout(resolve, transitionDuration * 2))

// TODO: We have a lot of instability to run these tests, we need to change methods to test it later
describe.skip('<Progress />', () => {
  it('Should display simple Progress', () => {
    const { container } = render(<Progress />)

    expect(container.firstChild).toHaveClass('progress')
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

  it('Should display the value with float value after transition', async () => {
    const { container, queryByText, rerender } = render(
      <Progress value="70.5" display />
    )
    const value = container.querySelector('.value')
    expect(value).toBeInTheDocument()
    expect(queryByText('0.5%')).toBeInTheDocument()

    await act(async () => {
      await transition()

      expect(queryByText('70.5%')).toBeInTheDocument()
      expect(queryByText('0%')).not.toBeInTheDocument()
    })

    rerender(<Progress value="25.25" display />)
    expect(queryByText('70.25%')).toBeInTheDocument()

    await act(async () => {
      await transition()

      expect(queryByText('25.25%')).toBeInTheDocument()
    })
  })

  it('Should display the value as percent', async () => {
    const { queryByText, rerender } = render(
      <Progress value={1} max={2} display />
    )
    expect(queryByText('0%')).toBeInTheDocument()

    await act(async () => {
      await transition()

      expect(queryByText('50%')).toBeInTheDocument()
      expect(queryByText('0%')).not.toBeInTheDocument()
    })

    rerender(<Progress value="1" max="3" display />)
    expect(queryByText('50.33%')).toBeInTheDocument()

    await act(async () => {
      await transition()

      expect(queryByText('33.33%')).toBeInTheDocument()
    })
  })
})
