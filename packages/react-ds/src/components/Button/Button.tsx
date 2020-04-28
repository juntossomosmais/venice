import React, { FC } from 'react'

import { IButton } from '@venice/core/models'
import styles from '@venice/styles/components/Button.module.scss'

interface IButtonProps extends IButton {
  children: React.ReactNode
  endIcon: React.ReactNode
  startIcon: React.ReactNode
}

const childrenElement = ({ children, endIcon, startIcon }: IButtonProps) => (
  <>
    {startIcon && <span className={`${styles.startIcon}`}>{startIcon}</span>}
    <span className={`${styles.children}`}>{children}</span>
    {endIcon && <span className={`${styles.endIcon}`}>{endIcon}</span>}
  </>
)

const Button: FC<IButtonProps> = ({
  children,
  color = 'default',
  endIcon,
  href,
  size = 'medium',
  startIcon,
  variant = 'filled',
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
          {childrenElement({ children, endIcon, startIcon })}
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
          {childrenElement({ children, endIcon, startIcon })}
        </button>
      )}
    </>
  )
}

export default Button
