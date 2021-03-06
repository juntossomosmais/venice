import React, { useState, useEffect } from 'react'

import { IProgress } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Progress.module.scss'

import ProgressBase from './Progress.base'

export const transitionDuration = 250

const animateValue = (fn, start = 0, end = 0) => {
  const _start = Math.floor(start)
  const _end = Math.floor(end)

  let current = _start
  const range = _end - _start
  if (!range) return
  const increment = _end > _start ? 1 : -1
  const stepTime = Math.abs(Math.floor(transitionDuration / range))
  const timer = window.setInterval(() => {
    current += increment
    fn(current)
    if (current === _end) {
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
  value = 0,
  max = 100,
  id,
  ...props
}: IProgressWrapper & React.HTMLProps<HTMLDivElement>) => {
  const [selfValue, setValue] = useState(0)
  const [modValue, setModValue] = useState(0)

  useEffect(() => {
    const percValue = (Number(value) / Number(max)) * 100
    const timer = animateValue(setValue, selfValue, percValue)
    const mod = +(Number(percValue) % 1).toFixed(2)
    setModValue(mod)
    return () => clearInterval(timer)
  }, [value, max])

  const styleContainer = classNames(
    styles['progress-wrapper'],
    { [styles['left']]: display === 'left' },
    { [styles['right']]: display !== 'left' },
    className
  )

  return (
    <div className={styleContainer} {...props}>
      <span className={styles.value}>{selfValue + modValue}%</span>
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
