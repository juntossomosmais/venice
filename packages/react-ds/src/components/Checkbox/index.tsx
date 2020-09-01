import * as React from 'react'

import { IField } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'
import uniqid from 'uniqid'

import styles from '@venice/styles/components/CheckboxRadio.module.scss'

import Alert from '../Icons/Alert'

const InternalCheckbox = (
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
      <div>
        <input
          type="checkbox"
          className={styles.field}
          id={selfId}
          {...props}
          ref={ref}
        />
        {label && (
          <label htmlFor={selfId} className={styles.label}>
            {label}
          </label>
        )}
      </div>
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

export const Checkbox = React.forwardRef(InternalCheckbox)
