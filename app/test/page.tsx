import type { Metadata } from "next";
import { content } from "./content";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
};

export default function TestPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <h1 className="text-center text-6xl font-black tracking-tight sm:text-8xl md:text-9xl">
        {content.title}
      </h1>
    </main>
  );
}
