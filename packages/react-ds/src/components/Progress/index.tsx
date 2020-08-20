import React from 'react'

import ProgressBase from './Progress.base'
import ProgressWrapper from './Progress.wrapper'

export const Progress = (props: any) => {
  const Element = props['display'] ? ProgressWrapper : ProgressBase
  return <Element {...props} />
}
export default Progress
