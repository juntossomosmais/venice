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
  const setStyle = (c: string | undefined) => (c ? `${styles[c]}` : '')

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
  /** 'fill' | 'outline' | 'blank' */
  variant: PropTypes.any,
}

Button.defaultProps = {
  color: 'default',
  variant: 'fill',
}

export default Button
