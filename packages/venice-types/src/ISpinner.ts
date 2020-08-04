export interface ISpinner {
  /**  'default' | 'primary' | 'secondary' */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'default-contrast'
    | 'primary-contrast'
    | 'secondary-contrast'
    | string
  /** number */
  size?: number
}
