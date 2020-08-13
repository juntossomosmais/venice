import React, { FunctionComponent, SVGAttributes } from 'react'

import Icon from './Icon'

export const Star: FunctionComponent<SVGAttributes<
  SVGElement
>> = Icon((props: SVGAttributes<SVGElement>) => (
  <path
    {...props}
    d="m12,17.76999l6.18,3.73l-1.64,-7.03l5.46,-4.72999l-7.19,-0.61l-2.81,-6.63l-2.81,6.63l-7.19,0.61l5.46,4.72999l-1.64,7.03l6.18,-3.73z"
  />
))

export default Star
