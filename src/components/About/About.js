// src/components/About/About.js
import React from 'react';
import AboutTitle from './AboutTitle';
import AboutPresentation from './AboutPresentation';
import AboutGallery from './AboutGallery';
import AboutServices from './AboutServices';
import AboutValues from './AboutValues';
import AboutLocation from './AboutLocation';

const About = () => {
  return (
    <section id="about" className="bg-taleva-light text-gray-800 py-16 px-6 max-w-7xl mx-auto">
      <AboutTitle />
      <div className="flex flex-col md:flex-row md:space-x-16">
        <AboutPresentation />
        <AboutGallery />
      </div>
      <div className="mt-20 grid md:grid-cols-2 gap-16 scroll-mt-20" id="services">
        <AboutServices />
        <AboutValues />
      </div>
      <AboutLocation />
    </section>
  );
};

export default About;
