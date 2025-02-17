import { useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = (e.target as HTMLAnchorElement).getAttribute('href');
      if (target && target.startsWith('#')) {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-dark-950 text-gray-100">
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Publications />
      <Contact />
    </main>
  );
}

export default App;