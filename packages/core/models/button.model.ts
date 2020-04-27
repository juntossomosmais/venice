export interface IButton {
  /**  'default' | 'primary' | 'secondary' */
  color?: 'default' | 'primary' | 'secondary'
  /** 'fill' | 'outline' | 'text' */
  variant?: 'filled' | 'outlined' | 'text'
  /** true | 'false */
  disabled?: boolean
  /** href <a> */
  href?: string
  /** 'medium' | 'small' */
  size?: 'medium' | 'small'
}
