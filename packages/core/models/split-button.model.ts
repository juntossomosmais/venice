export interface ISplitButton {
  /** 'large' | 'medium'  */
  size?: 'large' | 'medium'
  /**  'default' | 'primary' | 'secondary' */
  color?: 'default' | 'primary' | 'secondary'
  /** string */
  text: string
  /** ltr | rtl */
  direction?: 'ltr' | 'rtl'
}
