import React, { FC } from 'react'

import { IButton } from '@venice/core/models'
import styles from '@venice/styles/src/components/Button.module.scss'
import PropTypes from 'prop-types'

interface IButtonProps extends IButton {
  children: React.ReactNode
}

const Button: FC<IButtonProps> = ({
  color,
  variant,
  children,
  ...rest
}: IButtonProps) => {
  const setStyle = (c: string) => (c ? `${styles[c]}` : '')

  return (
    <>
      <button
        className={`${styles.btn} ${setStyle(color)} ${setStyle(variant)}`}
        {...rest}
      >
        {children}
      </button>
    </>
  )
}

Button.propTypes = {
  /**  'default' | 'primary' | 'secondary' */
  color: PropTypes.any,
  /** 'filled' | 'outlined' | 'text' */
  variant: PropTypes.any,
  /** true | false */
  disabled: PropTypes.any,
}

Button.defaultProps = {
  color: 'default',
  variant: 'filled',
}

export default Button
