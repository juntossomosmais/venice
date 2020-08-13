import React, { FunctionComponent, SVGAttributes } from 'react'

import Icon from './Icon'

export const Times: FunctionComponent<SVGAttributes<
  SVGElement
>> = Icon((props: SVGAttributes<SVGElement>) => (
  <path
    {...props}
    d="m22,18l-6.00391,-6l6.00391,-6l-4,-4l-6,6l-6,-6l-4,4l6,6l-6,6l4,4l6,-6l6,6l4,-4zm0,0"
  />
))

export default Times
