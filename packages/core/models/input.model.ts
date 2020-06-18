import { HTMLProps } from 'react'

export interface IInput extends HTMLProps<HTMLInputElement> {
  /** String */
  label?: string
  /** String */
  error?: string
}
