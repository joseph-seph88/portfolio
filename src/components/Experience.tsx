'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <>
            <div className="text-left mb-4 mt-15">
                <h2 className="font-bold text-3xl text-gray-700">Experience</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            <ExperienceEntry
                company="MOONPLE (문플)"
                link="https://play.google.com/store/apps/details?id=com.joseph88.moonple&hl=ko"
                role="Flutter 앱 개발자"
                period="2026.02 출시"
            >
                <Project
                    title="MOONPLE - 캘린더 일정관리 앱"
                    status="Google Play 출시"
                    tags="#Flutter #Bloc #Cubit #Isar #Hive #PushNotification"
                    items={[
                        '홈 위젯으로 빠른 일정 확인',
                        '일정 상태 관리 및 점검',
                        '주간/월간 현황판',
                        '일정 이미지 공유',
                        '다국어 (한국어/English) 지원',
                    ]}
                />
                <ProjectImages images={[
                    { src: '/portfolio/assets/images/moonple_main.webp', alt: 'MOONPLE 메인 캘린더 스크린샷' },
                    { src: '/portfolio/assets/images/moonple_widget.webp', alt: 'MOONPLE 위젯 스크린샷' },
                    { src: '/portfolio/assets/images/moonple_status.webp', alt: 'MOONPLE 일정 점검 스크린샷' },
                ]} />
            </ExperienceEntry>

            <div className="border-b border-gray-200 mb-8"></div>

            <ExperienceEntry
                company="Findev (핀데브)"
                link="https://web-como-bay.vercel.app"
                role="Flutter 앱 개발자"
                period="2025.11 ~ 현재"
            >
                <Project
                    title={<>C&apos;OMO 개발 - 동호회 커뮤니티 플랫폼</>}
                    status="외부 테스트 진행중, 3월 정식 배포"
                    tags="#Flutter #GetX #RestAPI #MySQL"
                    items={[
                        '동호회 생성 및 가입, 멤버 관리, 권한 설정 등 핵심 기능 개발',
                        '모임 일정 관리 및 참석 여부 체크 기능 구현',
                        '게시판, 공지사항, 댓글 등 커뮤니티 기능 개발',
                        '기존 코드베이스 아키텍처 리팩토링 및 UI/UX 개선',
                        '내외부 테스트 진행 (앱스토어/플레이스토어)',
                    ]}
                />
                <ProjectImages images={[
                    { src: '/portfolio/assets/images/como_1.webp', alt: "C'OMO 스크린샷 1" },
                    { src: '/portfolio/assets/images/como_2.webp', alt: "C'OMO 스크린샷 2" },
                    { src: '/portfolio/assets/images/como_3.webp', alt: "C'OMO 스크린샷 3" },
                ]} />
            </ExperienceEntry>

            <div className="border-b border-gray-200 mb-8"></div>

            <ExperienceEntry
                company="POXI (폭시)"
                link="https://www.poxicorp.com/"
                role="Flutter&NestJS 앱/서버 개발자"
                period="2025.03 ~ 08"
            >
                <Project
                    title="PLAYV, PLAYV HUB 개발 - 스포츠센터 등록,예약 및 관리 플랫폼"
                    tags="#Flutter #NestJS #RestAPI #PostgreSQL #Firebase #Sentry"
                    items={[
                        '레슨 예약 및 스케줄 관리, 결제 시스템, 피드 및 댓글 관리 등 기능 개발 및 기존 기능 개선',
                        '사용자 경험 개선을 위한 UI/UX 디자인 최적화 및 사용성 테스트 진행',
                        '코드 가독성 향상을 위한 리팩토링 및 코딩 컨벤션 적용',
                        '런타임 에러, Fatal, 기능 이슈 등 에러 분석 및 대응',
                        '피드, 댓글, 이미지 관련 NestJS 백엔드 API 모듈화',
                    ]}
                />
                <br />
                <Project
                    title="SMART BUS PICKUP 개발 - 스마트 차량 픽업 플랫폼"
                    tags="#Flutter #GetX #RestAPI"
                    items={[
                        '운행 차량, 차량 운행 내역, 스케줄 관리 기능 개발',
                        '라우팅 최적화 및 웹-모바일 간 네비게이션 스택 동기화 문제 해결',
                    ]}
                />
                <br />
                <Project
                    title="POP STORE 개발 - 부동산 임대 플랫폼"
                    tags="#Flutter #NestJS #RestAPI #PostgreSQL #Bloc #CleanArchitecture"
                    items={[
                        '지도 기반 위치 및 매물 서비스, 즐겨찾기, 매물 상세 정보, Permission, Notification 등 신규 기능 개발',
                        '클린 아키텍처, 네이밍 규칙, 코드 컨벤션, Git PR 프로세스 등 개발 환경 전반에 대해 개선 제안 및 주도',
                        '런타임 에러, Fatal, 기능 이슈 등 에러 분석 및 대응',
                        'NestJS로 반경 매물 검색 서비스, 매물 관리, 사용자 권한, 알림 시스템 등 백엔드 API 개발 및 리팩토링',
                    ]}
                />
            </ExperienceEntry>

            <div className="border-b border-gray-200 mb-8"></div>

            <ExperienceEntry
                company="다화테크놀로지코리아"
                link="https://www.dahuasecurity.com/"
                role="기술지원 · QA"
                period="2022.06 ~ 2024.02 (1년 9개월)"
            >
                <Project
                    title="관제영상 플랫폼 앱 QA"
                    tags="#AppQA #CCTV #CMS #VMS"
                    items={[
                        '관제영상 모바일 앱(DMSS 등) 기능 검증 및 사용성 테스트 수행',
                        'CMS/VMS 영상관리 솔루션 통합 QA 및 호환성 검증',
                        '실시간 영상 스트리밍, 녹화 재생, PTZ 제어 등 핵심 기능 테스트',
                        '다양한 디바이스 환경에서의 플랫폼 호환성 테스트',
                    ]}
                />
                <br />
                <Project
                    title="기술지원 및 품질검증"
                    tags="#TechSupport #Troubleshooting #Firmware"
                    items={[
                        '하드웨어 및 펌웨어 업데이트 테스트 및 안정성 검증',
                        '제품·시스템 이슈 트러블슈팅 및 원인 분석 대응',
                        '클라이언트 요구사항 분석 및 맞춤 기술 솔루션 제안',
                        '기술 자료 번역(영한) 및 제품 매뉴얼 제작',
                    ]}
                />
                <br />
                <Project
                    title="주요 활동"
                    tags="#Presentation #Seminar #Exhibition"
                    items={[
                        '2022년 총판 로드쇼 아날로그 솔루션 부문 기술 발표 담당',
                        '2022년 기술 세미나 저조도(Low-light) 기술 부문 발표 담당',
                        '2023년 총판 전시회 AI 기술 부문 발표 담당',
                    ]}
                />
            </ExperienceEntry>
        </>
    );
}


const underlineVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 },
};

function MotionLink({ href, label }: { href: string; label: string }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sm text-gray-400 italic ml-2 mb-2 block font-bold max-w-full truncate"
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
        >
            {label}
            <motion.span
                className="absolute left-0 -bottom-0.5 h-[1.5px] bg-gray-400 origin-left"
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ width: '100%' }}
            />
        </motion.a>
    );
}

function ExperienceEntry({ company, link, role, period, children }: {
    company: string;
    link: string;
    role: string;
    period: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex gap-12 mb-8 items-center">
            <div className="flex-none w-60">
                <p className="font-bold text-xl text-gray-700 ml-2">{company}</p>
                <MotionLink href={link} label={link} />
                <p className="font-bold text-sm text-gray-700 ml-2">{role}</p>
                <p className="font-medium text-sm text-gray-600 ml-2">{period}</p>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}

function Project({ title, status, tags, items }: {
    title: React.ReactNode;
    status?: string;
    tags: string;
    items: string[];
}) {
    return (
        <>
            <p className="font-bold text-l text-gray-700">
                {title}
                {status && <span className="text-sm text-gray-500 font-medium"> ({status})</span>}
            </p>
            <p className="font-bold text-sm text-gray-400 italic">{tags}</p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                {items.map((item) => (
                    <li key={item}> {item}</li>
                ))}
            </ul>
        </>
    );
}

function ProjectImages({ images }: { images: { src: string; alt: string }[] }) {
    return (
        <div className="mt-4 flex gap-4">
            {images.map((img) => (
                <Image key={img.src} src={img.src} alt={img.alt} width={200} height={400} className="rounded-lg shadow-md" />
            ))}
        </div>
    );
}
