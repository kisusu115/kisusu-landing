import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kisusu.dev",
  description: "임제형의 페이지 컬렉션",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
