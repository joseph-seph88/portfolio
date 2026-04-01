'use client';

import { resumeData } from '@/data/resume-data';

export default function Retrospective() {
    return (
        <>
            <div className="text-left mb-4 mt-10 md:mt-15">
                <h2 className="font-bold text-2xl md:text-3xl text-gray-700">Retrospective</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            {resumeData.retrospectives.map((retro, idx) => (
                <div key={retro.title}>
                    {idx > 0 && <div className="border-b border-gray-200 my-8"></div>}
                    <div className="mb-6">
                        <div className="mb-3">
                            <p className="font-bold text-lg md:text-xl text-gray-700">{retro.title}</p>
                            {retro.period && <p className="font-medium text-sm text-gray-500">{retro.period}</p>}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{retro.content}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
