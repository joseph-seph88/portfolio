import { resumeData } from '@/data/resume-data';

export default function OpenSource() {
    return (
        <>
            <div className="text-left mb-2 mt-10 md:mt-15">
                <h2 className="font-bold text-2xl md:text-3xl text-gray-700">Open-Source</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            {resumeData.openSource.map((os) => (
                <PackageEntry key={os.name} name={os.name} href={os.href} items={os.items} />
            ))}
        </>
    );
}


function PackageEntry({ name, href, items }: { name: string; href: string; items: string[] }) {
    return (
        <div className="flex flex-col md:flex-row gap-2 md:gap-12 mb-6 md:mb-8">
            <div className="flex-none w-full md:w-60">
                <p className="text-gray-500 italic font-bold text-base md:text-large mt-4 md:mt-10 ml-2"><strong>{name}</strong></p>
            </div>
            <div className="flex-1 ml-2 md:ml-0">
                <p>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 md:px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium text-sm md:text-base transition-all duration-150 hover:bg-gray-200 hover:shadow-md active:scale-95 active:bg-gray-300 active:shadow-inner"
                    >
                        📦 패키지 보기
                    </a>
                </p>
                <ul className="text-gray-600 ml-2 mt-3 space-y-1 list-disc list-inside text-sm md:text-base">
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
