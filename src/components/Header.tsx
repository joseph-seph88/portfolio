import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-start mb-8 pb-4">
      <HeaderTitle />
      <div className="text-right">
        <div className="mb-5">
          <SocialLink href="https://github.com/joseph-seph88" src="/portfolio/assets/images/git_logo.png" alt="GitHub" />
          <SocialLink href="https://joseph88-devlab.vercel.app/ko" src="/portfolio/assets/images/vercel.png" alt="Notion" imgClassName="py-3 px-3" />
        </div>
        <p className="text-base mt-10">Email: <strong>pathetic.sim@gmail.com</strong></p>
      </div>
    </div>
  );
}


function HeaderTitle() {
  return (
    <div className="header-left">
      <h1 className="ml-10 mt-7 text-4xl text-gray-700 font-medium tracking-wide">임종섭 (JOSEPH)</h1>
      <h2 className="ml-11 mt-3 text-2xl text-gray-400 font-medium tracking-tight">앱/웹 풀스택 개발자</h2>
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
