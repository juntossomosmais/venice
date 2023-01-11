import * as React from 'react'

import { IButton, IDynamicComponent } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Button.module.scss'

import { Spinner } from '../Spinner'

export interface IButtonProps extends Omit<IButton, 'color'> {
  /** string */
  className?: string
  /**  'default' | 'primary' | 'secondary' | 'white' */
  color?: IButton['color'] | 'white'
  /** React Element */
  children?: React.ReactNode
  /** React Element | string */
  endIcon?: React.ReactNode | string
  /** React Element | string */
  startIcon?: React.ReactNode | string
  /** React MouseEvent  */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** 'submit' | 'reset' | 'button' | undefined */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const ButtonComponent: React.FunctionComponent<
  IDynamicComponent & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ as: Wrapper = 'button', children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>
}

export const Button: React.FunctionComponent<IButtonProps> = ({
  bold = false,
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
  onClick = () => ({}),
  ...rest
}) => {
  return (
    <>
      <ButtonComponent
        as={href ? 'a' : 'button'}
        role={href ? 'link' : 'button'}
        aria-busy={isLoading}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          !isLoading && onClick(e)
        }
        className={classNames(
          styles.JSMButton,
          styles[`JSMButton--${color}`],
          styles[`JSMButton--${variant}`],
          styles[`JSMButton--${size}`],
          styles[`JSMButton--${shape}`],
          {
            [styles['JSMButton--isLoading']]: isLoading,
            [styles['JSMButton--bold']]: bold,
          },
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
          {startIcon && (
            <span className={styles.JSMButtonStartIcon}>{startIcon}</span>
          )}
          <span className={styles.JSMButtonChildren}>{children}</span>
          {endIcon && (
            <span className={styles.JSMButtonEndIcon}>{endIcon}</span>
          )}
        </>
      </ButtonComponent>
    </>
  )
}
