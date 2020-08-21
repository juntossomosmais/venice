import React, { useState, useEffect } from 'react'

import { IProgress } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Progress.module.scss'

import ProgressBase from './Progress.base'

export const transitionDuration = 250

const animateValue = (fn, start = 0, end = 0) => {
  let current = start
  const range = end - start
  if (!range) return
  const increment = end > start ? 1 : -1
  const stepTime = Math.abs(Math.floor(transitionDuration / range))
  const timer = window.setInterval(() => {
    current += increment
    fn(current)
    if (current === end) {
      clearInterval(timer)
    }
  }, stepTime)

  return timer
}

export interface IProgressWrapper extends IProgress {
  /** string */
  progressClass?: string
}

export const ProgressWrapper = ({
  progressClass,
  className,
  display,
  color,
  value,
  max,
  id,
  ...props
}: IProgressWrapper & React.HTMLProps<HTMLDivElement>) => {
  const [selfValue, setValue] = useState(0)

  useEffect(() => {
    const timer = animateValue(setValue, selfValue, Number(value))
    return () => clearInterval(timer)
  }, [value])

  const styleContainer = classNames(
    styles['progress-wrapper'],
    { [styles['left']]: display === 'left' },
    { [styles['right']]: display !== 'left' },
    className
  )

  return (
    <div className={styleContainer} {...props}>
      <span className={styles.value}>{selfValue}%</span>
      <ProgressBase
        className={progressClass}
        color={color}
        id={id}
        value={value}
        max={max}
      />
    </div>
  )
}

export default ProgressWrapper
