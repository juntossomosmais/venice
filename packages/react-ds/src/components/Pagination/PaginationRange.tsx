import React from 'react'

import styles from '@venice/styles/components/Pagination.module.scss'

interface PaginationRangeProps {
  range: Array<number>
  count: number
  currentPage: number
  onSelect: (page: number) => void
}

const PaginationRange: React.SFC<PaginationRangeProps> = ({
  range,
  count,
  currentPage,
  onSelect,
}) => {
  return (
    <>
      {range.map((page) => {
        const isCurrentPage = page === currentPage
        return (
          <div
            className={`${styles.indexWrapper} ${isCurrentPage &&
              styles.active}`}
            key={page}
            data-marker={isCurrentPage && `de ${count}`}
          >
            <div
              className={styles.paginationIndex}
              onClick={() => onSelect(page)}
            >
              <p data-testid="page-index">{page}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default PaginationRange
