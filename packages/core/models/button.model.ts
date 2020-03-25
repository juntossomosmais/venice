export interface IButton {
  /**  'default' | 'primary' | 'secondary' */
  color: 'default' | 'primary' | 'secondary'
  /** 'fill' | 'outline' | 'blank' */
  variant: 'filled' | 'outlined' | 'blank'
  /** true | 'false */
  disabled?: boolean
}
