import { memo } from 'react'

import { DOTS, usePagination } from '@/component/ui/pagination/hook/usePagination'

type PaginationProps = {
  currentPage: number
  onPageChange: (pageNumber: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
}

export const Pagination = memo((props: PaginationProps) => {
  const { currentPage, onPageChange, pageSize, siblingCount = 1, totalCount } = props

  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  return (
    <div style={{ color: 'peru' }}>
      <button disabled={currentPage === 1} onClick={onPrevious}>
        {'<'}
      </button>
      {paginationRange.map((pageNumber, index) => {
        if (typeof pageNumber !== 'number') {
          return <span key={index}>{DOTS}</span>
        }

        return (
          <button key={index} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </button>
        )
      })}
      <button
        disabled={currentPage === paginationRange[paginationRange.length - 1]}
        onClick={onNext}
      >
        {'>'}
      </button>
    </div>
  )
})
