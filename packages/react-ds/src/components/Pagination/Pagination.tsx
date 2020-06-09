import React from 'react'

import { IPagination } from '@venice/core/models'
import styles from '@venice/styles/components/Pagination.module.scss'

import AngleLeft from './icons/AngleLeft'
import AngleRight from './icons/AngleRight'
import PaginationRange from './PaginationRange'

interface IPaginationProps extends IPagination {
  /** Total pages to be paginated. */
  count?: number
  /** Current page, starting in zero. */
  page?: number
  /** Pagination status. When true, pagination buttons are disabled. */
  isLoading?: boolean
  /** Device option. When true, the range sizes change. */
  isMobile?: boolean
  /** Change page event. */
  onChangePage?: (page: number) => void
}

const Pagination: React.FC<IPaginationProps> = ({
  count = 0,
  page = 0,
  isLoading = false,
  isMobile = false,
  onChangePage = () => null,
}: IPaginationProps) => {
  const currentPage = page + 1
  const pageIndexes = Array.from(Array(count + 1).keys()).slice(1)

  const nextPage = () => onChangePage(page + 1)
  const prevPage = () => onChangePage(page - 1)
  const onSelectPage = (newPage: number) => onChangePage(newPage - 1)

  const hasNextRange = (offset: number) => currentPage + offset <= count
  const hasNextCondition = isMobile ? hasNextRange(2) : hasNextRange(3)

  const hasPreviousRange = (offset: number) => currentPage - offset > 0
  const hasPreviousCondition = isMobile
    ? hasPreviousRange(2)
    : hasPreviousRange(3)

  const getRangeOffsets = () =>
    isMobile
      ? [currentPage - 2, currentPage + 1]
      : [currentPage - 3, currentPage + 2]

  const getRangeIndexes = () => {
    const [startOfRange, endOfRange] = getRangeOffsets()
    if (startOfRange < 0) {
      return [0, endOfRange]
    }
    if (endOfRange > count) {
      return [startOfRange, count]
    }
    return [startOfRange, endOfRange]
  }

  const [startOfRange, endOfRange] = getRangeIndexes()
  const range = pageIndexes.slice(startOfRange, endOfRange)

  return (
    <section className={`${styles.pagination} ${isMobile && styles.isMobile}`}>
      <div
        className={`${styles.container} ${
          hasNextCondition
            ? styles.justifyContentEnd
            : styles.justifyContentStart
        }`}
      >
        {hasPreviousCondition && (
          <button
            className={styles.paginationButton}
            disabled={isLoading}
            data-testid="previous-button"
            onClick={prevPage}
          >
            <AngleLeft width="12" height="23" viewBox="-1 3 12 7" />
          </button>
        )}
        <PaginationRange
          range={range}
          count={count}
          currentPage={currentPage}
          onSelect={onSelectPage}
        />
        {hasNextCondition && (
          <button
            className={styles.paginationButton}
            disabled={isLoading}
            data-testid="next-button"
            onClick={nextPage}
          >
            <AngleRight width="12" height="23" viewBox="-3 3 12 7" />
          </button>
        )}
      </div>
    </section>
  )
}

export default Pagination
