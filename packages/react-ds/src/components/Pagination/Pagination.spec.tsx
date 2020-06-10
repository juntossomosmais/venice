import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Pagination from './Pagination'

describe('<Pagination />', () => {
  const props = {
    count: 100,
    onChangePage: jest.fn(),
    isLoading: false,
  }
  it('should not display the previous button', () => {
    const { queryByTestId } = render(<Pagination page={1} {...props} />)
    expect(queryByTestId('previous-button')).not.toBeInTheDocument()
  })
  it('should not display the next button', () => {
    const { queryByTestId } = render(<Pagination page={99} {...props} />)
    expect(queryByTestId('next-button')).not.toBeInTheDocument()
  })
  it('should increase the range size on the second page', () => {
    const { queryAllByTestId, rerender } = render(
      <Pagination page={0} {...props} />
    )
    const firstRangeSize = queryAllByTestId('page-index').length
    rerender(<Pagination page={1} {...props} />)
    expect(queryAllByTestId('page-index')).toHaveLength(firstRangeSize + 1)
  })
  it('should increase the range size on the penultimate page', () => {
    const { queryAllByTestId, rerender } = render(
      <Pagination page={100} {...props} />
    )
    const firstRangeSize = queryAllByTestId('page-index').length
    rerender(<Pagination page={99} {...props} />)
    expect(queryAllByTestId('page-index')).toHaveLength(firstRangeSize + 1)
  })

  it('should decrease the range size on the first page', () => {
    const { queryAllByTestId, rerender } = render(
      <Pagination page={1} {...props} />
    )
    const firstRangeSize = queryAllByTestId('page-index').length
    rerender(<Pagination page={0} {...props} />)

    expect(queryAllByTestId('page-index')).toHaveLength(firstRangeSize - 1)
  })
  it('should decrease the range size on the last page', () => {
    const { queryAllByTestId, rerender } = render(
      <Pagination page={99} {...props} />
    )
    const firstRangeSize = queryAllByTestId('page-index').length
    rerender(<Pagination page={100} {...props} />)

    expect(queryAllByTestId('page-index')).toHaveLength(firstRangeSize - 1)
  })

  it('should disabled buttons when page is loading', () => {
    const { queryByTestId } = render(
      <Pagination
        page={50}
        count={100}
        onChangePage={jest.fn()}
        isLoading={true}
      />
    )
    expect(queryByTestId('previous-button')).toBeDisabled()
    expect(queryByTestId('next-button')).toBeDisabled()
  })

  it('should enabled buttons when page is loaded', () => {
    const { queryByTestId } = render(<Pagination page={50} {...props} />)
    expect(queryByTestId('previous-button')).not.toBeDisabled()
    expect(queryByTestId('next-button')).not.toBeDisabled()
  })
})
