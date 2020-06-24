import React, { HTMLProps, forwardRef } from 'react'

import classNames from 'classnames/bind'

import { IField } from '@venice/core/models/field.model'
import styles from '@venice/styles/components/Select.module.scss'

import WithField from '../../hoc/WithField'
import Caret from '../Icons/Caret'

interface IFieldProps extends IField {
  /** React Element */
  icon?: React.ReactNode | string
}

const Select = (
  {
    placeholder,
    children,
    className,
    icon,
    ...props
  }: IFieldProps & HTMLProps<HTMLSelectElement>,
  ref?: React.Ref<HTMLSelectElement>
) => (
  <div className={styles.wrapper}>
    {icon && <span className={styles.icon}>{icon}</span>}
    <select
      {...props}
      className={classNames(className, styles.field)}
      ref={ref}
    >
      <option hidden value="">
        {placeholder}
      </option>
      {children}
    </select>
    <Caret className={styles.caret} viewBox="0 0 24 13" />
  </div>
)

export default WithField(forwardRef(Select))
