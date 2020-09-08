import * as React from 'react'

import { ITooltip } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Spinner.module.scss'

export interface ITooltipProps extends ITooltip {
  /** string */
  className?: string
}

export const Tooltip = ({
  className = '',
  color = 'default',
  position = 'top',
  ...rest
}: ITooltipProps) => {
  return (
    <div className={classNames(styles[position], styles[color], className)}>
      Hover over me
      <span>Info Tooltip</span>
    </div>
  )
}
