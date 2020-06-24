import React, { HTMLProps, forwardRef } from 'react'

import WithField from '../../hoc/WithField'

const Input = (
  props: HTMLProps<HTMLInputElement>,
  ref?: React.Ref<HTMLInputElement>
) => <input {...props} ref={ref} />

export default WithField(forwardRef(Input))
