import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CVDownload from './components/CVDownload';
import Education from './components/Education';
import Contact from './components/Contact';
import ContactPopup from './components/ContactPopup';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300 relative bg-grid overflow-x-hidden pb-12`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="w-full px-4 sm:px-8 lg:px-12 relative">
        <main className="mt-16 space-y-32">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <CVDownload />
          <Education />
          <Contact />
        </main>
      </div>
      <ContactPopup />
    </div>
  );
}

export default App;
