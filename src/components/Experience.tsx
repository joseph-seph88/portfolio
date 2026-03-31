'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume-data';

export default function Experience() {
    return (
        <>
            <div className="text-left mb-4 mt-10 md:mt-15">
                <h2 className="font-bold text-2xl md:text-3xl text-gray-700">Experience</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            {resumeData.experiences.map((exp, idx) => (
                <div key={exp.company}>
                    {idx > 0 && <div className="border-b border-gray-200 mb-8"></div>}
                    <ExperienceEntry
                        company={exp.company}
                        icon={exp.icon}
                        link={exp.link}
                        role={exp.role}
                        period={exp.period}
                    >
                        {exp.projects.map((proj, pIdx) => (
                            <div key={pIdx}>
                                {pIdx > 0 && <br />}
                                <Project
                                    title={proj.title}
                                    status={proj.status}
                                    tags={proj.tags}
                                    items={proj.items}
                                />
                            </div>
                        ))}
                        {exp.images && <ProjectImages images={exp.images} />}
                    </ExperienceEntry>
                </div>
            ))}
        </>
    );
}


const underlineVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 },
};

function MotionLink({ href, label }: { href: string; label: string }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sm text-gray-400 italic ml-2 mb-2 block font-bold max-w-full truncate"
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
        >
            {label}
            <motion.span
                className="absolute left-0 -bottom-0.5 h-[1.5px] bg-gray-400 origin-left"
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ width: '100%' }}
            />
        </motion.a>
    );
}

function ExperienceEntry({ company, icon, link, role, period, children }: {
    company: string;
    icon?: string;
    link: string;
    role: string;
    period: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-8 md:items-center">
            <div className="flex-none w-full md:w-60">
                {icon && (
                    <div className="ml-2 mb-2">
                        <Image src={icon} alt={`${company} icon`} width={48} height={48} className="rounded-lg" />
                    </div>
                )}
                <p className="font-bold text-lg md:text-xl text-gray-700 ml-2">{company}</p>
                <MotionLink href={link} label={link} />
                <p className="font-bold text-sm text-gray-700 ml-2">{role}</p>
                <p className="font-medium text-sm text-gray-600 ml-2">{period}</p>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}

function Project({ title, status, tags, items }: {
    title: React.ReactNode;
    status?: string;
    tags: string;
    items: string[];
}) {
    return (
        <>
            <p className="font-bold text-l text-gray-700">
                {title}
                {status && <span className="text-sm text-gray-500 font-medium"> ({status})</span>}
            </p>
            <p className="font-bold text-sm text-gray-400 italic">{tags}</p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-sm font-normal">
                {items.map((item) => (
                    <li key={item}> {item}</li>
                ))}
            </ul>
        </>
    );
}

function ProjectImages({ images }: { images: { src: string; alt: string }[] }) {
    return (
        <div className="mt-4 flex flex-wrap gap-2 md:gap-4">
            {images.map((img) => (
                <Image key={img.src} src={img.src} alt={img.alt} width={200} height={400} className="rounded-lg shadow-md w-24 h-auto md:w-[200px]" />
            ))}
        </div>
    );
}
