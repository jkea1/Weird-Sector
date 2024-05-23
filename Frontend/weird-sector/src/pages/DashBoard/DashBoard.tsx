import { useQuery } from '@tanstack/react-query'
import DashBoardHeader from '../../components/domain/dashBoard/DashBoardHeader'
import { getMeData } from '../../service/auth'
import LineChart from './Charts/LineChart'
import DashBoardLayout from './DashBoardLayout'

export default function DashBoard() {
  const { data: me } = useQuery({
    queryKey: ['me'],
    queryFn: () => getMeData(),
  })

  return (
    <DashBoardLayout>
      <div className='w-full h-full'>
        <DashBoardHeader me={me?.nickname} />
        <main>
          <div className='w-[850px] h-[470px] border-[1px] border-[#E1E1E1] m-6'>
            <h2 className='text-base font-bold ml-11 py-5'>
              날짜별 게시글 등록 수
            </h2>
            <>
              <div className='flex justify-end px-16 relative top-10'>
                <div className='w-4 h-4 bg-[#F58A91] rounded-full mr-3' />
                <div className='text-xs'>게시물 등록수</div>
              </div>
              <LineChart />
            </>
          </div>
        </main>
      </div>
    </DashBoardLayout>
  )
}
