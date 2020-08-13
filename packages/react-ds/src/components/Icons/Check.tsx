import React, { FunctionComponent, SVGAttributes } from 'react'

import Icon from './Icon'

export const Check: FunctionComponent<SVGAttributes<
  SVGElement
>> = Icon((props: SVGAttributes<SVGElement>) => (
  <path
    fillRule="evenodd"
    {...props}
    d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7L19.5899 5.59L8.99991 16.17Z"
  />
))

export default Check
