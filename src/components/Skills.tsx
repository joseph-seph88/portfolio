import { resumeData } from '@/data/resume-data';

export default function Skills() {
    return (
        <div>
            <div className="text-left mb-4 mt-20">
                <h2 className="font-bold text-3xl text-gray-700">Skills</h2>
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
        <div className="flex gap-12 mb-8">
            <div className="flex-none w-60">
                <p className="font-bold text-xl text-gray-700 mt-12 ml-2">{title}</p>
            </div>
            <div className="flex-1">
                <ul className="list-disc list-inside space-y-2">
                    {items.map((item) => (
                        <li key={item} className="text-gray-500 font-normal"> {item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
