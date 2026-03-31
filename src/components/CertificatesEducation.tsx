import { resumeData } from '@/data/resume-data';

export default function CertificatesEducation() {
    return (
        <div>
            <div className="text-left mb-4 mt-12 md:mt-20">
                <h2 className="font-bold text-2xl md:text-3xl text-gray-700">Certificates & Education</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            <InfoSection title="Certificates" className="mt-10" items={resumeData.certificates} />
            <InfoSection title="Education" className="mt-4" items={resumeData.education} />
        </div>
    );
}


function InfoSection({ title, items, className }: { title: string; items: string[]; className?: string }) {
    return (
        <div className="flex flex-col md:flex-row gap-2 md:gap-12 mb-6 md:mb-8">
            <div className="flex-none w-full md:w-60">
                <p className={`font-bold text-lg md:text-xl text-gray-700 ml-2 ${className ?? ''}`}>{title}</p>
            </div>
            <div className="flex-1 ml-2 md:ml-0">
                <ul className="list-disc list-inside space-y-1 md:space-y-2">
                    {items.map((item) => (
                        <li key={item} className="font-medium text-sm md:text-base"> {item} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
