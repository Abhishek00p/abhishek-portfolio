import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Gallery } from "@/components/sections/gallery";
import { CaseStudies } from "@/components/sections/case-studies";
import { Engineering } from "@/components/sections/engineering";
import { Philosophy } from "@/components/sections/philosophy";
import { ResumeCTA } from "@/components/sections/resume-cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <ValueProps />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Gallery />
        <CaseStudies />
        <Engineering />
        <Philosophy />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
