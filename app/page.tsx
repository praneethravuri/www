import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import { WorkExperience } from "@/components/WorkExperience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-[640px] px-6 pb-24 max-[600px]:px-5 max-[600px]:pb-20">
      <TopBar />
      <Hero />
      <WorkExperience />
      <Projects />
      <Education />
      <Footer />
    </main>
  );
}
