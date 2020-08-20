import React from 'react'

import { IProgressBase } from '@juntossomosmais/venice-types'

import ProgressBase from './Progress.base'
import ProgressWrapper, { IProgressWrapper } from './Progress.wrapper'

export const Progress = ({
  display,
  ...props
}: IProgressWrapper & IProgressBase) =>
  display ? (
    <ProgressWrapper display={display} {...props} />
  ) : (
    <ProgressBase {...props} />
  )

export default Progress
