export default function Experience() {
    return (
        <>
            <div className="text-left mb-4 mt-15">
                <h2 className="font-bold text-3xl text-gray-700">Experience</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>
            <div className="flex gap-12 mb-8">
                <div className="flex-none w-60 mt-40">
                    <p className="font-bold text-xl text-gray-700 mt-2 ml-2">POXI (폭시)</p>
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