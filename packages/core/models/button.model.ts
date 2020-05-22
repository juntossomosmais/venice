export interface IButton {
  /**  'default' | 'primary' | 'secondary' */
  color?: 'default' | 'primary' | 'secondary'
  /** boolean */
  shape?: 'round-square' | 'circle'
  /** boolean */
  disabled?: boolean
  /** href <a> */
  href?: string
  /** boolean */
  isLoading?: boolean
  /** 'medium' | 'small' */
  size?: 'medium' | 'small'
  /** 'filled' | 'outlined' | 'text' */
  variant?: 'filled' | 'outlined' | 'text'
}
