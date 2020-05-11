export interface IButton {
  /**  'default' | 'primary' | 'secondary' */
  color?: 'default' | 'primary' | 'secondary'
  /** true | 'false */
  disabled?: boolean
  /** href <a> */
  href?: string
  /** 'medium' | 'small' */
  size?: 'medium' | 'small'
  /** 'filled' | 'outlined' | 'text' */
  variant?: 'filled' | 'outlined' | 'text'
}
