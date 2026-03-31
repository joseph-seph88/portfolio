import Image from "next/image";

export default function ProblemSolving() {
    return (
        <>
            <div className="text-left mb-2 mt-10 md:mt-15">
                <h2 className="font-bold text-2xl md:text-3xl text-gray-700">Problem-Solving Experience</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-8">
                <SideQuote text="비정상적인 동작이 생기면 원인과 맥락을 꼭 파악해야합니다. 그래야 비슷한 상황에서 실수를 줄일 수 있습니다." />
                <NotionPreview
                    href="https://trusted-reptile-257.notion.site/244618c1c2c180689068efed252bcc99?v=244618c1c2c181d7b0bb000cb4f4379e&source=copy_link"
                    imageSrc="/portfolio/assets/images/temp.webp"
                />
            </div>
        </>
    );
}


function SideQuote({ text }: { text: string }) {
    return (
        <div className="flex-none w-full md:w-60">
            <p className="text-gray-400 italic text-sm md:text-base mt-4 md:mt-20 ml-2"><strong>{text}</strong></p>
        </div>
    );
}

function NotionPreview({ href, imageSrc }: { href: string; imageSrc: string }) {
    return (
        <div className="flex-1 ml-2 md:ml-0">
            <p>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 md:px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium text-sm md:text-base transition-all duration-150 hover:bg-gray-200 hover:shadow-md active:scale-95 active:bg-gray-300 active:shadow-inner"
                >
                    📖 노션 페이지 보기
                </a>
            </p>
            <Image
                src={imageSrc}
                alt="Problem Solving Preview"
                width={500}
                height={500}
                className="flex-shrink-0 object-cover rounded-lg mt-4 w-full md:w-[500px]"
            />
        </div>
    );
}
