import React, { FunctionComponent, SVGAttributes } from 'react'

import Icon from './Icon'

export const TimesCircle: FunctionComponent<SVGAttributes<
  SVGElement
>> = Icon((props: SVGAttributes<SVGElement>) => (
  <path
    {...props}
    d="m2,12c0,-5.5 4.5,-10 10,-10c5.5,0 10,4.5 10,10c0,5.5 -4.5,10 -10,10c-5.5,0 -10,-4.5 -10,-10zm12.625,4.375l1.75,-1.75l-2.625,-2.625l2.625,-2.625l-1.75,-1.75l-2.625,2.625l-2.625,-2.625l-1.75,1.75l2.625,2.625l-2.625,2.625l1.75,1.75l2.625,-2.625l2.625,2.625zm0,0"
  />
))

export default TimesCircle
