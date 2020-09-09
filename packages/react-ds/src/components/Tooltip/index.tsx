import * as React from 'react'

import { ITooltip } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Tooltip.module.scss'

export const Tooltip: React.FunctionComponent<ITooltip> = ({
  children,
  render,
  theme = 'dark',
  position = 'top',
}) => {
  const menuClassNames = classNames(
    styles[theme],
    styles[position],
    styles.tooltip
  )

  return (
    <div className={menuClassNames}>
      {render && (
        <div className={classNames(styles.tooltipContent)}>{render()}</div>
      )}
      <div className={classNames(styles.tooltipTarget)}>{children}</div>
    </div>
  )
}
