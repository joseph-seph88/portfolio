import RiveCat from "./RiveCat";


export default function AboutMe() {
  return (
    <>
      <div className="text-left mb-2">
        <h2 className="font-bold text-2xl md:text-3xl text-gray-700">About Me</h2>
      </div>
      <div className="border-b-2 border-gray-200 mb-8"></div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mb-8">
        <RiveCat className="md:order-last" />

        <div className="flex-1">
          <Introduction />

          <br />

          <Philosophy title="코드보다 사람, 구조보다 경험">
            처음에는 클린 아키텍처와 코드 구조에 집중했습니다.
            하지만 여러 프로젝트를 거치며 깨달은 건, 사용자는 코드가 얼마나 깔끔한지 모른다는 것입니다.
            사용자가 느끼는 건 오직 &quot;이 앱이 <strong>내 문제를 얼마나 쉽게 해결</strong>해주는가&quot;입니다.
            지금은 기능 하나를 만들더라도 <strong>사용자 흐름과 인터랙션을 먼저 설계</strong>하고, 그에 맞춰 구조를 잡습니다.
          </Philosophy>

          <br />

          <Philosophy title="사용자 경험이 곧 서비스의 가치">
            아무리 잘 짜인 코드도 사용자가 불편하면 의미가 없습니다.
            기술은 수단일 뿐, 결국 <strong>사용자가 얼마나 편하게 목표를 달성하느냐가 서비스의 본질</strong>이라고 생각합니다.
            그래서 개발할 때 항상 &quot;사용자가 이 화면에서 무엇을 원할까?&quot;를 먼저 고민합니다.
          </Philosophy>
        </div>
      </div>
    </>
  );
}

function Philosophy({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <p className="text-gray-400 italic text-sm md:text-base"><strong>{title}</strong></p>
      <p className="text-sm md:text-base">{children}</p>
    </>
  );
}

function Introduction() {
  return (
    <>
      <p className="text-sm md:text-base"><strong>Flutter</strong>, <strong>NextJS</strong>, <strong>NestJS</strong> 기반의 <strong>앱/웹 풀스택 개발자</strong>로,
        스포츠 예약 플랫폼, 동호회 커뮤니티 앱, 캘린더 일정관리 앱, 체육관 플랫폼 앱, 부동산 플랫폼 앱 등 다양한 서비스의 프론트엔드 및 백엔드 개발에 참여했습니다.
      </p>

      <p className="text-sm md:text-base"><strong>다양한 기술 스택의 구조</strong>와 <strong>패턴에 대한 이해</strong>를 바탕으로 유연하게 문제를 해결하며,
        개발자, 기획자, 고객 등 다양한 사람들과의  <strong>소통</strong>을 통해  <strong>요구사항을 정확히 이해하고 반영하는 개발자</strong>입니다.
      </p>
    </>
  );
}
