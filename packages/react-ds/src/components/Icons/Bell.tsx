import React, { FunctionComponent, SVGAttributes } from 'react'

import Icon from './Icon'

export const Bell: FunctionComponent<SVGAttributes<
  SVGElement
>> = Icon((props: SVGAttributes<SVGElement>) => (
  <path
    fillRule="evenodd"
    {...props}
    d="m18,15.75l0,-5c0,-3.07 -1.63,-5.64 -4.5,-6.32l0,-0.68c0,-0.83 -0.67,-1.5 -1.5,-1.5c-0.83,0 -1.5,0.67 -1.5,1.5l0,0.68c-2.86,0.68 -4.5,3.24 -4.5,6.32l0,5l-2,2l0,1l16,0l0,-1l-2,-2zm-6,6c1.1,0 2,-0.9 2,-2l-4,0c0,1.1 0.9,2 2,2zm-4,-5l8,0l0,-6c0,-2.48 -1.51,-4.5 -4,-4.5c-2.49,0 -4,2.02 -4,4.5l0,6z"
  />
))

export default Bell
