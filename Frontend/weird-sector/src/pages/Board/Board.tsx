import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import BoardTabSelector from '../../components/domain/board/BoardTabSelector'
import Pagination from '../../components/domain/board/Pagination'
import PostList from '../../components/domain/board/PostList'

const tmpData = [
  {
    no: '1',
    title: '미니 인턴 프로젝트 1',
    userName: '김진경',
    date: '2024.02.24',
    viewCount: '343',
  },
  {
    no: '2',
    title: '웹 개발 프로젝트',
    userName: '이성호',
    date: '2024.02.25',
    viewCount: '412',
  },
  {
    no: '3',
    title: '데이터 분석 프로젝트',
    userName: '박지훈',
    date: '2024.02.26',
    viewCount: '287',
  },
  {
    no: '4',
    title: 'AI 연구 프로젝트',
    userName: '최수정',
    date: '2024.02.27',
    viewCount: '522',
  },
  {
    no: '5',
    title: '모바일 앱 개발 프로젝트',
    userName: '홍길동',
    date: '2024.02.28',
    viewCount: '198',
  },
  {
    no: '6',
    title: 'UX/UI 디자인 프로젝트',
    userName: '김민수',
    date: '2024.03.01',
    viewCount: '345',
  },
  {
    no: '7',
    title: '마케팅 전략 프로젝트',
    userName: '이영희',
    date: '2024.03.02',
    viewCount: '276',
  },
  {
    no: '8',
    title: '브랜드 개발 프로젝트',
    userName: '박현우',
    date: '2024.03.03',
    viewCount: '354',
  },
  {
    no: '9',
    title: 'SEO 최적화 프로젝트',
    userName: '정은지',
    date: '2024.03.04',
    viewCount: '290',
  },
  {
    no: '10',
    title: '소셜 미디어 마케팅 프로젝트',
    userName: '강민호',
    date: '2024.03.05',
    viewCount: '439',
  },
  // {
  //   no: '11',
  //   title: '영상 편집 프로젝트',
  //   userName: '한지민',
  //   date: '2024.03.06',
  //   viewCount: '328',
  // },
  // {
  //   no: '12',
  //   title: '콘텐츠 제작 프로젝트',
  //   userName: '이준호',
  //   date: '2024.03.07',
  //   viewCount: '259',
  // },
  // {
  //   no: '13',
  //   title: '고객 서비스 개선 프로젝트',
  //   userName: '최지연',
  //   date: '2024.03.08',
  //   viewCount: '317',
  // },
  // {
  //   no: '14',
  //   title: '기술 지원 프로젝트',
  //   userName: '김다솜',
  //   date: '2024.03.09',
  //   viewCount: '401',
  // },
  // {
  //   no: '15',
  //   title: '품질 관리 프로젝트',
  //   userName: '박성민',
  //   date: '2024.03.10',
  //   viewCount: '384',
  // },
]

export default function Board() {
  return (
    <div className='my-0 h-[1069px] flex flex-col justify-center items-center relative top-[88px]'>
      <div>
        <h3 className='text-main-orange text-[20px] font-bold text-center'>
          board
        </h3>
        <h1 className='text-[32px] font-bold my-3'>자유게시판</h1>
      </div>
      <div>
        <BoardTabSelector />
        <div>
          <PostList postData={tmpData} className='mt-10' />
          <Pagination />
          <Link to='/post/category/create'>
            <Button
              color='black'
              size='base'
              className='relative bottom-7 left-[1020px]'
            >
              글쓰기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
