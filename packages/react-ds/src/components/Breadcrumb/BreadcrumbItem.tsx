import * as React from 'react'

import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Breadcrumb.module.scss'

export const BreadcrumbItem: React.FunctionComponent<React.HTMLProps<
  HTMLDivElement
>> = ({ children, className = '', ...rest }) => {
  return (
    <div className={classNames(styles.JSMBreadcrumbItem, className)} {...rest}>
      {children}
    </div>
  )
}
