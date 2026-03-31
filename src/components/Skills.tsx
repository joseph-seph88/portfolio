import { resumeData } from '@/data/resume-data';

export default function Skills() {
    return (
        <div>
            <div className="text-left mb-4 mt-12 md:mt-20">
                <h2 className="font-bold text-2xl md:text-3xl text-gray-700">Skills</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            {resumeData.skills.map((cat) => (
                <SkillCategory key={cat.title} title={cat.title} items={cat.items} />
            ))}
        </div>
    );
}


function SkillCategory({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="flex flex-col md:flex-row gap-2 md:gap-12 mb-6 md:mb-8">
            <div className="flex-none w-full md:w-60">
                <p className="font-bold text-lg md:text-xl text-gray-700 mt-2 md:mt-12 ml-2">{title}</p>
            </div>
            <div className="flex-1 ml-2 md:ml-0">
                <ul className="list-disc list-inside space-y-1 md:space-y-2">
                    {items.map((item) => (
                        <li key={item} className="text-gray-600 font-normal text-sm md:text-base"> {item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
