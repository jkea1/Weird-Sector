import { FaChevronLeft } from 'react-icons/fa'
import CommentButton from '../../components/domain/post/CommentButton'
import CommentList from '../../components/domain/post/CommentList'
import HashTag from '../../components/domain/post/HashTag'

// const tmpPostDetail = {

// }

export default function Post() {
  return (
    <div className='my-0 py-[100px] w-[1144px] mx-auto flex flex-col justify-center relative top-[88px]'>
      <header className='mb-11 flex flex-col'>
        <div className='flex gap-x-4 mb-[20px]'>
          <FaChevronLeft className='relative top-[15px]' />
          <h1 className='text-[32px] font-bold'>게시글 제목 1</h1>
        </div>
        <div className='flex align-center gap-x-2 text-base h-[27px] p-1'>
          <div>나는 호빵맨</div>
          <div className='border-x-[1px] border-[#E1E1E1] px-2'>18분전</div>
          <div>조회수 145,3223</div>
        </div>
      </header>
      <main>
        <section className='mb-4'>
          <p className='text-xl'>
            모든 국민의 재산권은 보장된다. 그 내용과 한계는 법률로 정한다.
            대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을 때에는
            국무총리, 법률이 정한 국무위원의 순서로 그 권한을 대행한다.
            비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의
            경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에
            한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지
            아니하다. 누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을
            권리가 있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다.
            체포 또는 구속을 당한 자의 가족등 법률이 정하는 자에게는 그 이유와
            일시·장소가 지체없이 통지되어야 한다.
            <br />
            <br />
            국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로
            구성한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의
            동의없이 체포 또는 구금되지 아니한다. 평화통일정책의 수립에 관한
            대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.
            대법원에 대법관을 둔다. 다만, 법률이 정하는 바에 의하여 대법관이
            아닌 법관을 둘 수 있다. 대법원은 법률에 저촉되지 아니하는 범위안에서
            소송에 관한 절차, 법원의 내부규율과 사무처리에 관한 규칙을 제정할 수
            있다. 저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다.
            국무총리는 대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아
            행정각부를 통할한다.
            <br />
            <br />
            대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다.
            근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 모든
            국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을
            민주주의원칙에 따라 법률로 정한다. 대법원과 각급법원의 조직은 법률로
            정한다. 환경권의 내용과 행사에 관하여는 법률로 정한다. 군사재판을
            관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다. 헌법에 의하여
            체결·공포된 조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을
            가진다. 국민의 자유와 권리는 헌법에 열거되지 아니한 이유로 경시되지
            아니한다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은
            제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다.
          </p>
        </section>
        <section className='flex py-5 gap-x-4 '>
          <h2 className='text-xl font-normal text-main-orange'>첨부된 파일</h2>
          <div className='font-bold text-xl'>파일이름.pdf</div>
        </section>
        <section className='my-4'>
          <div className='flex space-x-3'>
            <HashTag>파일</HashTag>
            <HashTag>유익함</HashTag>
            <HashTag>해시태그</HashTag>
            <HashTag>유머</HashTag>
          </div>
        </section>
        <section className='flex gap-x-4 py-[32px] mb-2'>
          <textarea className='w-[977px] h-[55px] p-3 border rounded mb-2 text-xl'></textarea>
          <CommentButton />
        </section>
        <section className=''>
          <CommentList />
        </section>
      </main>
    </div>
  )
}
