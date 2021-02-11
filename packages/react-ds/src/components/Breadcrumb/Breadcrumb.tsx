import * as React from 'react'

import { IBreadcrumb } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Breadcrumb.module.scss'

export interface IBreadcrumbProps extends IBreadcrumb {
  /** string */
  className?: string
  /** React Element */
  children?: React.ReactNode
}

export const Breadcrumb: React.FunctionComponent<IBreadcrumbProps> = ({
  children,
  color = 'default',
  className = '',
  ...rest
}) => {
  return (
    <nav
      className={classNames(
        styles.JSMBreadcrumb,
        styles[`JSMBreadcrumb--${color}`],
        className
      )}
      aria-label="breadcrumb"
      {...rest}
    >
      {children}
    </nav>
  )
}
