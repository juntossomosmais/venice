import React from 'react'

import { ISpinner } from '@venice/core/models'
import styles from '@venice/styles/components/Spinner.module.scss'

interface ISpinnerProps extends ISpinner {
  /** string */
  className: string
}

const Spinner = ({
  className = '',
  color = 'default',
  size = 36,
  ...rest
}: ISpinnerProps) => {
  return (
    <div
      className={`
      ${styles.spinner}
      ${styles[color]}
      ${className}
    `}
      style={{
        fontSize: size,
        height: size,
        width: size,
      }}
      role="progressbar"
      aria-busy="true"
      {...rest}
    ></div>
  )
}

export default Spinner
