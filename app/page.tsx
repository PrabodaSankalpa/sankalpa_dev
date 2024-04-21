import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/education";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Testimonial from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Testimonial/>
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
