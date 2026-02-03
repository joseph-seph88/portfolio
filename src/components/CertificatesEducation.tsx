export default function CertificatesEducation() {
    return (
        <div>
            <div className="text-left mb-4 mt-20">
                <h2 className="font-bold text-3xl text-gray-700">Certificates & Education</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            <InfoSection title="Certificates" className="mt-10" items={[
                '정보처리기사',
                '네트워크 관리사 2급',
                'C/Python Embedded 개발 부트캠프 수료',
                'Flutter App 개발 부트캠프 수료',
            ]} />

            <InfoSection title="Education" className="mt-4" items={[
                '정보통신공학 학사',
                '실용음악학 학사',
            ]} />
        </div>
    );
}


function InfoSection({ title, items, className }: { title: string; items: string[]; className?: string }) {
    return (
        <div className="flex gap-12 mb-8">
            <div className="flex-none w-60">
                <p className={`font-bold text-xl text-gray-700 ml-2 ${className ?? ''}`}>{title}</p>
            </div>
            <div className="flex-1">
                <ul className="list-disc list-inside space-y-2">
                    {items.map((item) => (
                        <li key={item} className="font-medium"> {item} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
