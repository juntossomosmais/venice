import * as React from 'react'

import { ISplitButton } from '@venice/core/models'
import styles from '@venice/styles/components/SplitButton.module.scss'

import Button from '../Button/Button'

interface ISplitButtonProps extends ISplitButton {
  /** React Element's */
  children: React.ReactNode
}

const SplitButton: React.FC<ISplitButtonProps> = ({
  text,
  children,
  color = 'default',
  size = 'large',
  ...props
}: ISplitButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className={styles.SplitButton} {...props}>
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
                    ${isOpen ? styles.show : styles.hide}`}
        role="menu"
      >
        {children}
      </div>
    </nav>
  )
}

export default SplitButton
