export interface ITag {
  /** string */
  asideInfo?: string
  /**  'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'purple' */
  color: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'purple'
  /** 'rectangle' | 'round-square' */
  format: 'rectangle' | 'round-square'
  /** boolean */
  isClickable?: boolean
}
