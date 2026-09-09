import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Expertise } from '@/components/Expertise';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-ink-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
