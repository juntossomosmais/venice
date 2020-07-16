export interface IPagination {
  /** String. */
  className?: string
  /** Total pages to be paginated. */
  count: number
  /** Current page. */
  page: number
  /** Pagination status. When true, pagination buttons are disabled. */
  isLoading?: boolean
  /** Change page event. */
  onChange?: (page: number) => void
}
