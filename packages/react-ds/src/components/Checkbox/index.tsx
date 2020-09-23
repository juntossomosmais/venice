import * as React from 'react'

import { IField } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'
import uniqid from 'uniqid'

import styles from '@venice/styles/components/CheckboxRadio.module.scss'

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
      <label htmlFor={selfId} className={styles.label}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={selfId}
          {...props}
          ref={ref}
        />
        <span className={`${styles.customCheckbox} jsm-icon-check`}></span>
        {label}
      </label>
      {error && <div className={`${styles.error} jsm-icon-alert`}>{error}</div>}
    </div>
  )
}

export const Checkbox = React.forwardRef(InternalCheckbox)
