import Image from "next/image";
import { resumeData } from '@/data/resume-data';

export default function Header() {
  const { profile } = resumeData;

  return (
    <div className="flex justify-between items-start mb-8 pb-4">
      <HeaderTitle name={profile.name} subtitle={profile.subtitle} />
      <div className="text-right">
        <div className="mb-5">
          <SocialLink href={profile.github} src="/portfolio/assets/images/git_logo.webp" alt="GitHub" />
          <SocialLink href={profile.portfolio} src="/portfolio/assets/images/halfdev.webp" alt="Portfolio" imgClassName="py-3 px-3" />
        </div>
        <p className="text-base mt-10">Email: <strong>{profile.email}</strong></p>
      </div>
    </div>
  );
}


function HeaderTitle({ name, subtitle }: { name: string; subtitle: string }) {
  return (
    <div className="header-left">
      <h1 className="ml-10 mt-7 text-4xl text-gray-700 font-medium tracking-wide">{name}</h1>
      <h2 className="ml-11 mt-3 text-2xl text-gray-400 font-medium tracking-tight">{subtitle}</h2>
    </div>
  );
}

function SocialLink({ href, src, alt, imgClassName }: { href: string; src: string; alt: string; imgClassName?: string }) {
  return (
    <a href={href} className="no-underline mr-4 inline-block bg-gray-100 rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200 border-1 border-gray-300">
      <Image
        src={src}
        alt={alt}
        width={60}
        height={60}
        className={`object-contain ${imgClassName ?? ''}`}
      />
    </a>
  );
}
