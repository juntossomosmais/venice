import React, { FunctionComponent, SVGAttributes } from 'react'

import Icon from './Icon'

export const Store: FunctionComponent<SVGAttributes<
  SVGElement
>> = Icon((props: SVGAttributes<SVGElement>) => (
  <path
    d="M 20.480469 6.5625 L 21.28125 10.5 L 2.71875 10.5 L 3.519531 6.5625 Z M 22.667969 0 L 1.332031 0 L 1.332031 2.625 L 22.667969 2.625 Z M 22.667969 3.9375 L 1.332031 3.9375 L 0 10.5 L 0 13.125 L 1.332031 13.125 L 1.332031 21 L 14.667969 21 L 14.667969 13.125 L 20 13.125 L 20 21 L 22.667969 21 L 22.667969 13.125 L 24 13.125 L 24 10.5 Z M 4 18.375 L 4 13.125 L 12 13.125 L 12 18.375 Z M 4 18.375"
    {...props}
  />
))

export default Store
