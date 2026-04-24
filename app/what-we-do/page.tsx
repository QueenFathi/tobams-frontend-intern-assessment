import { Metadata } from "next";
import Header from "@/component/shared/header";
import HeroSection from "@/component/ui/hero-section";

export const metadata: Metadata = {
  title: 'What We Do | Tobams Group',
  description: 'Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today’s ever-evolving landscape',
}


export default function About() {
  return (
    <div className="tracking-wider bg-background">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
