import React, { HTMLProps, forwardRef } from 'react'

import Field from '../Field/Field'

const Input = (
  props: HTMLProps<HTMLInputElement>,
  ref?: React.Ref<HTMLInputElement>
) => <input {...props} ref={ref} />

export default Field(forwardRef(Input))
