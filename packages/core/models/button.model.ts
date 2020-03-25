export interface IButton {
  /**  'default' | 'primary' | 'secondary' */
  color: 'default' | 'primary' | 'secondary'
  /** 'fill' | 'outline' | 'blank' */
  variant: 'fill' | 'outline' | 'blank'
  /** true | 'false */
  disabled?: boolean
}
