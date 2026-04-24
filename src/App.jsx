import { useState, useEffect } from 'react';
import Navbar  from './components/Navbar';
import About   from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer  from './components/Footer';

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

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
      <Contact />
      <Footer />
    </>
  );
}
