import React, { FunctionComponent, SVGAttributes } from 'react'

import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Icon.module.scss'

const defaultProps = {
  fill: '',
  size: '',
  viewBox: '0 0 24 24',
}

export const Icon = (
  Component: FunctionComponent<SVGAttributes<SVGElement>>
) => ({ children, ...props }: SVGAttributes<SVGElement>) => {
  const { fill, className, size, ...selfProps } = {
    ...defaultProps,
    ...props,
  }
  const selfSize = !size
    ? {}
    : {
        width: size,
        height: size,
      }

  const selfFill =
    !fill && !styles[fill]
      ? {}
      : {
          fill: styles[fill] || fill,
        }

  return (
    <svg
      {...selfSize}
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(styles.icon, styles[fill], className)}
      {...selfProps}
    >
      <Component {...selfFill} />
      {children}
    </svg>
  )
}

export default Icon
