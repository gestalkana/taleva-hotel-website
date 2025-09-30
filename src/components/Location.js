import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaSuitcaseRolling, FaUsers, FaBuilding } from 'react-icons/fa';
import { fadeUp } from './About/animation';

const AboutLocation = () => (
  <motion.div
    className="mt-20 grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    {/* Texte et icônes explicatifs */}
    <div className="space-y-6">
      <h3 className="text-3xl font-bold mb-6 text-taleva-indigo flex items-center gap-3">
        <FaMapMarkerAlt className="text-red-600 text-4xl" />
        <span>Localisation stratégique</span>
      </h3>

      <p className="text-lg text-gray-700 leading-relaxed">
        Nous sommes situés à <strong>Betainomby</strong>, dans la zone de <strong>Pagalane</strong>, à seulement 200 mètres du pont de Pagalane (<em>Pont Mainty</em>), facilement accessible par la route <strong>Galana Dépôt Analakininina/Vohitsara</strong>.
      </p>

      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-3">
          <FaSuitcaseRolling className="text-taleva-indigo text-xl" />
          <span>Parfait pour les voyageurs en transit</span>
        </li>
        <li className="flex items-center gap-3">
          <FaUsers className="text-taleva-indigo text-xl" />
          <span>Accueille les groupes</span>
        </li>
        <li className="flex items-center gap-3">
          <FaBuilding className="text-taleva-indigo text-xl" />
          <span>Adapté aux missions professionnelles</span>
        </li>
         <li className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-taleva-indigo text-xl" />
          <span><strong>Adresse exacte :</strong> Lot 1503 A Mahavanona Betainomby</span>
        </li>
      </ul>
    </div>

    {/* Carte Google Maps */}
    <div className="w-full h-72 rounded-xl overflow-hidden shadow-md border border-gray-200">
     <iframe
  title="Carte Localisation Hôtel Taleva"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.258104503659!2d49.38452971526022!3d-18.17117554914298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f4ff8f9c4ce5b3%3A0xc8a6a0e94aabbc68!2sHotel%20Bungalow%20Taleva!5e0!3m2!1sfr!2smg!4v1696076052101!5m2!1sfr!2smg"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
  </motion.div>
);

export default AboutLocation;
