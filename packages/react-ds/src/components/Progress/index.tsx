import React from 'react'

import ProgressBase from './Progress.base'
import ProgressWrapper from './Progress.wrapper'

export const Progress = ({ display, ...props }: any) =>
  display ? (
    <ProgressWrapper display={display} {...props} />
  ) : (
    <ProgressBase {...props} />
  )

export default Progress
