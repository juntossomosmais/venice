export interface IPagination {
  /** number */
  count?: number
  /** number */
  page?: number
  /** boolean */
  isLoading?: boolean
  /** boolean */
  isMobile?: boolean
  /** (page: number) => void */
  onChangePage?: (page: number) => void
}
