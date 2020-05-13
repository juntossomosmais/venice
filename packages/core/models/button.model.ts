export interface IButton {
  /**  'default' | 'primary' | 'secondary' */
  color?: 'default' | 'primary' | 'secondary'
  /** boolean */
  isLoading?: boolean
  /** boolean */
  disabled?: boolean
  /** href <a> */
  href?: string
  /** 'medium' | 'small' */
  size?: 'medium' | 'small'
  /** 'filled' | 'outlined' | 'text' */
  variant?: 'filled' | 'outlined' | 'text'
}
