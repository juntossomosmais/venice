import React from 'react'

import { ISpinner } from '@venice/core/models'
import styles from '@venice/styles/components/Spinner.module.scss'

const Spinner = ({ color = 'default', size = 36, ...rest }: ISpinner) => {
  return (
    <div
      className={`
      ${styles.spinner}
      ${styles[color]}
    `}
      style={{
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
