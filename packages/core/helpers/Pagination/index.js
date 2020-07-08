export const hasNextRange = (offset, currentPage, count) =>
  currentPage + offset <= count

export const hasPreviousRange = (offset, currentPage) =>
  currentPage - offset > 0

const getRangeOffsets = (currentPage, isMobile) =>
  isMobile
    ? [currentPage - 2, currentPage + 1]
    : [currentPage - 3, currentPage + 2]

export const getRangeIndexes = (count, currentPage, isMobile) => {
  const [startOfRange, endOfRange] = getRangeOffsets(currentPage, isMobile)
  if (startOfRange < 0) {
    return [0, endOfRange]
  }
  if (endOfRange > count) {
    return [startOfRange, count]
  }
  return [startOfRange, endOfRange]
}
