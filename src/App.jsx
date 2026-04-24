import { useState, useEffect } from 'react';
import Navbar   from './components/Navbar';
import About    from './components/About';
import Projects from './components/Projects';
import Skills   from './components/Skills';
import Links    from './components/Links';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import Chat     from './components/Chat';

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  // Sync dark mode with CSS variables on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Scroll reveal animations (runs once after all components mount)
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <About dark={dark} />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Links />
      <div className="divider" />
      <Contact />
      <Footer />
      <Chat />
    </>
  );
}
