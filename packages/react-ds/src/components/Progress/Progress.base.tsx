import React, { useState, useEffect } from 'react'

import { IProgressBase } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Progress.module.scss'

const Colors = [
  ['primary', 'var(--primary-color)'],
  ['secondary', 'var(--secondary-color)'],
  ['success', 'var(--success-color)'],
  ['danger', 'var(--danger-color)'],
]
const defaultColor = Colors[1][1]

const getColor = (color = defaultColor) => {
  const _color = Colors.find(([type]) => type === color.toLocaleLowerCase())
  return (_color && _color[1]) || color
}

export const Progress = ({
  className,
  color,
  value,
  max = 100,
  ...props
}: IProgressBase & React.HTMLProps<HTMLDivElement>) => {
  const [selfValue, setValue] = useState(0)
  const selfColor = getColor(color)

  useEffect(() => {
    setValue(Number(value))
  }, [value])

  const styleContainer = classNames(styles.progress, className)
  return (
    <div role="progress" className={styleContainer} {...props}>
      <div
        className={styles['progress-bar']}
        style={{
          transform: `scaleX(${selfValue / max})`,
          background: selfColor,
        }}
      />
    </div>
  )
}

export default Progress
