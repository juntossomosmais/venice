import * as React from 'react'

import { IField } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'
import { IMaskInput } from 'react-imask'
import uniqid from 'uniqid'

import styles from '@venice/styles/components/Field.module.scss'

const InternalInput = (
  {
    id,
    label,
    style,
    className,
    error,
    ...props
  }: IField & React.HTMLProps<HTMLInputElement>,
  ref?: React.Ref<HTMLInputElement>
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
      <IMaskInput className={styles.field} id={selfId} {...props} ref={ref} />
      {/* TODO: Replace for alert component */}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export const Input = React.forwardRef(InternalInput)
