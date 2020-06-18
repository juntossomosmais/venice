import { HTMLProps, ReactNode } from 'react'

export interface ISelect extends HTMLProps<HTMLSelectElement> {
  /** String */
  label?: string
  /** String */
  error?: string
  /** String */
  placeholder?: string
  /** String */
  icon?: ReactNode
}
