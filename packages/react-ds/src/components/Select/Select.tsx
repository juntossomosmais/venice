import React, { FunctionComponent, HTMLProps } from 'react'

import classNames from 'classnames/bind'
import uniqid from 'uniqid'

import { ISelect } from '@venice/core/models/select.model'
import styles from '@venice/styles/components/Select.module.scss'

import Caret from '../icons/Caret'

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
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.995 0C2.235 0 0 2.24 0 5C0 7.76 2.235 10 4.995 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 4.995 0ZM5.5 5.5V2.5H4.5V5.5H5.5ZM5.5 7.5V6.5H4.5V7.5H5.5ZM1 5C1 7.21 2.79 9 5 9C7.21 9 9 7.21 9 5C9 2.79 7.21 1 5 1C2.79 1 1 2.79 1 5Z"
            />
          </svg>
          {error}
        </div>
      )}
    </div>
  )
}

export default Select
