import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JOSEPH88 - App & Server Developer",
  description: "Flutter & NestJS 앱/서버 개발자 JOSEPH88의 포트폴리오입니다. 모바일 앱 개발, 백엔드 API 개발, 풀스택 개발 경험을 보여줍니다.",
  keywords: ["Flutter", "NestJS", "TypeScript", "Next.js", "개발자", "포트폴리오"],
  authors: [{ name: "JOSEPH88" }],
  creator: "JOSEPH88",
  icons: {
    icon: '/portfolio/favicon.ico',
    shortcut: '/portfolio/favicon.ico',
    apple: '/portfolio/favicon.ico',
  },
  openGraph: {
    title: "JOSEPH88 - Flutter & NestJS Developer Portfolio",
    description: "Flutter & NestJS 앱/서버 개발자 JOSEPH88의 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
