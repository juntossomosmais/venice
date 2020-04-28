import React, { FC } from 'react'

import { IButton } from '@venice/core/models'
import styles from '@venice/styles/components/Button.module.scss'

interface IButtonProps extends IButton {
  /** React Element */
  endIcon?: React.ReactNode
  /** React Element */
  children: React.ReactNode
  /** React Element */
  startIcon?: React.ReactNode
}

interface CompProps {
  tag: keyof JSX.IntrinsicElements
}

const ButtonComponent: React.FunctionComponent<CompProps &
  React.HTMLAttributes<HTMLOrSVGElement>> = ({
  tag: Wrapper = 'button',
  children,
  ...rest
}) => {
  return <Wrapper {...rest}>{children}</Wrapper>
}

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
      <ButtonComponent
        tag={href ? 'a' : 'button'}
        role={href ? '' : 'button'}
        className={`
            ${styles.btn}
            ${setStyle(color)}
            ${setStyle(variant)}
            ${setStyle(size)}
          `}
        {...rest}
      >
        {startIcon && (
          <span className={`${styles.startIcon}`}>{startIcon}</span>
        )}
        <span className={`${styles.children}`}>{children}</span>
        {endIcon && <span className={`${styles.endIcon}`}>{endIcon}</span>}
      </ButtonComponent>
    </>
  )
}

export default Button
