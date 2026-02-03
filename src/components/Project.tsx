export default function Project() {
    return (
        <>
            <div className="text-left mb-4 mt-15">
                <h2 className="font-bold text-3xl text-gray-700">Project</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            <ProjectEntry
                org="한국 소프트웨어 교육원 (KOSTA)"
                role="IoT시스템과 보안기술을 위한 C개발자 양성 클래스 수료"
                period="2024.3 - 2024.7"
            >
                <ProjectDetail
                    title="임베디드 자율 주행 프로젝트 개발"
                    tags="#C #Python #FastAPI #OpenCV #WebSocket #Firmware"
                    items={[
                        '미니카 자율주행 시스템 Firmware 개발',
                        'OpenCV를 이용한 이미지 처리 및 MPEG 압축 구현',
                        'WebSocket 기반 실시간 양방향 통신',
                        'Uvicorn과 FastAPI를 이용한 서버 구현',
                    ]}
                />
            </ProjectEntry>

            <ProjectEntry
                org="엘리스 트랙"
                role="Flutter 앱 개발 부트캠프 수료"
                period="2024.10 - 2025.3"
                className="mt-20"
            >
                <ProjectDetail
                    title="패션 SNS 플랫폼 프로젝트 개발"
                    tags="#Flutter #Riverpod #SqfLite #Firebase #NodeJS"
                    items={[
                        'UI/UX 설계 문서 작성 주도 및 팀장 역할 수행',
                        'Firebase Auth, Token, SharedPreference 등 로그인 및 회원가입 기능 구현',
                        'SqfLite, Firebase, NodeJS 기반 온오프라인 채팅 기능 구현',
                    ]}
                />
                <br />
                <ProjectDetail
                    title="중고 거래 플랫폼 프로젝트 개발"
                    tags="#Flutter #Riverpod #CleanArchitecture #Firebase"
                    items={[
                        'UI/UX 디자인 및 브랜딩(로고, 서비스명) 설계',
                        'Firebase와 Naver/Google Map API 기반 지도 기능 구현',
                    ]}
                />
            </ProjectEntry>
        </>
    );
}


function ProjectEntry({ org, role, period, className, children }: {
    org: string;
    role: string;
    period: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex gap-12 mb-8">
            <div className={`flex-none w-60 ${className ?? ''}`}>
                <p className="font-bold text-xl text-gray-700 mt-2 ml-2">{org}</p>
                <p className="font-bold text-sm text-gray-700 ml-2">{role}</p>
                <p className="font-medium text-sm text-gray-600 ml-2">{period}</p>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}

function ProjectDetail({ title, tags, items }: {
    title: string;
    tags: string;
    items: string[];
}) {
    return (
        <>
            <p className="font-bold text-l text-gray-700">{title}</p>
            <p className="font-bold text-sm text-gray-400 italic">{tags}</p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                {items.map((item) => (
                    <li key={item}> {item} </li>
                ))}
            </ul>
        </>
    );
}
