import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Publications from "@/components/sections/Publications";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      {/* Hero — animated headline, typewriter role, CTA buttons */}
      <Hero />

      {/* About — bio, profile photo, downloadable CV */}
      <About />

      {/* Skills — AI/ML tech stack with proficiency bars */}
      <Skills />

      {/* Projects — featured project cards with tags and links */}
      <Projects />

      {/* Experience — vertical timeline of work history */}
      <Experience />

      {/* Education — degrees, institutions, highlights */}
      <Education />

      {/* Publications — peer-reviewed research papers */}
      <Publications />

      {/* Testimonials — colleague recommendations */}
      <Testimonials />

      {/* Contact — form wired to API route */}
      <Contact />
    </>
  );
}
