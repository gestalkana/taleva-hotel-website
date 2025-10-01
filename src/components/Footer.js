import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-taleva-indigo text-taleva-light py-12 px-6 md:px-20 mt-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <address className="not-italic space-y-2 text-sm">
            <p>Hôtel Taleva</p>
            <p>Lot 1503 A Mahavanona Betainomby</p>
            <p>Toamasina, Madagascar</p>
            <p>Tél : <a href="tel:+261349885131" className="underline hover:text-taleva-olive">+261 34 98 851 31</a></p>
            <p>Email : <a href="mailto:talevanest@gmail.com" className="underline hover:text-taleva-olive">talevanest@gmail.com</a></p>
          </address>
        </div>

        {/* Liens utiles */}
        <div>
          <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
          <ul className="space-y-3 text-sm">
            {[
              { label: 'Accueil', href: '#accueil' },
              { label: 'À propos', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Contact', href: '#contact' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-taleva-olive transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://facebook.com/HotelBungalowTaleva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-taleva-red transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1-3 3-3h2v3h-2c-.5 0-1 .5-1 1v2h3l-1 3h-2v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-taleva-red transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.4a9 9 0 0 1-2.85 1.1 4.48 4.48 0 0 0-7.66 4.1A12.7 12.7 0 0 1 1.64 2.15a4.5 4.5 0 0 0 1.39 6 4.41 4.41 0 0 1-2.04-.57v.06a4.48 4.48 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2.03.07 4.48 4.48 0 0 0 4.19 3.12A9 9 0 0 1 1 18.57a12.8 12.8 0 0 0 6.92 2" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-taleva-red transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

     <div className="mt-12 border-t border-taleva-light/30 pt-6 text-center text-sm text-taleva-light/80">
      &copy; {new Date().getFullYear()} Hôtel Taleva. Tous droits réservés. <br />
      Développé par <a href="https://gabriel-andriamahafaly.netlify.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-taleva-olive">Gabriel Andriamahafaly</a>
    </div>

    </footer>
  );
};

export default Footer;
