export const hasNextRange = (
  offset: number,
  currentPage: number,
  count: number
) => currentPage + offset <= count

export const hasPreviousRange = (offset: number, currentPage: number) =>
  currentPage - offset > 0

const getRangeOffsets = (currentPage: number, isMobile: boolean) =>
  isMobile
    ? [currentPage - 2, currentPage + 1]
    : [currentPage - 3, currentPage + 2]

export const getRangeIndexes = (
  count: number,
  currentPage: number,
  isMobile: boolean
) => {
  const [startOfRange, endOfRange] = getRangeOffsets(currentPage, isMobile)
  if (startOfRange < 0) {
    return [0, endOfRange]
  }
  if (endOfRange > count) {
    return [startOfRange, count]
  }
  return [startOfRange, endOfRange]
}
