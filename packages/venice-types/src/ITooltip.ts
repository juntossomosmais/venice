export interface ITooltip {
  /** 'dark' | 'light' */
  theme?: 'dark' | 'light'
  /** 'top' | 'right' */
  position?: 'top' | 'right'
  /** function **/
  render: () => JSX.Element
}
