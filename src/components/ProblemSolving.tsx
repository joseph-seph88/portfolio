import Image from "next/image";

export default function ProblemSolving() {
    return (
        <>
            <div className="text-left mb-2 mt-15">
                <h2 className="font-bold text-3xl text-gray-700">Problem-Solving Experience</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            <div className="flex gap-12 mb-8">
                <div className="flex-none w-60">
                    <p className="text-gray-400 italic mt-20 ml-2"><strong>비정상적인 동작이 생기면 원인과 맥락을 꼭 파악해야합니다. 그래야 비슷한 상황에서 실수를 줄일 수 있습니다.</strong></p>
                </div>

                <div className="flex-1">
                    <p><a href="https://trusted-reptile-257.notion.site/244618c1c2c180689068efed252bcc99?v=244618c1c2c181d7b0bb000cb4f4379e&source=copy_link" target="_blank" rel="noopener noreferrer">📖 노션 페이지 보기</a></p>
                    <Image
                        src="/portfolio/assets/images/temp.png"
                        alt="Profile Image"
                        width={500}
                        height={500}
                        className="flex-shrink-0 object-cover rounded-lg"
                    />
                </div>
            </div>

        </>
    );
}