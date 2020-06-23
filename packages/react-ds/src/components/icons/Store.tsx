import React, { FunctionComponent, SVGAttributes } from 'react'

import Icon from './Icon'

export const Store: FunctionComponent<SVGAttributes<
  SVGElement
>> = Icon((props: SVGAttributes<SVGElement>) => (
  <path
    fillRule="evenodd"
    d="M4 4H20V6H4V4ZM18.96 12L18.36 9H5.64L5.04 12H18.96ZM20 7H4L3 12V14H4V20H14V14H18V20H20V14H21V12L20 7ZM6 14V18H12V14H6Z"
    {...props}
  />
))

export default Store
