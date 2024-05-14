import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ReactPagination from 'react-paginate'

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected)
  }

  const pageCount = 15 // 총 페이지 수 => 한 페이지에 포스트가 10개씩 들어간다.
  const marginPagesDisplayed = 1 // 시작과 끝에 표시할 페이지 수
  let pageRangeDisplayed = 10 // 현재 페이지 근처에 표시할 페이지 수

  //계산하여 현재 페이지에 따라 "..." 사용 여부 결정
  if (currentPage > 4 && currentPage < pageCount - 5) {
    pageRangeDisplayed = 8 // 중간 페이지에서는 주변 페이지 수 줄임
  }

  return (
    <ReactPagination
      previousLabel={<FaChevronLeft className='mt-0.5' />}
      nextLabel={<FaChevronRight className='mt-0.5' />}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'text-main-orange'}
      className='flex gap-x-6 text-sm justify-center mt-7'
    />
  )
}
