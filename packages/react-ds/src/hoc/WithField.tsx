import React, { HTMLProps, forwardRef, FunctionComponent } from 'react'

import classNames from 'classnames/bind'
import uniqid from 'uniqid'

import { IField } from '@venice/core/models/field.model'
import styles from '@venice/styles/components/Field.module.scss'

import Alert from '../components/Icons/Alert'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WithField = (Component: FunctionComponent<any>) =>
  forwardRef(
    (
      {
        id,
        label,
        style,
        className,
        error,
        ...props
      }: IField & HTMLProps<HTMLElement>,
      ref
    ) => {
      const selfId = id || uniqid(`field__`)
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
          <Component
            className={styles.field}
            id={selfId}
            {...props}
            ref={ref}
          />
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
  )

export default WithField
