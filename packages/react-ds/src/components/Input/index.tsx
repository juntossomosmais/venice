import React, { HTMLProps, forwardRef, Ref } from 'react'

import classNames from 'classnames/bind'
import uniqid from 'uniqid'

import { IField } from '@venice/core/models/field.model'
import styles from '@venice/styles/components/Field.module.scss'

import Alert from '../Icons/Alert'

const InternalInput = (
  {
    id,
    label,
    style,
    className,
    error,
    ...props
  }: IField & HTMLProps<HTMLInputElement>,
  ref?: Ref<HTMLInputElement>
) => {
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
      <input className={styles.field} id={selfId} {...props} ref={ref} />
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

export const Input = forwardRef(InternalInput)
