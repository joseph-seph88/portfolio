import { resumeData } from '@/data/resume-data';

export default function Project() {
    return (
        <>
            <div className="text-left mb-4 mt-15">
                <h2 className="font-bold text-3xl text-gray-700">Project</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            {resumeData.educationProjects.map((ep, idx) => (
                <ProjectEntry
                    key={ep.org}
                    org={ep.org}
                    role={ep.role}
                    period={ep.period}
                    className={idx > 0 ? 'mt-20' : undefined}
                >
                    {ep.projects.map((proj, pIdx) => (
                        <div key={pIdx}>
                            {pIdx > 0 && <br />}
                            <ProjectDetail
                                title={proj.title}
                                tags={proj.tags}
                                items={proj.items}
                            />
                        </div>
                    ))}
                </ProjectEntry>
            ))}
        </>
    );
}


function ProjectEntry({ org, role, period, className, children }: {
    org: string;
    role: string;
    period: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex gap-12 mb-8">
            <div className={`flex-none w-60 ${className ?? ''}`}>
                <p className="font-bold text-xl text-gray-700 mt-2 ml-2">{org}</p>
                <p className="font-bold text-sm text-gray-700 ml-2">{role}</p>
                <p className="font-medium text-sm text-gray-600 ml-2">{period}</p>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}

function ProjectDetail({ title, tags, items }: {
    title: string;
    tags: string;
    items: string[];
}) {
    return (
        <>
            <p className="font-bold text-l text-gray-700">{title}</p>
            <p className="font-bold text-sm text-gray-400 italic">{tags}</p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                {items.map((item) => (
                    <li key={item}> {item} </li>
                ))}
            </ul>
        </>
    );
}
