import React, { FC } from 'react'

import PropTypes from 'prop-types'

import { IButton } from '@venice/core/models'
import styles from '@venice/styles/src/components/Button.module.scss'

interface IButtonProps extends IButton {
  children: React.ReactNode
}

const Button: FC<IButtonProps> = ({
  color,
  variant,
  href,
  children,
  ...rest
}: IButtonProps) => {
  const setStyle = (c: string) => (c ? `${styles[c]}` : '')

  return (
    <>
      {href ? (
        <a
          className={`${styles.btn} ${setStyle(color)} ${setStyle(variant)}`}
          {...rest}
        >
          {children}
        </a>
      ) : (
        <button
          className={`${styles.btn} ${setStyle(color)} ${setStyle(variant)}`}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  )
}

Button.propTypes = {
  /**  'default' | 'primary' | 'secondary' */
  color: PropTypes.any,
  /** 'filled' | 'outlined' | 'text' */
  variant: PropTypes.any,
  /** (optional) true | false */
  /** (optional) string */
  href: PropTypes.any,
  disabled: PropTypes.any,
}

Button.defaultProps = {
  color: 'default',
  variant: 'filled',
}

export default Button
