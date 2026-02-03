export default function OpenSource() {
    return (
        <>
            <div className="text-left mb-2 mt-15">
                <h2 className="font-bold text-3xl text-gray-700">Open-Source</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            <PackageEntry
                name="catching_josh"
                href="https://pub.dev/packages/catching_josh"
                items={[
                    'try-catch 및 console.log의 반복적인 코드 패턴 간소화',
                    '에러 처리 로직을 직관적이고 읽기 쉽게 개선',
                    '개발자의 생산성과 코드 품질을 향상',
                ]}
            />
        </>
    );
}


function PackageEntry({ name, href, items }: { name: string; href: string; items: string[] }) {
    return (
        <div className="flex gap-12 mb-8">
            <div className="flex-none w-60">
                <p className="text-gray-500 italic font-bold text-large mt-10 ml-2"><strong>{name}</strong></p>
            </div>
            <div className="flex-1">
                <p><a href={href} target="_blank" rel="noopener noreferrer">📦 패키지 보기</a></p>
                <ul className="text-gray-400 italic ml-2 mt-3 space-y-1 list-disc list-inside">
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
