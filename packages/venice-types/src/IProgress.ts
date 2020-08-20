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

export interface IProgressBase extends HTMLElement {
  /**  'primary' | 'secondary' | 'success' | 'danger' */
  color?: color | string
  value?: number
  max?: number
}

export interface IProgress extends IProgressBase {
  /**  'success' | 'danger' | 'toast' | 'vip' */
  progressClass?: type | string
  /**  'left' | 'right' */
  display?: string
}
