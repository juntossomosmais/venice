import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Pagination from './Pagination'

describe('<Pagination />', () => {
  const props = {
    count: 100,
    onChange: jest.fn(),
    isLoading: false,
  }

  it('should not display the previous button', () => {
    const { container } = render(<Pagination page={1} {...props} />)

    expect(container.getElementsByTagName('button')).toHaveLength(1)
  })

  it('should not display the next button', () => {
    const { container } = render(
      <Pagination page={props.count - 1} {...props} />
    )
    expect(container.getElementsByTagName('button')).toHaveLength(1)
  })

  it('should increase the range size on the second page', () => {
    const { container, rerender } = render(<Pagination page={1} {...props} />)
    const paginationIndex = container.getElementsByClassName('paginationIndex')
    const { length } = paginationIndex

    rerender(<Pagination page={2} {...props} />)
    expect(paginationIndex).toHaveLength(length + 1)
  })

  it('should increase the range size on the penultimate page', () => {
    const { container, rerender } = render(
      <Pagination page={props.count} {...props} />
    )
    const paginationIndex = container.getElementsByClassName('paginationIndex')
    const { length } = paginationIndex

    rerender(<Pagination page={props.count - 1} {...props} />)
    expect(paginationIndex).toHaveLength(length + 1)
  })

  it('should decrease the range size on the first page', () => {
    const { container, rerender } = render(<Pagination page={2} {...props} />)
    const paginationIndex = container.getElementsByClassName('paginationIndex')
    const { length } = paginationIndex

    rerender(<Pagination page={1} {...props} />)
    expect(paginationIndex).toHaveLength(length - 1)
  })

  it('should decrease the range size on the last page', () => {
    const { container, rerender } = render(
      <Pagination page={props.count - 1} {...props} />
    )
    const paginationIndex = container.getElementsByClassName('paginationIndex')
    const { length } = paginationIndex

    rerender(<Pagination page={props.count} {...props} />)
    expect(paginationIndex).toHaveLength(length - 1)
  })

  it('should disabled buttons when page is loading', () => {
    const { container } = render(
      <Pagination
        page={50}
        count={props.count}
        onChange={props.onChange}
        isLoading={true}
      />
    )

    expect(container.getElementsByTagName('button')[0]).toBeDisabled()
    expect(container.getElementsByTagName('button')[1]).toBeDisabled()
  })

  it('should enabled buttons when page is loaded', () => {
    const { container } = render(<Pagination page={50} {...props} />)

    expect(container.getElementsByTagName('button')[0]).not.toBeDisabled()
    expect(container.getElementsByTagName('button')[1]).not.toBeDisabled()
  })

  it('should not render component when page is less than 1', () => {
    const { container } = render(<Pagination page={0} {...props} />)

    expect(container.getElementsByClassName('pagination')).toHaveLength(0)
  })

  it('should not render component when page is greater than count', () => {
    const { container } = render(
      <Pagination page={props.count + 2} {...props} />
    )

    expect(container.getElementsByClassName('pagination')).toHaveLength(0)
  })

  it('should not render component when count is less than 1', () => {
    const { container } = render(
      <Pagination
        page={2}
        count={0}
        onChange={props.onChange}
        isLoading={props.isLoading}
      />
    )

    expect(container.getElementsByClassName('pagination')).toHaveLength(0)
  })
})
