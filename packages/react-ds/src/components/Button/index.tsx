import * as React from 'react'

import classNames from 'classnames/bind'

import { IButton, IDynamicComponentProps } from '@venice/core/models'
import styles from '@venice/styles/components/Button.module.scss'

import { Spinner } from '../Spinner'

export interface IButtonProps extends IButton {
  /** string */
  className?: string
  /** React Element */
  children?: React.ReactNode
  /** React Element | string */
  endIcon?: React.ReactNode | string
  /** React Element | string */
  startIcon?: React.ReactNode | string
  /** React MouseEvent  */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonComponent: React.FunctionComponent<
  IDynamicComponentProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ as: Wrapper = 'button', children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>
}

export const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  className = '',
  color = 'default',
  endIcon,
  href,
  isLoading = false,
  shape = 'round-square',
  size = 'large',
  startIcon,
  variant = 'filled',
  ...rest
}) => {
  return (
    <>
      <ButtonComponent
        as={href ? 'a' : 'button'}
        role={href ? '' : 'button'}
        aria-busy={isLoading}
        className={classNames(
          styles.button,
          styles[color],
          styles[variant],
          styles[size],
          styles[shape],
          { [styles.isLoading]: isLoading },
          className
        )}
        {...(href && { href })}
        {...rest}
      >
        {isLoading && (
          <Spinner
            color={variant === 'filled' ? `${color}-contrast` : color}
            size={size === 'small' ? 16 : 24}
            className={styles.loading}
          />
        )}
        <>
          {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
          <span className={styles.children}>{children}</span>
          {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
        </>
      </ButtonComponent>
    </>
  )
}
