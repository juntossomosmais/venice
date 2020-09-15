export interface ITooltip {
  /** 'dark' | 'light' */
  theme?: 'dark' | 'light'
  /** 'top' | 'right' */
  position?: 'top' | 'right'
  /** boolean */
  show?: boolean
  /** function **/
  render: () => JSX.Element
}
