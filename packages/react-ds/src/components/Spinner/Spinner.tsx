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
    <svg
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
      viewBox="0 0 66 66"
      {...rest}
    >
      <circle
        className={`
          ${styles.circle}
        `}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  )
}

export default Spinner
