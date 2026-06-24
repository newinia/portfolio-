import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Expertise />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}