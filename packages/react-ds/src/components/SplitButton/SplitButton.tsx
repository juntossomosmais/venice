import * as React from 'react'

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
  ...props
}: ISplitButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className={styles.splitButton} {...props}>
      <Button
        color={color}
        onClick={() => setIsOpen((prev) => !prev)}
        size={size}
        aria-expanded={isOpen}
      >
        {text}
        <span className={styles.caret}></span>
      </Button>
      <div
        className={`${styles.dropdown}
                    ${styles[size]}
                    ${styles[color]}
                    ${styles[direction]}
                    ${isOpen ? styles.active : ''}`}
        role="menu"
      >
        {children}
      </div>
    </nav>
  )
}

export default SplitButton
