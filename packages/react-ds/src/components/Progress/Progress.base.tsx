import React, { useState, useEffect } from 'react'

import { IProgressBase } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Progress.module.scss'

export const VALID_COLORS = ['primary', 'secondary', 'success', 'danger']

export const Progress: React.FunctionComponent<
  IProgressBase & React.HTMLProps<HTMLProgressElement>
> = ({ className, color = '', value, max, ...props }) => {
  const [selfValue, setValue] = useState(0)
  const selfColor = VALID_COLORS.includes(color.toLocaleLowerCase())
    ? color.toLocaleLowerCase()
    : 'secondary'

  useEffect(() => {
    setValue(value)
  }, [value])

  const styleContainer = classNames(
    styles.progress,
    styles[selfColor],
    className
  )
  return (
    <progress
      value={selfValue}
      max={max}
      className={styleContainer}
      {...props}
    />
  )
}

export default Progress
