import React from 'react'

import styles from '@venice/styles/components/Pagination.module.scss'

interface PaginationIndexProps {
  page: number
  count: number
  isCurrentPage: boolean
  onSelect: (page: number) => void
}

const PaginationIndex: React.SFC<PaginationIndexProps> = ({
  page,
  count,
  isCurrentPage,
  onSelect,
}) => {
  return (
    <div
      className={`${styles.indexWrapper} ${isCurrentPage && styles.active}`}
      key={page}
      data-marker={isCurrentPage && `de ${count}`}
    >
      <div className={styles.paginationIndex} onClick={() => onSelect(page)}>
        <p>{page}</p>
      </div>
    </div>
  )
}

export default PaginationIndex
