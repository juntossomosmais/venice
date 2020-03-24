import React, { useState } from 'react'

import { IButton } from '@venice/core/models'
import styles from '@venice/styles/src/components/Button.module.scss'

const Button = (props: IButton) => {
  const { children, ...rest } = props

  const [color] = useState(props.color)
  const [variant] = useState(props.variant)

  const setStyle = (c: string | undefined) => (c ? `${styles[c]}` : '')

  return (
    <>
      <button
        className={`${styles.btn} ${setStyle(color)} ${setStyle(variant)}`}
        {...rest}
      >
        {children}
      </button>
    </>
  )
}
export default Button
