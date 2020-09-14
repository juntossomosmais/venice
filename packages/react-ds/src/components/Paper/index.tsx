import * as React from 'react'

import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Paper.module.scss'

export const Paper: React.FunctionComponent<React.HTMLProps<
  HTMLDivElement
>> = ({ children, className = '', ...rest }) => {
  return (
    <div className={classNames(styles.paper, className)} {...rest}>
      {children}
    </div>
  )
}
