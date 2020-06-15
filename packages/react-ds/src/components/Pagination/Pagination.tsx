import React, { useState, useEffect, useCallback } from 'react'

import { IPagination } from '@venice/core/models'
import styles from '@venice/styles/components/Pagination.module.scss'

import {
  getRangeIndexes,
  hasNextRange,
  hasPreviousRange,
} from './helpers/PaginationHelper'
// TODO: these icons should be replaced when there is an icon library
import AngleLeft from './icons/AngleLeft'
import AngleRight from './icons/AngleRight'
import PaginationRange from './PaginationRange'

const Pagination: React.FC<IPagination> = ({
  count = 1,
  page = 1,
  isLoading = false,
  onChange = () => null,
}: IPagination) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    let doit: NodeJS.Timeout
    const timeOut = 200
    const maxPhoneWidth = 420

    const checkDevice = () => setIsMobile(window.innerWidth <= maxPhoneWidth)
    checkDevice()

    const onResize = () => {
      clearTimeout(doit)
      doit = setTimeout(() => checkDevice(), timeOut)
    }
    window.addEventListener('resize', onResize)

    return () => {
      clearTimeout(doit)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const isInvalid = () => page < 1 || page > count || count < 1

  const hasNextCondition = isMobile
    ? hasNextRange(2, page, count)
    : hasNextRange(3, page, count)

  const hasPreviousCondition = isMobile
    ? hasPreviousRange(2, page)
    : hasPreviousRange(3, page)

  const nextPage = () => onChange(page + 1)
  const prevPage = () => onChange(page - 1)
  const onSelectPage = (newPage: number) => onChange(newPage)

  const flexCondition = () =>
    hasNextCondition ? styles.justifyContentEnd : styles.justifyContentStart

  const justifyCondition = () =>
    !hasNextCondition && !hasPreviousCondition ? 'center' : flexCondition()

  const [startOfRange, endOfRange] = getRangeIndexes(count, page, isMobile)
  const getAllIndexes = useCallback(
    () => Array.from(Array(count + 1).keys()).slice(1),
    [count]
  )
  const range = getAllIndexes().slice(startOfRange, endOfRange)

  return !isInvalid() ? (
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
          currentPage={page}
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
  ) : null
}

export default Pagination
