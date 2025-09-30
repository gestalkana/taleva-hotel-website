// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBed,
  FaUtensils,
  FaUsers,
  FaMapMarkerAlt,
  FaCogs,
  FaLightbulb
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const galleryImages = [
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
];

const About = () => {
  return (
    <section className="bg-taleva-light text-gray-800 py-16 px-6 max-w-7xl mx-auto">
      {/* Titre principal */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-taleva-indigo"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        À propos de l’Hôtel Taleva
      </motion.h2>

      {/* Ligne principale : Présentation + Galerie */}
      <div className="flex flex-col md:flex-row md:space-x-16">
        {/* Présentation (gauche) */}
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-lg leading-relaxed text-justify text-taleva-indigo">
            Un cadre chaleureux, familial et authentique au cœur de la région de Pagalane.<br /><br />
            Créé en 2014 et ouvert au public en 2019, <strong>l’Hôtel Taleva</strong> est une entreprise familiale qui incarne l’hospitalité malgache dans toute sa richesse. Pensé comme un lieu de convivialité, de repos et de partage, l’hôtel propose une offre complète mêlant hébergement, restauration et organisation d’événements, dans un cadre paisible et fonctionnel.<br /><br />
            Malgré une ouverture marquée par les défis de la pandémie mondiale, l’équipe dirigeante, animée par une vision claire et des valeurs fortes, a su maintenir le cap. Aujourd’hui, Taleva continue de se développer en misant sur la modernisation, l’innovation et un accueil personnalisé, fidèle à son esprit familial.
          </p>
        </motion.div>

        {/* Galerie (droite) */}
        <motion.div
          className="md:w-1/2 grid grid-cols-2 gap-4 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={src}
                alt={`Galerie ${i + 1}`}
                className="w-full h-48 object-cover block"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Services et Valeurs côte à côte */}
      <div className="mt-20 grid md:grid-cols-2 gap-16">
        {/* Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-3xl font-bold mb-8 text-taleva-indigo">Nos Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaBed className="text-taleva-indigo" />, title: 'Hébergement', desc: '6 chambres familiales dans un bungalow de 864 m²' },
              { icon: <FaUtensils className="text-taleva-olive" />, title: 'Restauration', desc: 'Buvette et service de restauration pour clients et visiteurs' },
              { icon: <FaUsers className="text-taleva-red" />, title: 'Événements', desc: 'Grande salle pour réunions, fêtes ou séminaires' },
            ].map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Valeurs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-3xl font-bold mb-8 text-taleva-indigo">Nos Valeurs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <FaUsers className="text-purple-600" />, label: 'Convivialité' },
              { icon: <FaMapMarkerAlt className="text-red-600" />, label: 'Authenticité' },
              { icon: <FaCogs className="text-gray-700" />, label: 'Adaptabilité' },
              { icon: <FaLightbulb className="text-yellow-500" />, label: 'Innovation' },
            ].map((valeur, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">{valeur.icon}</div>
                <p className="text-lg font-medium text-gray-800">{valeur.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Localisation : texte à gauche, map à droite */}
      <motion.div
        className="mt-20 grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Description */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-taleva-indigo flex items-center gap-2">
            <span>📍 Localisation stratégique</span> <FaMapMarkerAlt className="text-red-600" />
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Entre <strong>Tananarive</strong> et <strong>Foulpoint</strong>, à seulement 200 m du pont de Pagalane.<br />
            Idéal pour les voyageurs en transit, groupes ou missions professionnelles.
          </p>
        </div>

        {/* Google Maps iframe */}
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Carte Localisation Hôtel Taleva"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.309640931712!2d49.2702848152608!3d-18.907900387274777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f5a53d63c68ef1%3A0xbab2a01978fa7f05!2sPont%20de%20Pagalane!5e0!3m2!1sfr!2smg!4v1696076052101!5m2!1sfr!2smg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>

      {/* Projets */}
      <motion.div
        className="mt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-3xl font-bold mb-6 text-taleva-indigo">🔧 Nos Projets</h3>
        <ul className="list-disc list-inside text-left max-w-2xl mx-auto text-gray-700 text-lg space-y-2">
          <li>Extension des chambres : jusqu’à 4 étages prévus</li>
          <li>Digitalisation du système de gestion hôtelière</li>
          <li>Agenda de réservation et devis automatisés en ligne</li>
          <li>Suivi informatisé des stocks et coordination interne optimisée</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
