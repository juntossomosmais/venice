import * as React from 'react'

import { IBreadcrumb } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Breadcrumb.module.scss'

export const Breadcrumb: React.FunctionComponent<
  IBreadcrumb & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ children, color = 'default', className = '', ...rest }) => {
  return (
    <nav
      className={classNames(styles.breadcrumb, styles[color], className)}
      aria-label="breadcrumb"
      {...rest}
    >
      {children}
    </nav>
  )
}

export const BreadcrumbItem: React.FunctionComponent<React.HTMLProps<
  HTMLDivElement
>> = ({ children, className = '', ...rest }) => {
  return (
    <div className={classNames(styles.breadcrumbItem, className)} {...rest}>
      {children}
    </div>
  )
}
