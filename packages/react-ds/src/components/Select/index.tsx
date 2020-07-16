import React, { HTMLProps, forwardRef, Ref } from 'react'

import { IField } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'
import uniqid from 'uniqid'

import stylesField from '@venice/styles/components/Field.module.scss'
import styles from '@venice/styles/components/Select.module.scss'

import { Alert, Caret } from '../Icons'

interface ISelectProps extends IField {
  /** React Element */
  icon?: React.ReactNode | string
}

const InternalSelect = (
  {
    id,
    label,
    style,
    className,
    error,
    placeholder,
    children,
    icon,
    ...props
  }: ISelectProps & HTMLProps<HTMLSelectElement>,
  ref?: Ref<HTMLSelectElement>
) => {
  const selfId = id || uniqid(`select__`)
  const styleContainer = classNames(
    stylesField.container,
    { [stylesField.invalid]: Boolean(error) },
    className
  )

  return (
    <div className={styleContainer} style={style}>
      {label && (
        <label htmlFor={selfId} className={stylesField.label}>
          {label}
        </label>
      )}
      <div className={styles.wrapper}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <select
          {...props}
          id={selfId}
          className={classNames(stylesField.field, styles.field)}
          ref={ref}
        >
          <option hidden value="">
            {placeholder}
          </option>
          {children}
        </select>
        <Caret className={styles.caret} viewBox="0 0 24 13" />
      </div>
      {/* TODO: Replace for alert component */}
      {error && (
        <div className={stylesField.error}>
          <Alert />
          {error}
        </div>
      )}
    </div>
  )
}

export const Select = forwardRef(InternalSelect)
