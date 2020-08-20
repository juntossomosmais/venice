enum color {
  'primary',
  'secondary',
  'success',
  'danger',
}

export interface IProgressBase extends HTMLProgressElement {
  /**  'primary' | 'secondary' | 'success' | 'danger' */
  color?: color | string
}

export interface IProgress extends IProgressBase {
  /**  'left' | 'right' */
  display?: string
}
