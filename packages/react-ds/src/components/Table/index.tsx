import * as React from 'react'

// import { ITable } from '@juntossomosmais/venice-types'
import classnames from 'classnames'

import styles from '@venice/styles/components/Table.module.scss'

interface ITableProps {
  className?: string
  striped?: boolean
  center?: boolean
}

export const Table: React.FunctionComponent<ITableProps> = ({
  children,
  className = '',
  striped = false,
  center = false,
}) => {
  const classNames = classnames([
    styles.table,
    className,
    { [styles['striped']]: striped },
    { [styles['center']]: center },
  ])

  return <table className={classNames}>{children}</table>
}
