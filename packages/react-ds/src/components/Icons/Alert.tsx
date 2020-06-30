import React, { FunctionComponent, SVGAttributes } from 'react'

import Icon from './Icon'

export const Alert: FunctionComponent<SVGAttributes<
  SVGElement
>> = Icon((props: SVGAttributes<SVGElement>) => (
  <path
    fillRule="evenodd"
    d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM13 13V7H11V13H13ZM13 17V15H11V17H13ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z"
    {...props}
  />
))

export default Alert
