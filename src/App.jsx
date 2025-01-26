import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Description from './components/Description';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import { useEffect } from 'react';

export function App(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='App'>
      <Header />
      <Description data-aos='fade-up' />
      <Skills data-aos='fade-left' />
      <Experience data-aos='fade-up' />
      <Education data-aos='fade-right' />
      <Certifications data-aos='fade-up' />
      <Footer />
    </div>
  );
}
