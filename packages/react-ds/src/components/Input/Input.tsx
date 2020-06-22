import React, { FunctionComponent, HTMLProps } from 'react'

import classNames from 'classnames/bind'
import uniqid from 'uniqid'

import { IInput } from '@venice/core/models/input.model'
import styles from '@venice/styles/components/Input.module.scss'
import Alert from '../icons/Alert'

const Input: FunctionComponent<IInput & HTMLProps<HTMLInputElement>> = ({
  id,
  label,
  style,
  className,
  error,
  ...props
}: IInput & HTMLProps<HTMLInputElement>) => {
  const selfId = id || uniqid(`input__`)
  const styleContainer = classNames(
    styles.container,
    { [styles.invalid]: Boolean(error) },
    className
  )

  return (
    <div className={styleContainer} style={style}>
      {label && (
        <label htmlFor={selfId} className={styles.label}>
          {label}
        </label>
      )}
      <input className={styles.input} id={selfId} {...props} />
      {/* TODO: Replace for alert component */}
      {error && (
        <div className={styles.error}>
          <Alert />
          {error}
        </div>
      )}
    </div>
  )
}

export default Input
