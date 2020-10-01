import { ITag } from '@juntossomosmais/venice-types'

import { warn } from '@venice/core/alerts'

export const clickableValidate = (
  format: ITag['format'],
  isClickable: ITag['isClickable']
) => {
  const DEFAULT_TAG_FORMAT = 'rectangle'
  const INFO =
    'Tag component - Please, isClickable prop can not be used with rectangle format.'
  const isClickableAtWrongFormat = format === DEFAULT_TAG_FORMAT && isClickable

  return isClickableAtWrongFormat && warn(INFO)
}
