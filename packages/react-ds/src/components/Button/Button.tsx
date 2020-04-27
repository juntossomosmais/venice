import React, { FC } from 'react'

import PropTypes from 'prop-types'

import { IButton } from '@venice/core/models'
import styles from '@venice/styles/components/Button.module.scss'

interface IButtonProps extends IButton {
  children: React.ReactNode
}

const Button: FC<IButtonProps> = ({
  color,
  variant,
  size,
  href,
  children,
  ...rest
}: IButtonProps) => {
  const setStyle = (
    c: IButton['color'] | IButton['variant'] | IButton['size']
  ) => (c ? `${styles[c]}` : '')

  return (
    <>
      {href ? (
        <a
          className={`
            ${styles.btn}
            ${setStyle(color)}
            ${setStyle(variant)}
            ${setStyle(size)}
          `}
          {...rest}
        >
          <span className={`${styles.children}`}>{children}</span>
        </a>
      ) : (
        <button
          className={`
            ${styles.btn}
            ${setStyle(color)}
            ${setStyle(variant)}
            ${setStyle(size)}
          `}
          {...rest}
        >
          <span className={`${styles.children}`}>{children}</span>
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
  /** (optional) string */
  href: PropTypes.any,
  /** (optional) string */
  size: PropTypes.any,
}

Button.defaultProps = {
  color: 'default',
  variant: 'filled',
  size: 'medium',
}

export default Button
