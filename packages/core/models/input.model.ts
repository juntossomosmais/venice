import { HTMLProps } from 'react'

export interface IInput extends HTMLProps<HTMLInputElement> {
  /** String */
  label?: string
  /** String */
  name: string
  /** String */
  style?: object
  /** String */
  className?: string
  /** String */
  error?: string
}
