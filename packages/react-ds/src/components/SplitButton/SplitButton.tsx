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
  menuFitButtonContainer = false,
  openType = 'hover',
  ...props
}: ISplitButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const clickType = openType === 'click' && isOpen ? styles.active : ''

  return (
    <nav
      className={`${styles.SplitButton}
      ${styles[openType]}
      ${clickType}`}
      {...props}
    >
      <Button
        color={color}
        size={size}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {text}
        <span className={styles.caret}></span>
      </Button>
      <div
        className={`${styles.dropdown}
                    ${styles[size]}
                    ${styles[color]}
                    ${styles[direction]}
                    ${menuFitButtonContainer ? styles.fitbutton : ''}`}
        role="menu"
      >
        {children}
      </div>
    </nav>
  )
}

export default SplitButton
