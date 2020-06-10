export interface IPagination {
  /** number */
  count?: number
  /** number */
  page?: number
  /** boolean */
  isLoading?: boolean
  /** (page: number) => void */
  onChangePage?: (page: number) => void
}
