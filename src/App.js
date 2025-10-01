import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About/About';
// import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="font-sans bg-taleva-light text-gray-800 scroll-smooth">
      <Navbar />
      
      {/* Ajout du padding-top ici */}
      <main className="pt-16">
        <Hero />
        <About /> 
        {/* <Services /> */}
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
