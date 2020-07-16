export interface IIcon {
  /** default | primary | secondary */
  fill?: 'default' | 'primary' | 'secondary'
  /** string | number */
  width: string | number
  /** string | number */
  height: string | number
  /** string */
  viewBox: string
}
