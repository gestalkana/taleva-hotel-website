import { useState, useEffect } from 'react';
import './Hero.css';
import heroImage from '../assets/images/hero-background.jpg';

const slogans = [
  "Des moments simples, des souvenirs précieux.",
  "Un lieu pour se retrouver, rire et se détendre.",
  "Vivez l’expérience bungalow en famille.",
];

export default function Hero() {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // lancer le fade out
      setTimeout(() => {
        setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
        setFade(true); // lancer le fade in
      }, 500); // délai pour attendre la fin du fade out
    }, 4000); // toutes les 4 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section
  id="accueil"
  className="relative bg-taleva-indigo text-white py-32 md:py-48 scroll-mt-10 min-h-screen"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto px-6 text-center max-w-3xl space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown">
          Bienvenue à l'Hôtel Taleva
        </h2>
        <p
          className={`text-lg slogan-transition ${fade ? 'fade-in' : 'fade-out'}`}
          style={{ marginBottom: '32px' }}
        >
          {slogans[currentSloganIndex]}
        </p>
        <a
          href="#contact"
          className="bg-taleva-red hover:bg-red-600 text-white py-3 px-8 rounded text-lg font-semibold transition transform hover:scale-105 animate-fadeInUp"
          style={{ marginTop: '32px' }}
        >
          Faire une demande
        </a>
      </div>
    </section>
  );
}
