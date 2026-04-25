import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "임제형 | 소마 팀빌딩 랜딩 페이지",
  description: "백엔드 개발자 임제형의 소마 팀빌딩 소개 페이지",
};

export default function IntroLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={inter.variable}>{children}</div>;
}
