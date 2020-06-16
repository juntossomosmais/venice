export interface IIcon {
  /** default | primary | secondary */
  fill?: 'default' | 'primary' | 'secondary'
  /** string | number */
  width: string | number
  /** string */
  height: string
  /** string */
  viewBox: string
}
