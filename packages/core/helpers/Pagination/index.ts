export const hasNextRange = (offset = 0, currentPage = 0, count = 0) =>
  currentPage + offset <= count

export const hasPreviousRange = (offset = 0, currentPage = 0) =>
  currentPage - offset > 0

const getRangeOffsets = (currentPage = 0, isMobile = false) =>
  isMobile
    ? [currentPage - 2, currentPage + 1]
    : [currentPage - 3, currentPage + 2]

export const getRangeIndexes = (
  count = 0,
  currentPage = 0,
  isMobile = false
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
