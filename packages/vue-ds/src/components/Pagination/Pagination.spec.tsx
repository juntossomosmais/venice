import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'

import Pagination from './Pagination.vue'

describe('<Pagination />', () => {
  const props = {
    count: 100,
    onChange: jest.fn(),
    isLoading: false,
  }

  it('should not display the previous button', () => {
    const { container } = render(Pagination, {
      props: {
        page: 1,
        ...props,
      },
    })

    const previousButton = container.getElementsByTagName('button')[0]

    expect(previousButton).toHaveStyle('display: none')
  })

  it('should not display the next button', () => {
    const { container } = render(Pagination, {
      props: {
        page: props.count - 1,
        ...props,
      },
    })

    const nextButton = container.getElementsByTagName('button')[1]

    expect(nextButton).toHaveStyle('display: none')
  })

  it('should increase the range size on the second page', () => {
    const { container } = render(Pagination, {
      props: {
        page: 1,
        ...props,
      },
    })
    const { length } = container.getElementsByClassName('paginationIndex')

    const { container: newContainer } = render(Pagination, {
      props: {
        page: 2,
        ...props,
      },
    })
    const indexCount = newContainer.getElementsByClassName('paginationIndex')

    expect(indexCount).toHaveLength(length + 1)
  })

  it('should increase the range size on the penultimate page', () => {
    const { container } = render(Pagination, {
      props: {
        page: props.count,
        ...props,
      },
    })
    const { length } = container.getElementsByClassName('paginationIndex')

    const { container: newContainer } = render(Pagination, {
      props: {
        page: props.count - 1,
        ...props,
      },
    })
    const indexCount = newContainer.getElementsByClassName('paginationIndex')

    expect(indexCount).toHaveLength(length + 1)
  })

  it('should decrease the range size on the first page', () => {
    const { container } = render(Pagination, {
      props: {
        page: 2,
        ...props,
      },
    })
    const { length } = container.getElementsByClassName('paginationIndex')

    const { container: newContainer } = render(Pagination, {
      props: {
        page: 1,
        ...props,
      },
    })
    const indexCount = newContainer.getElementsByClassName('paginationIndex')

    expect(indexCount).toHaveLength(length - 1)
  })

  it('should decrease the range size on the last page', () => {
    const { container } = render(Pagination, {
      props: {
        page: props.count - 1,
        ...props,
      },
    })
    const { length } = container.getElementsByClassName('paginationIndex')

    const { container: newContainer } = render(Pagination, {
      props: {
        page: props.count,
        ...props,
      },
    })
    const indexCount = newContainer.getElementsByClassName('paginationIndex')

    expect(indexCount).toHaveLength(length - 1)
  })

  it('should disabled buttons when page is loading', () => {
    const { container } = render(Pagination, {
      props: {
        page: 50,
        count: props.count,
        onChange: props.onChange,
        isLoading: true,
      },
    })

    const previousButton = container.getElementsByTagName('button')[0]
    const nextButton = container.getElementsByTagName('button')[1]

    expect(previousButton).toBeDisabled()
    expect(nextButton).toBeDisabled()
  })

  it('should enabled buttons when page is loaded', () => {
    const { container } = render(Pagination, {
      props: {
        page: 50,
        ...props,
      },
    })

    const previousButton = container.getElementsByTagName('button')[0]
    const nextButton = container.getElementsByTagName('button')[1]

    expect(previousButton).not.toBeDisabled()
    expect(nextButton).not.toBeDisabled()
  })

  it('should not render component when page is less than 1', () => {
    const { container } = render(Pagination, {
      props: {
        page: 0,
        ...props,
      },
    })

    const paginationContainer = container.getElementsByClassName(
      'pagination'
    )[0]

    expect(paginationContainer).toHaveStyle('display: none')
  })

  it('should not render component when page is greater than count', () => {
    const { container } = render(Pagination, {
      props: {
        page: props.count + 2,
        ...props,
      },
    })

    const paginationContainer = container.getElementsByClassName(
      'pagination'
    )[0]

    expect(paginationContainer).toHaveStyle('display: none')
  })

  it('should not render component when count is less than 1', () => {
    const { container } = render(Pagination, {
      props: {
        page: 2,
        count: 0,
        onChange: props.onChange,
        isLoading: props.isLoading,
      },
    })

    const paginationContainer = container.getElementsByClassName(
      'pagination'
    )[0]

    expect(paginationContainer).toHaveStyle('display: none')
  })
})
