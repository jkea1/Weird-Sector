## (주)위어드섹터

### DashBoard Mini Intern Project : React(또는 Next.js), REST API를 활용한 게시판 / 대시보드 구현

### 2024.05.08 수 ~ 2024.05.26 일

<img src="./img/Screenshot 2024-05-27 at 3.37.57 AM.png"/>

### ⭐️ 자사 서비스

- [Data Nugget](https://datanugget.io/)
- [LABBIT](https://labbit.kr/)

### ⭐️ 인턴 과제 설명

- 제공 받은 디자인 파일(피그마) 내용에 맞게 화면을 구현합니다.
  <img src="./img/Screenshot 2024-05-29 at 4.20.35 PM.png"/>
- 제공된 디자인 피그마 파일을 기반으로 Front-end 구축 및 기본적인 수준의 Back-end 연동까지 되어야 합니다.

  - DB 종류 무관
  - JWT를 활용하여 사용자 인증 구현
  - 게시판 목록, 게시물 목록, 게시물/댓글 등록, 게시물 상세 페이지 구현
  - 날짜별 게시물 등록 수(라인 그래프), 게시물의 해시태그별 게시물 등록 수(바 그래프), 날짜 및 게시판별 게시물 등록 수(스택 그래프) 구현

    - 그래프는 Chart.js 등 이미 구현된 패키지를 활용하지 않고 D3.js를 사용하여 구현

### ⭐️ 시연 영상

<img src="./img/Screen-Recording-2024-05-27-at-4.20.50 AM-_online-video-cutter.com_.gif"/>

### ⭐️ Rest APIs 디자인 및 결과물 동영상

[📚노션 링크](https://repeated-paprika-d0d.notion.site/219d8105e62243fe87db6454753653c4?pvs=4)

### ⭐️ 프론트엔드 배포 링크

https://weird-sector.vercel.app/

### ⭐️ 프로그램 실행 방법

1. 프로젝트의 깃허브 링크를 로컬에 클론 받습니다. <br/>
   `git clone https://github.com/jkea1/Weird-Sector.git`
2. `cd Backend`
3. `npm run start` 하여 백엔드 서버를 실행시킵니다.
4. `https://weird-sector.vercel.app/` 링크에서 서비스를 사용합니다.

   > 아직 백엔드 서버 배포 단계에 있어 로컬에서밖에 서비스가 돌아가지 않습니다. jinkyng7890@gmail.com 으로 연락 주시면 사용하시는 로컬에 맞게 IP주소를 DB에 연결하여 실제 서비스를 사용할 수 있도록 도와드리겠습니다.

### ⚙️ 프론트엔드 기술 스택

- React
- TypeScript
- React Query
- Tailwind CSS
- D3.js

### ⚙️ 백엔드 기술 스택

- Node.js
- Express
- JWT
- mongoDB

### ⭐️ 구현 페이지

#### 🔗 회원가입 & 로그인

  <img src="./img/Screenshot 2024-05-27 at 2.03.35 AM.png"/>
  <img src="./img/Screenshot 2024-05-27 at 2.12.52 AM.png"/>
  <img src="./img/Screenshot 2024-05-27 at 2.21.28 AM.png"/>
  <img src="./img/Screenshot 2024-05-27 at 3.44.57 AM.png"/>
  <img src="./img/Screenshot 2024-05-27 at 3.47.03 AM.png"/>

#### 🔗 로그아웃

- 해더의 우측 상단
  <img src="./img/Screenshot 2024-05-27 at 3.52.16 AM.png"/>

#### 🔗 게시판

  <img src="./img/Screenshot 2024-05-27 at 3.23.41 AM.png"/>

#### 🔗 글작성

  <img src="./img/Screenshot 2024-05-27 at 3.54.35 AM.png"/>

#### 🔗 게시물 상세 페이지

  <img src="./img/Screenshot 2024-05-27 at 3.57.34 AM.png"/>

#### 🔗 데시보드

  <img src="./img/Screenshot 2024-05-27 at 3.59.14 AM.png"/>
