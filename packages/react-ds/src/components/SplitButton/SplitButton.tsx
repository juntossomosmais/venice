import * as React from 'react'

import classNames from 'classnames/bind'

import { ISplitButton } from '@venice/core/models'
import styles from '@venice/styles/components/SplitButton.module.scss'

import Button from '../Button/Button'

interface ISplitButtonProps extends ISplitButton {
  /** React Element */
  children: React.ReactNode
}

const SplitButton: React.FC<ISplitButtonProps> = ({
  text,
  children,
  color = 'default',
  size = 'large',
  direction = 'rtl',
  isFitMenu = false,
  openType = 'hover',
  ...props
}: ISplitButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const clickType = openType === 'click' && isOpen

  const navClassNames = classNames(styles.splitButton, styles[openType], {
    [styles.active]: clickType,
  })

  const menuClassNames = classNames(
    styles.dropdown,
    styles[size],
    styles[color],
    styles[direction],
    { [styles.fitbutton]: isFitMenu }
  )

  return (
    <nav className={navClassNames} {...props}>
      <Button
        className={styles['inner-button']}
        color={color}
        size={size}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {text}
        <span className={styles.caret}></span>
      </Button>
      <div className={menuClassNames} role="menu">
        {children}
      </div>
    </nav>
  )
}

export default SplitButton
