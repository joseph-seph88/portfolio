import Image from 'next/image';

export default function Experience() {
    return (
        <>
            <div className="text-left mb-4 mt-15">
                <h2 className="font-bold text-3xl text-gray-700">Experience</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            {/* <div className="flex gap-12 mb-8 items-center">
                <div className="flex-none w-60">
                    <p className="font-bold text-xl text-gray-700 ml-2">iTech (아이테크)</p>
                    <p className="font-bold text-sm text-gray-700 ml-2">Flutter 앱 개발자</p>
                    <p className="font-medium text-sm text-gray-600 ml-2">2026.01 ~ 현재</p>
                </div>

                <div className="flex-1">
                    <p className="font-bold text-l text-gray-700 ">스포츠 예약 플랫폼 개발 <span className="text-sm text-gray-500 font-medium">(4월중 정식 배포 예정)</span></p>
                    <p className="font-bold text-sm text-gray-400 italic">#Flutter #GetX #RestAPI #PostgreSQL
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                        <li> 프로젝트 코드 구조 설계 및 아키텍처 구축</li>
                        <li> 라우팅 시스템 및 네비게이션 구조 개발</li>
                        <li> 코딩 컨벤션 및 네이밍 규칙 정립</li>
                        <li> 메인 예약 시스템 핵심 기능 개발</li>
                        <li> 전체 페이지 UI 개발 및 UX 최적화</li>
                        <li> REST API 연동 및 데이터 처리 구현</li>
                        <li> 팀 리드로서 프로젝트 전반 주도</li>
                    </ul>
                </div>
            </div> */}

            {/* <div className="border-b border-gray-200 mb-8"></div> */}

            <div className="flex gap-12 mb-8 items-center">
                <div className="flex-none w-60">
                    <p className="font-bold text-xl text-gray-700 ml-2">MOONPLE (문플)</p>
                    <p className="text-sm text-gray-400 italic ml-2 mb-2"><a href="https://joseph-seph88.github.io/moonple/" target="_blank" rel="noopener noreferrer"><strong>https://joseph-seph88.github.io/moonple/</strong></a></p>
                    <p className="font-bold text-sm text-gray-700 ml-2">Flutter 앱 개발자</p>
                    <p className="font-medium text-sm text-gray-600 ml-2">2025.12 ~ 현재</p>
                </div>

                <div className="flex-1">
                    <p className="font-bold text-l text-gray-700 ">MOONPLE - 캘린더 일정관리 앱 <span className="text-sm text-gray-500 font-medium">(외부 테스트 진행중)</span></p>
                    <p className="font-bold text-sm text-gray-400 italic">#Flutter #Isar #Hive #PushNotification
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                        <li> 간편한 일정 추가, 수정, 삭제 및 검색 기능 구현</li>
                        <li> 로컬 알림을 통한 일정 리마인더 기능 개발</li>
                        <li> 일정 상태 관리 (완료, 진행중, 예정, 미완료) 기능 구현</li>
                        <li> 주간/월간 일정 상태 현황판 UI 개발</li>
                        <li> 이번 주/일 일정 이미지 공유 기능 구현</li>
                        <li> 다국어 (한국어/English) 지원 구현</li>
                    </ul>
                    <div className="mt-4 flex gap-4">
                        <Image src="/assets/images/moonple_calendar.png" alt="MOONPLE 캘린더 스크린샷" width={200} height={400} className="rounded-lg shadow-md" />
                        <Image src="/assets/images/moonple_my.png" alt="MOONPLE 마이페이지 스크린샷" width={200} height={400} className="rounded-lg shadow-md" />
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-200 mb-8"></div>

            <div className="flex gap-12 mb-8 items-center">
                <div className="flex-none w-60">
                    <p className="font-bold text-xl text-gray-700 ml-2">Findev (핀데브)</p>
                    <p className="text-sm text-gray-400 italic ml-2 mb-2"><a href="https://web-como-bay.vercel.app" target="_blank" rel="noopener noreferrer"><strong>https://web-como-bay.vercel.app</strong></a></p>
                    <p className="font-bold text-sm text-gray-700 ml-2">Flutter 앱 개발자</p>
                    <p className="font-medium text-sm text-gray-600 ml-2">2025.11 ~ 현재</p>
                </div>

                <div className="flex-1">
                    <p className="font-bold text-l text-gray-700">C&apos;OMO 개발 - 동호회 커뮤니티 플랫폼 <span className="text-sm text-gray-500 font-medium">(외부 테스트 진행중)</span></p>
                    <p className="font-bold text-sm text-gray-400 italic">#Flutter #GetX #RestAPI #MySQL
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                        <li> 동호회 생성 및 가입, 멤버 관리, 권한 설정 등 핵심 기능 개발</li>
                        <li> 모임 일정 관리 및 참석 여부 체크 기능 구현</li>
                        <li> 게시판, 공지사항, 댓글 등 커뮤니티 기능 개발</li>
                        <li> 기존 코드베이스 아키텍처 리팩토링 및 UI/UX 개선</li>
                        <li> 내외부 테스트 진행 (앱스토어/플레이스토어)</li>
                    </ul>
                    <div className="mt-4 flex gap-4">
                        <Image src="/assets/images/como_1.png" alt="C'OMO 스크린샷 1" width={200} height={400} className="rounded-lg shadow-md" />
                        <Image src="/assets/images/como_2.png" alt="C'OMO 스크린샷 2" width={200} height={400} className="rounded-lg shadow-md" />
                        <Image src="/assets/images/como_3.png" alt="C'OMO 스크린샷 3" width={200} height={400} className="rounded-lg shadow-md" />
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-200 mb-8"></div>

            <div className="flex gap-12 mb-8 items-center">
                <div className="flex-none w-60">
                    <p className="font-bold text-xl text-gray-700 ml-2">POXI (폭시)</p>
                    <p className="text-sm text-gray-400 italic ml-2 mb-2"><a href="https://www.poxicorp.com/" target="_blank" rel="noopener noreferrer"><strong>https://www.poxicorp.com/</strong></a></p>
                    <p className="font-bold text-sm text-gray-700 ml-2">Flutter&NestJS 앱/서버 개발자</p>
                    <p className="font-medium text-sm text-gray-600 ml-2">2025.03 ~ 08</p>
                </div>

                <div className="flex-1">
                    <p className="font-bold text-l text-gray-700 ">PLAYV, PLAYV HUB 개발 - 스포츠센터 등록,예약 및 관리 플랫폼</p>
                    <p className="font-bold text-sm text-gray-400 italic">#Flutter #NestJS #RestAPI #PostgreSQL #Firebase #Sentry
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                        <li> 레슨 예약 및 스케줄 관리, 결제 시스템, 피드 및 댓글 관리 등 기능 개발 및 기존 기능 개선</li>
                        <li> 사용자 경험 개선을 위한 UI/UX 디자인 최적화 및 사용성 테스트 진행 </li>
                        <li> 코드 가독성 향상을 위한 리팩토링 및 코딩 컨벤션 적용 </li>
                        <li> 런타임 에러, Fatal, 기능 이슈 등 에러 분석 및 대응 </li>
                        <li> 피드, 댓글, 이미지 관련 NestJS 백엔드 API 모듈화 </li>
                    </ul>
                    <br />

                    <p className="font-bold text-l text-gray-700 ">SMART BUS PICKUP 개발 - 스마트 차량 픽업 플랫폼</p>
                    <p className="font-bold text-sm text-gray-400 italic">#Flutter #GetX #RestAPI
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                        <li> 운행 차량, 차량 운행 내역, 스케줄 관리 기능 개발</li>
                        <li> 라우팅 최적화 및 웹-모바일 간 네비게이션 스택 동기화 문제 해결 </li>
                    </ul>
                    <br />

                    <p className="font-bold text-l text-gray-700 ">POP STORE 개발 - 부동산 임대 플랫폼</p>
                    <p className="font-bold text-sm text-gray-400 italic">#Flutter #NestJS #RestAPI #PostgreSQL #Bloc #CleanArchitecture
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                        <li> 지도 기반 위치 및 매물 서비스, 즐겨찾기, 매물 상세 정보, Permission, Notification 등 신규 기능 개발 </li>
                        <li> 클린 아키텍처, 네이밍 규칙, 코드 컨벤션, Git PR 프로세스 등 개발 환경 전반에 대해 개선 제안 및 주도 </li>
                        <li> 런타임 에러, Fatal, 기능 이슈 등 에러 분석 및 대응 </li>
                        <li> NestJS로 반경 매물 검색 서비스, 매물 관리, 사용자 권한, 알림 시스템 등 백엔드 API 개발 및 리팩토링</li>
                    </ul>
                </div>
            </div>

        </>
    );
}
