enum type {
  'success',
  'danger',
  'toast',
  'vip',
}
enum color {
  'primary',
  'secondary',
  'success',
  'danger',
}

export interface IAlert extends HTMLElement {
  /**  'success' | 'danger' | 'toast' | 'vip' */
  type?: type | string
  /**  'primary' | 'secondary' | 'success' | 'danger' */
  color?: color | string
  /** boolean */
  closable?: boolean
  /** function */
  onClose?(): void
}
