import { memo } from 'react'

import { DOTS, usePagination } from '@/component/ui/pagination/hook/usePagination'

import s from './pagination.module.scss'

type PaginationProps = {
  currentPage: number
  onPageChange: (pageNumber: number) => void
  onPageSizeChange: (newPageSize: number) => void
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
    <div className={s.paginationContainer}>
      <button className={s.button} disabled={currentPage === 1} onClick={onPrevious}>
        {'❮'}
      </button>
      {paginationRange.map((pageNumber, index) => {
        if (typeof pageNumber !== 'number') {
          return (
            <span className={s.dots} key={index}>
              {DOTS}
            </span>
          )
        }
        const buttonClass = (pageNumber: number) => {
          return pageNumber === currentPage ? s.active : ''
        }

        return (
          <button
            className={`${s.button} ${buttonClass(pageNumber)}`}
            key={index}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        )
      })}
      <button
        className={s.button}
        disabled={currentPage === paginationRange[paginationRange.length - 1]}
        onClick={onNext}
      >
        {'❯'}
      </button>
    </div>
  )
})
