import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About/About';
// import Rooms from './components/Rooms';
// import Services from './components/Services';
// import Gallery from './components/Gallery';
// import Testimonials from './components/Testimonials';
// import Location from './components/Location';
import Contact from './components/Contact';
// import Footer from './components/Footer'; // <-- Celui-ci n'était pas commenté, donc je l'ai gardé

function App() {
  return (
    <div className="font-sans bg-taleva-light text-gray-800 scroll-smooth">
      <Navbar />
      
      {/* Ajout du padding-top ici */}
      <main className="pt-16">
        <Hero />
        <About /> 
        {/* <Rooms /> */}
        {/* <Services /> */}
        {/* <Gallery /> */}
        {/* <Testimonials /> */}
        {/* <Location /> */}
        <Contact />
      </main>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
