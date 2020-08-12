import React, { FunctionComponent, SVGAttributes } from 'react'

import uniqid from 'uniqid'

import { Star } from './Star'

export const FeaturedStar: FunctionComponent<SVGAttributes<SVGElement>> = (
  props: SVGAttributes<SVGElement>
) => {
  const gradientId = uniqid(`vip-star`)
  return (
    <Star fill={`url(#${gradientId})`} {...props}>
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="7.5"
          x2="0"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAE300" />
          <stop offset="1" stopColor="#F9AB00" />
        </linearGradient>
      </defs>
    </Star>
  )
}

export default FeaturedStar
