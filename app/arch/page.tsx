import "./arch.css";
import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import {
  FoundationSection,
  TataSection,
  KkongkkongSection,
  SchedulerSection,
  ClosingSection,
} from "./_components/Sections";
import { Flow } from "./_components/Flow";
import { Footer } from "./_components/Footer";

export default function ArchPage() {
  return (
    <div className="arch-root">
      <Nav />
      <Hero />
      <main>
        <FoundationSection />
        <TataSection />
        <KkongkkongSection />
        <SchedulerSection />
        <Flow />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}
