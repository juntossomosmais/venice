import React, { useState, useEffect } from 'react'

import { IPagination } from '@venice/core/models'
import styles from '@venice/styles/components/Pagination.module.scss'

import {
  getRangeIndexes,
  hasNextRange,
  hasPreviousRange,
} from './helpers/PaginationHelper'
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
  /** Change page event. */
  onChangePage?: (page: number) => void
}

const Pagination: React.FC<IPaginationProps> = ({
  count = 0,
  page = 0,
  isLoading = false,
  onChangePage = () => null,
}: IPaginationProps) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    let doit: NodeJS.Timeout
    const timeOut = 200
    const maxPhoneWidth = 420

    const checkDevice = () =>
      window.innerWidth <= maxPhoneWidth
        ? setIsMobile(true)
        : setIsMobile(false)

    const onResize = () => {
      clearTimeout(doit)
      doit = setTimeout(() => checkDevice(), timeOut)
    }
    checkDevice()
    window.addEventListener('resize', onResize)
  }, [])

  const currentPage = page + 1
  const pageIndexes = Array.from(Array(count + 1).keys()).slice(1)

  const hasNextCondition = isMobile
    ? hasNextRange(2, currentPage, count)
    : hasNextRange(3, currentPage, count)

  const hasPreviousCondition = isMobile
    ? hasPreviousRange(2, currentPage)
    : hasPreviousRange(3, currentPage)

  const nextPage = () => onChangePage(page + 1)
  const prevPage = () => onChangePage(page - 1)
  const onSelectPage = (newPage: number) => onChangePage(newPage - 1)

  const flexCondition = () =>
    hasNextCondition ? styles.justifyContentEnd : styles.justifyContentStart

  const justifyCondition = () =>
    !hasNextCondition && !hasPreviousCondition ? 'center' : flexCondition()

  const [startOfRange, endOfRange] = getRangeIndexes(
    count,
    currentPage,
    isMobile
  )
  const range = pageIndexes.slice(startOfRange, endOfRange)

  return (
    <section
      className={`${styles.pagination} ${isMobile ? styles.isMobile : ''}`}
    >
      <div className={`${styles.container} ${justifyCondition()}`}>
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
