import Image from "next/image";
import { resumeData } from '@/data/resume-data';

export default function Header() {
  const { profile } = resumeData;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0 mb-8 pb-4">
      <HeaderTitle name={profile.name} subtitle={profile.subtitle} />
      <div className="text-center md:text-right">
        <div className="mb-3 md:mb-5">
          <SocialLink href={profile.github} src="/portfolio/assets/images/git_logo.webp" alt="GitHub" />
          <SocialLink href={profile.portfolio} src="/portfolio/assets/images/halfdev.webp" alt="Portfolio" imgClassName="py-3 px-3" />
        </div>
        <p className="text-sm md:text-base mt-2 md:mt-10">Email: <strong>{profile.email}</strong></p>
      </div>
    </div>
  );
}


function HeaderTitle({ name, subtitle }: { name: string; subtitle: string }) {
  return (
    <div className="header-left text-center md:text-left">
      <h1 className="md:ml-10 mt-4 md:mt-7 text-2xl md:text-4xl text-gray-700 font-medium tracking-wide">{name}</h1>
      <h2 className="md:ml-11 mt-2 md:mt-3 text-lg md:text-2xl text-gray-400 font-medium tracking-tight">{subtitle}</h2>
    </div>
  );
}

function SocialLink({ href, src, alt, imgClassName }: { href: string; src: string; alt: string; imgClassName?: string }) {
  return (
    <a href={href} className="no-underline mr-2 md:mr-4 inline-block bg-gray-100 rounded-full p-2 md:p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200 border-1 border-gray-300">
      <Image
        src={src}
        alt={alt}
        width={60}
        height={60}
        className={`object-contain w-10 h-10 md:w-[60px] md:h-[60px] ${imgClassName ?? ''}`}
      />
    </a>
  );
}
