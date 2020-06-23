import React, { FunctionComponent, HTMLProps } from 'react'

import classNames from 'classnames/bind'
import uniqid from 'uniqid'

import { ISelect } from '@venice/core/models/select.model'
import styles from '@venice/styles/components/Select.module.scss'

import { Alert, Caret } from '../icons'

interface ISelectProps extends ISelect {
  /** React Element */
  icon?: React.ReactNode | string
}

const Select: FunctionComponent<ISelectProps &
  HTMLProps<HTMLSelectElement>> = ({
  id,
  label,
  style,
  className,
  error,
  placeholder,
  children,
  icon,
  ...props
}: ISelectProps & HTMLProps<HTMLSelectElement>) => {
  const selfId = id || uniqid(`select__`)
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
      <div className={styles.selectWrapper}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <select className={styles.select} id={selfId} {...props}>
          <option hidden>{placeholder}</option>
          {children}
        </select>
        <Caret className={styles.caret} viewBox="0 0 24 13" />
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

export default Select
