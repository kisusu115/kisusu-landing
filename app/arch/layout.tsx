import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { content } from "./content";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: content.meta.canonical,
  },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: content.meta.canonical,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
  },
};

export default function ArchLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={inter.variable}>{children}</div>;
}
