import { useState } from 'react'

import { Pagination } from '@/component/ui/pagination/pagination'
import { Meta } from '@storybook/react'

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta<typeof Pagination>

export const Default = () => {
  const [page, setPage] = useState(1)

  return (
    <div>
      <Pagination
        className={'Pagination'}
        currentPage={page}
        onPageChange={setPage}
        pageSize={5}
        totalCount={100}
      />
    </div>
  )
}
