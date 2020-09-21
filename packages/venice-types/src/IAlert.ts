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

enum size {
  'small',
  'medium',
  'large',
}

enum variants {
  'filled',
  'transparent',
}

export interface IAlert extends HTMLElement {
  /**  'success' | 'danger' | 'toast' | 'vip' */
  type?: keyof typeof type | string
  /**  'primary' | 'secondary' | 'success' | 'danger' */
  color?: keyof typeof color | string
  /** boolean */
  closable?: boolean
  /**  'transparent' | 'filled' */
  variants?: keyof typeof variants | string
  /**  'small' | 'medium' | 'large' */
  size?: keyof typeof size | string
  /** function */
  onClose?(): void
}
