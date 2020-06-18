import React, { FunctionComponent } from 'react'

import classNames from 'classnames/bind'
import uniqid from 'uniqid'

import { ISelect } from '@venice/core/models/select.model'
import styles from '@venice/styles/components/Select.module.scss'

const Select: FunctionComponent<ISelect> = ({
  id,
  label,
  style,
  className,
  error,
  placeholder,
  children,
  icon,
  ...props
}: ISelect) => {
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
        <div className={styles.caret}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 13">
            <path d="M 23.890625 1.671875 L 23.753906 1.816406 L 13.507812 12.417969 C 13.160156 12.777344 12.640625 13 12.0625 13 C 11.480469 13 10.960938 12.769531 10.613281 12.417969 L 0.375 1.835938 L 0.203125 1.660156 C 0.0742188 1.488281 0 1.285156 0 1.070312 C 0 0.480469 0.554688 0 1.25 0 L 22.855469 0 C 23.550781 0 24.105469 0.480469 24.105469 1.070312 C 24.105469 1.296875 24.023438 1.503906 23.890625 1.671875 Z M 23.890625 1.671875 " />
          </svg>
        </div>
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
