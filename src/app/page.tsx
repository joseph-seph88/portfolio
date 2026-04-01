import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import ProblemSolving from "@/components/ProblemSolving";
import Experience from "@/components/Experience";
import Retrospective from "@/components/Retrospective";
import Skills from "@/components/Skills";
import CertificatesEducation from "@/components/CertificatesEducation";
import Project from "@/components/Project";
import OpenSource from "@/components/OpenSource";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-15">
      <Header />
      <AboutMe />
      <Experience />
      <Retrospective />
      <ProblemSolving />
      <OpenSource />
      <Project />
      <Skills />
      <CertificatesEducation />
      <Footer />
    </div>
  );
}
