import React, { useState, useEffect, useCallback } from 'react'

import classNames from 'classnames/bind'

import {
  getRangeIndexes,
  hasNextRange,
  hasPreviousRange,
} from '@venice/core/helpers/Pagination'
import { IPagination } from '@venice/core/models'
import styles from '@venice/styles/components/Pagination.module.scss'

// TODO: these icons should be replaced when there is an icon library
import AngleLeft from './icons/AngleLeft'
import AngleRight from './icons/AngleRight'
import PaginationIndex from './PaginationIndex'

const debounce = (func: () => void, wait: number) => {
  let timer = 0

  return () => {
    clearTimeout(timer)
    timer = window.setTimeout(func, wait)
  }
}

const Pagination: React.FC<IPagination> = ({
  count = 1,
  page = 1,
  isLoading = false,
  onChange = () => null,
  className,
  ...props
}: IPagination) => {
  const maxPhoneWidth = 420
  const [isMobile, setIsMobile] = useState(false)

  const checkDevice = () => setIsMobile(window.innerWidth <= maxPhoneWidth)

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

  const [startOfRange, endOfRange] = getRangeIndexes(count, page, isMobile)
  const getAllIndexes = useCallback(
    () => Array.from(Array(count + 1).keys()).slice(1),
    [count]
  )
  const range = getAllIndexes().slice(startOfRange, endOfRange)

  useEffect(() => {
    checkDevice()
    const debouncedCheck = debounce(checkDevice, 200)

    window.addEventListener('resize', debouncedCheck)
    return () => window.removeEventListener('resize', debouncedCheck)
  }, [])

  return !isInvalid() ? (
    <section
      className={classNames(
        styles.pagination,
        { [styles.isMobile]: isMobile },
        className
      )}
      {...props}
    >
      <div
        className={classNames(styles.container, {
          center: !hasNextCondition && !hasPreviousCondition,
          [styles.justifyContentEnd]: hasNextCondition && !hasPreviousCondition,
          [styles.justifyContentStart]:
            !hasNextCondition && hasPreviousCondition,
        })}
      >
        {hasPreviousCondition && (
          <button
            className={styles.paginationButton}
            disabled={isLoading}
            onClick={prevPage}
          >
            <AngleLeft width="12" height="23" viewBox="-1 3 12 7" />
          </button>
        )}
        {range.map((pageIndex) => (
          <PaginationIndex
            key={pageIndex}
            page={pageIndex}
            count={count}
            isCurrentPage={page === pageIndex}
            onSelect={onSelectPage}
          />
        ))}
        {hasNextCondition && (
          <button
            className={styles.paginationButton}
            disabled={isLoading}
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
