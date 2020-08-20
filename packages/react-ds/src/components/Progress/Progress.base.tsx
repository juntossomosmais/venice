import React, { useState, useEffect } from 'react'

import { IProgressBase } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Progress.module.scss'

export const VALID_COLORS = ['primary', 'secondary', 'success', 'danger']

export const Progress = ({
  className,
  color,
  value,
  ...props
}: any & IProgressBase & React.HTMLProps<HTMLProgressElement>) => {
  const [selfValue, setValue] = useState(0)
  const selfColor =
    color && VALID_COLORS.includes(color.toLocaleLowerCase())
      ? color.toLocaleLowerCase()
      : 'secondary'

  useEffect(() => {
    setValue(Number(value))
  }, [value])

  const styleContainer = classNames(
    styles.progress,
    styles[selfColor],
    className
  )
  return <progress value={selfValue} className={styleContainer} {...props} />
}

export default Progress
