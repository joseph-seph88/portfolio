import type { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  profile: {
    name: "임종섭 (JOSEPH)",
    subtitle: "앱/웹 풀스택 개발자",
    email: "pathetic.sim@gmail.com",
    github: "https://github.com/joseph-seph88",
    portfolio: "https://www.joseph88dev.com/ko",
  },

  experiences: [
    {
      company: "kaist",
      link: "",
      role: "앱, 웹 개발자",
      period: "2026.05~",
      projects: [
        // {
        //   title: "NEARBLEE - 블루투스 기기 분실 방지 앱",
        //   status: "Google Play 출시",
        //   tags: "#Flutter #Kotlin #BLE #Riverpod #NaverMap",
        //   items: [
        //     "블루투스 기기 스캔 및 거리별 자동 필터링",
        //     "연결/해제 위치 자동 기록 및 지도 시각화",
        //     "기기 연결·해제 시 즉시 푸시 알림",
        //     "큼직하고 직관적인 UI로 누구나 쉽게",
        //     "모든 데이터는 안전하게 내 기기에만 저장",
        //   ],
        // },
      ],
      images: [],
    },
    {
      company: "NEARBLEE (니어블리)",
      icon: "/portfolio/assets/images/nearblee.webp",
      link: "https://play.google.com/store/apps/details?id=com.joseph88.nearblee&hl=ko",
      role: "앱 개발자",
      period: "2026.03 출시",
      projects: [
        {
          title: "NEARBLEE - 블루투스 기기 분실 방지 앱",
          status: "Google Play 출시",
          tags: "#Flutter #Kotlin #BLE #Riverpod #NaverMap",
          items: [
            "블루투스 기기 스캔 및 거리별 자동 필터링",
            "연결/해제 위치 자동 기록 및 지도 시각화",
            "기기 연결·해제 시 즉시 푸시 알림",
            "큼직하고 직관적인 UI로 누구나 쉽게",
            "모든 데이터는 안전하게 내 기기에만 저장",
          ],
        },
      ],
      images: [],
    },
    {
      company: "MOONPLE (문플)",
      link: "https://play.google.com/store/apps/details?id=com.joseph88.moonple&hl=ko",
      iosLink:
        "https://apps.apple.com/kr/app/%EB%AC%B8%ED%94%8C-%EC%BA%98%EB%A6%B0%EB%8D%94-moonple-%EC%9D%BC%EC%A0%95-%EC%BA%98%EB%A6%B0%EB%8D%94/id6760285378",
      role: "앱 개발자",
      period: "2026.02 출시",
      projects: [
        {
          title: "MOONPLE - 캘린더 일정관리 앱",
          status: "Google Play / App Store 출시",
          tags: "#Flutter #Bloc #Cubit #Isar #Hive #PushNotification",
          items: [
            "홈 위젯으로 빠른 일정 확인",
            "일정 상태 관리 및 점검",
            "주간/월간 현황판",
            "일정 이미지 공유",
            "다국어 (한국어/English) 지원",
          ],
        },
      ],
      images: [
        {
          src: "/portfolio/assets/images/moonple_main.webp",
          pdfSrc: "/portfolio/assets/images/moonple_main.png",
          alt: "MOONPLE 메인 캘린더 스크린샷",
        },
        {
          src: "/portfolio/assets/images/moonple_widget.webp",
          pdfSrc: "/portfolio/assets/images/moonple_widget.png",
          alt: "MOONPLE 위젯 스크린샷",
        },
        {
          src: "/portfolio/assets/images/moonple_status.webp",
          pdfSrc: "/portfolio/assets/images/moonple_status.png",
          alt: "MOONPLE 일정 점검 스크린샷",
        },
      ],
    },
    {
      company: "TEENOW (티나우)",
      icon: "/portfolio/assets/images/teenow.webp",
      link: "",
      role: "앱/서버 개발자",
      period: "",
      projects: [
        {
          title: "TEENOW - AI 기반 골프 예약 플랫폼",
          status: "",
          tags: "#Flutter #WebSocket #FCM #OAuth #AWS #Python #FastAPI",
          items: [
            "앱 개발 및 팀 리드",
            "AWS 클라우드 인프라 설계 (EC2, ALB, RDS)",
            "크롤링·캐싱 관련, DB(Redis, PG) 설계",
            "WebSocket 실시간 채팅 & FCM 푸시 알림",
            "OAuth 2.0 카카오 로그인 연동",
            "AI 기반 골프장 추천 및 예약 시스템",
            "WEB ERP 시스템 개발",
          ],
        },
      ],
      images: [],
    },
    {
      company: "Findev (핀데브)",
      link: "https://play.google.com/store/apps/details?id=com.findev.como&hl=ko",
      iosLink:
        "https://apps.apple.com/kr/app/%EC%BD%94%EB%AA%A8-como/id6544798850",
      role: "Flutter 앱 개발자",
      period: "2025.11 ~ 2026.04",
      projects: [
        {
          title: "C'OMO 개발 - 동호회 커뮤니티 플랫폼",
          status: "Google Play / App Store 출시",
          tags: "#Flutter #GetX #RestAPI #PostgreSQL #Firebase",
          items: [
            "동호회 생성·가입, 멤버 관리, 권한 설정 등 핵심 기능 개발",
            "모임 일정 관리 및 참석 여부 확인 기능 추가",
            "게시판, 공지사항, 댓글, 신고, 차단 등 커뮤니티 관리 기능 개발",
            "로그인 기능 개발 및 JWT 토큰 기반 인증 구현",
            "UI/UX 개선과 앱 전반 안정성 향상",
          ],
        },
      ],
      images: [
        {
          src: "/portfolio/assets/images/como_1.webp",
          pdfSrc: "/portfolio/assets/images/como_1.png",
          alt: "C'OMO 스크린샷 1",
        },
        {
          src: "/portfolio/assets/images/como_2.webp",
          pdfSrc: "/portfolio/assets/images/como_2.png",
          alt: "C'OMO 스크린샷 2",
        },
        {
          src: "/portfolio/assets/images/como_3.webp",
          pdfSrc: "/portfolio/assets/images/como_3.png",
          alt: "C'OMO 스크린샷 3",
        },
      ],
    },
    {
      company: "POXI (폭시)",
      link: "https://www.poxicorp.com/",
      role: "Flutter&NestJS 앱/서버 개발자",
      period: "2025.03 ~ 08",
      projects: [
        {
          title:
            "BLE 카드 기반 무선 출입 인증 시스템 개발 - BLE 비콘 출입/출석 인증 앱 연동",
          tags: "#BLE #Beacon #RestAPI #RSSI #IoT",
          items: [
            "BLE 게이트웨이 설정 및 비콘 카드 연동을 통한 무선 인증 시스템 구축",
            "HTTP 기반 게이트웨이-서버 간 BLE 스캔 데이터 통신 구현",
            "RSSI 기반 근접 거리 판단 로직 설계 및 인증 기준 수립",
            "BLE 비콘 기반 출석 체크 시스템 설계 및 서버 개발자와 협업",
          ],
        },
        {
          title: "PLAYV, PLAYV HUB 개발 - 스포츠센터 등록,예약 및 관리 플랫폼",
          tags: "#Flutter #NestJS #RestAPI #PostgreSQL #Firebase #Sentry",
          items: [
            "레슨 예약 및 스케줄 관리, 결제 시스템, 피드 및 댓글 관리 등 기능 개발 및 기존 기능 개선",
            "사용자 경험 개선을 위한 UI/UX 디자인 최적화 및 사용성 테스트 진행",
            "코드 가독성 향상을 위한 리팩토링 및 코딩 컨벤션 적용",
            "런타임 에러, Fatal, 기능 이슈 등 에러 분석 및 대응",
            "피드, 댓글, 이미지 관련 NestJS 백엔드 API 모듈화",
          ],
        },
        {
          title: "SMART BUS PICKUP 개발 - 스마트 차량 픽업 플랫폼",
          tags: "#Flutter #GetX #RestAPI",
          items: [
            "운행 차량, 차량 운행 내역, 스케줄 관리 기능 개발",
            "라우팅 최적화 및 웹-모바일 간 네비게이션 스택 동기화 문제 해결",
          ],
        },
        {
          title: "POP STORE 개발 - 부동산 임대 플랫폼",
          tags: "#Flutter #NestJS #RestAPI #PostgreSQL #Bloc #CleanArchitecture",
          items: [
            "지도 기반 위치 및 매물 서비스, 즐겨찾기, 매물 상세 정보, Permission, Notification 등 신규 기능 개발",
            "클린 아키텍처, 네이밍 규칙, 코드 컨벤션, Git PR 프로세스 등 개발 환경 전반에 대해 개선 제안 및 주도",
            "런타임 에러, Fatal, 기능 이슈 등 에러 분석 및 대응",
            "NestJS로 반경 매물 검색 서비스, 매물 관리, 사용자 권한, 알림 시스템 등 백엔드 API 개발 및 리팩토링",
          ],
        },
      ],
    },
    {
      company: "다화테크놀로지코리아",
      link: "https://www.dahuasecurity.com/",
      role: "QA 엔지니어",
      period: "2022.06 ~ 2024.02 (1년 9개월)",
      projects: [
        {
          title: "관제영상 플랫폼 앱 QA",
          tags: "#AppQA #CCTV #CMS #VMS",
          items: [
            "관제영상 모바일 앱(DMSS 등) 기능 검증 및 사용성 테스트 수행",
            "CMS/VMS 영상관리 솔루션 통합 QA 및 호환성 검증",
            "실시간 영상 스트리밍, 녹화 재생, PTZ 제어 등 핵심 기능 테스트",
            "다양한 디바이스 환경에서의 플랫폼 호환성 테스트",
          ],
        },
        {
          title: "기술지원 및 품질검증",
          tags: "#TechSupport #Troubleshooting #Firmware",
          items: [
            "하드웨어 및 펌웨어 업데이트 테스트 및 안정성 검증",
            "제품·시스템 이슈 트러블슈팅 및 원인 분석 대응",
            "클라이언트 요구사항 분석 및 맞춤 기술 솔루션 제안",
            "기술 자료 번역(영한) 및 제품 매뉴얼 제작",
          ],
        },
        {
          title: "주요 활동",
          tags: "#Presentation #Seminar #Exhibition",
          items: [
            "2022년 총판 로드쇼 아날로그 솔루션 부문 기술 발표 담당",
            "2022년 기술 세미나 저조도(Low-light) 기술 부문 발표 담당",
            "2023년 총판 전시회 AI 기술 부문 발표 담당",
          ],
        },
      ],
    },
  ],

  skills: [
    {
      title: "Frontend",
      items: [
        "Dart/Flutter",
        "NextJS/React",
        "Bloc, Cubit, GetX, Riverpod",
        "Figma, Rive",
      ],
    },
    {
      title: "Backend",
      items: [
        "NestJS/Typescript",
        "Python",
        "PostgreSQL, MySQL, Redis",
        "REST API, GraphQL, Swagger, Playground",
      ],
    },
    {
      title: "DevOps",
      items: [
        "Git, Github, Gitlab, Github Actions",
        "Sentry",
        "AWS, Firebase, Supabase, Vercel",
        "Nginx",
      ],
    },
  ],

  educationProjects: [
    {
      org: "한국 소프트웨어 교육원 (KOSTA)",
      role: "IoT시스템과 보안기술을 위한 C개발자 양성 클래스 수료",
      period: "2024.3 - 2024.7",
      projects: [
        {
          title: "임베디드 자율 주행 프로젝트 개발",
          tags: "#C #Python #FastAPI #OpenCV #WebSocket #Firmware",
          items: [
            "미니카 자율주행 시스템 Firmware 개발",
            "OpenCV를 이용한 이미지 처리 및 MPEG 압축 구현",
            "WebSocket 기반 실시간 양방향 통신",
            "Uvicorn과 FastAPI를 이용한 서버 구현",
          ],
        },
      ],
    },
    {
      org: "엘리스 트랙",
      role: "Flutter 앱 개발 부트캠프 수료",
      period: "2024.10 - 2025.3",
      projects: [
        {
          title: "패션 SNS 플랫폼 프로젝트 개발",
          tags: "#Flutter #Riverpod #SqfLite #Firebase #NodeJS",
          items: [
            "UI/UX 설계 문서 작성 주도 및 팀장 역할 수행",
            "Firebase Auth, Token, SharedPreference 등 로그인 및 회원가입 기능 구현",
            "SqfLite, Firebase, NodeJS 기반 온오프라인 채팅 기능 구현",
          ],
        },
        {
          title: "중고 거래 플랫폼 프로젝트 개발",
          tags: "#Flutter #Riverpod #CleanArchitecture #Firebase",
          items: [
            "UI/UX 디자인 및 브랜딩(로고, 서비스명) 설계",
            "Firebase와 Naver/Google Map API 기반 지도 기능 구현",
          ],
        },
      ],
    },
  ],

  certificates: [
    "정보처리기사",
    "네트워크 관리사 2급",
    "C/Python Embedded 개발 부트캠프 수료",
    "Flutter App 개발 부트캠프 수료",
  ],

  education: ["정보통신공학 학사", "실용음악학 학사"],

  retrospectives: [
    {
      title: "BLE 게이트웨이 기반 출입/출석 인증 시스템",
      period: "2025.03 ~ 08 (POXI)",
      content:
        "회사에서 수행한 프로젝트 중, 블루투스 게이트웨이와 카드 연동을 통한 출입 관리 및 앱 출석 연동이 가장 도전적이었습니다. 핵심 과제는 두 가지였습니다. 첫 번째는 무선으로 안정적이고 실시간으로 입출입을 인증하는 것이었고, 두 번째는 앱에서 출석을 처리할 때 신호 세기에 따른 기준을 정하는 일이었습니다. 이를 해결하기 위해 시장에서 적합한 게이트웨이 제품을 조사하고, 블루투스 신호 범위, 동시 접속 가능 인원, API 지원 여부, 가격 등 모든 사양을 꼼꼼히 비교했습니다. 선정된 제품과 내부 시스템을 연동하기 위해 API 문서를 분석하고, 카드와 블루투스 통신 테스트를 반복하며 안정성을 검증했습니다. 출석 처리 기준 문제를 해결하기 위해 다양한 환경에서 신호 세기를 측정하고, 간섭과 거리 변화 등 예외 상황을 분석하여 출석 처리 로직을 설계했습니다. 최종적으로 불안정한 부분이 있어 클라이언트와 협의 후 프로젝트를 접게 되었지만, 이 과정에서 하드웨어와 소프트웨어 동기화 및 반복 테스트의 중요성을 깊이 체감할 수 있었습니다. 이를 통해 기술적 문제 해결은 단순 구현을 넘어 사전 조사, 제품 사양 검토, 테스트 환경 구축까지 고려해야 한다는 점을 배웠고, 다시 같은 프로젝트를 진행한다면 초기 설계 단계에서 충분한 시뮬레이션과 테스트 환경을 마련하여 문제 발생 가능성을 최소화하겠다는 깨달음을 얻었습니다.",
    },
  ],

  openSource: [
    {
      name: "dart_boundaries",
      href: "https://pub.dev/packages/dart_boundaries",
      items: [
        "dart_boundaries - Feature/Layer 간 Import 경계를 강제하는 Custom Lint 규칙",
        "layer_boundaries - 패턴 기반으로 레이어를 정의하고 allow/disallow로 import 정책 선언",
        "no_cross_feature_import - Feature 폴더 간 직접 import 차단 (설정 불필요)",
        "no_banned_imports - 특정 import 경로를 전역/범위별로 차단, Quick Fix로 자동 제거 지원",
        "only_import_from_index - 다른 Feature에서는 index.dart 배럴 파일을 통해서만 import 허용",
        "IDE 실시간 감지 - 분석 서버 연동으로 경계 위반을 코드 작성 중 즉시 확인",
      ],
    },
    {
      name: "dart_balancer",
      href: "https://pub.dev/packages/dart_balancer",
      items: [
        "dart_balancer - Flutter 텍스트 밸런싱 라이브러리",
        "Ratio Control - 밸런스 강도 조절 (0.0 ~ 1.0)",
        "RichText Support - TextSpan 혼합 스타일 지원",
        "Korean/CJK keepAll - 한국어 단어 중간 끊김 방지",
        "Multiple Algorithms - Greedy(빠름) / Optimal(정확) 선택",
      ],
    },
    {
      name: "catching_josh",
      href: "https://pub.dev/packages/catching_josh",
      items: [
        "try-catch 및 console.log의 반복적인 코드 패턴 간소화",
        "에러 처리 로직을 직관적이고 읽기 쉽게 개선",
        "개발자의 생산성과 코드 품질을 향상",
      ],
    },
  ],

  aboutMePlainText:
    "Flutter, NextJS, NestJS 기반의 앱/웹 풀스택 개발자로, " +
    "스포츠 예약 플랫폼, 동호회 커뮤니티 앱, 캘린더 일정관리 앱, 체육관 플랫폼 앱, 부동산 플랫폼 앱 등 " +
    "다양한 서비스의 프론트엔드 및 백엔드 개발에 참여했습니다.\n\n" +
    "다양한 기술 스택의 구조와 패턴에 대한 이해를 바탕으로 유연하게 문제를 해결하며, " +
    "개발자, 기획자, 고객 등 다양한 사람들과의 소통을 통해 요구사항을 정확히 이해하고 반영하는 개발자입니다.\n\n" +
    "[코드보다 사람, 구조보다 경험]\n" +
    "처음에는 클린 아키텍처와 코드 구조에 집중했습니다. 하지만 여러 프로젝트를 거치며 깨달은 건, " +
    '사용자는 코드가 얼마나 깔끔한지 모른다는 것입니다. 사용자가 느끼는 건 오직 "이 앱이 내 문제를 얼마나 쉽게 해결해주는가"입니다. ' +
    "지금은 기능 하나를 만들더라도 사용자 흐름과 인터랙션을 먼저 설계하고, 그에 맞춰 구조를 잡습니다.\n\n" +
    "[사용자 경험이 곧 서비스의 가치]\n" +
    "아무리 잘 짜인 코드도 사용자가 불편하면 의미가 없습니다. 기술은 수단일 뿐, 결국 사용자가 얼마나 편하게 목표를 달성하느냐가 서비스의 본질이라고 생각합니다. " +
    '그래서 개발할 때 항상 "사용자가 이 화면에서 무엇을 원할까?"를 먼저 고민합니다.',
};
