import React, { FunctionComponent, SVGAttributes } from 'react'

import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Icon.module.scss'

const defaultProps = {
  fill: '',
  size: 24,
  viewBox: '0 0 24 24',
}

export const Icon = (
  Component: FunctionComponent<SVGAttributes<SVGElement>>
) => ({ children, ...props }: SVGAttributes<SVGElement>) => {
  const { fill, className, size, ...selfProps } = {
    ...defaultProps,
    ...props,
  }
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(styles.icon, styles[fill], className)}
      {...selfProps}
    >
      <Component fill={!styles[fill] ? fill : ''} />
      {children}
    </svg>
  )
}

export default Icon
