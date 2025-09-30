import './Hero.css';
import heroImage from '../assets/images/hero-background.jpg';
export default function Hero() {
  return (
    <section 
      className="relative bg-taleva-indigo text-white py-32 md:py-48"
      className="relative bg-taleva-indigo text-white py-32 md:py-48"
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
        <p style={{ marginBottom: '32px' }} className="text-lg animate-fadeInUp">
          Un séjour inoubliable au cœur de la nature.
        </p>
        <a
          href="#rooms"
          className="bg-taleva-red hover:bg-red-600 text-white py-3 px-8 rounded text-lg font-semibold transition transform hover:scale-105 animate-fadeInUp"
          style={{ marginTop: '32px' }}
        >
          Réserver maintenant
        </a>
      </div>
    </section>
  );
}
