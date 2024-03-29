import { useState } from 'react'

import { Pagination } from '@/component/ui/pagination/pagination'
import { Meta } from '@storybook/react'

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta<typeof Pagination>

export const Default = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  return (
    <div>
      <Pagination
        currentPage={page}
        pageChange={setPage}
        pageSize={pageSize}
        pageSizeChange={setPageSize}
        totalCount={200}
      />
    </div>
  )
}
