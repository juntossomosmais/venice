import {
  getRangeIndexes,
  hasNextRange,
  hasPreviousRange,
} from './PaginationHelper'

describe('CatalogPaginationHelper', () => {
  it('should return the correct indexes to slice in pages array on mobile device', () => {
    const result = getRangeIndexes(100, 1, true)

    expect(result).toEqual([0, 2])
  })
  it('should return the correct indexes to slice in pages array on desktop device', () => {
    const result = getRangeIndexes(100, 5, false)

    expect(result).toEqual([2, 7])
  })
  it('should return the correct boolean value given an offset on hasNextRange', () => {
    const count = 2
    const currentPage = 0
    const offset = {
      mobile: 2,
      desktop: 3,
    }

    const mobileResult = hasNextRange(offset.mobile, currentPage, count)
    expect(mobileResult).toEqual(true)

    const desktopResult = hasNextRange(offset.desktop, currentPage, count)
    expect(desktopResult).toEqual(false)
  })
  it('should return the correct boolean value given an offset on hasPreviousRange', () => {
    const currentPage = 3
    const offset = {
      mobile: 2,
      desktop: 3,
    }

    const mobileResult = hasPreviousRange(offset.mobile, currentPage)
    expect(mobileResult).toEqual(true)

    const desktopResult = hasPreviousRange(offset.desktop, currentPage)
    expect(desktopResult).toEqual(false)
  })
})
