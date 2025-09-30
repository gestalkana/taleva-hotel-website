// src/components/About/AboutServices.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaUtensils, FaUsers } from 'react-icons/fa';
import { fadeUp } from './animation';

const services = [
  {
    icon: <FaBed className="text-taleva-indigo" />,
    title: 'Hébergement',
    desc: '6 chambres familiales dans un bungalow de 864 m²',
  },
  {
    icon: <FaUtensils className="text-taleva-olive" />,
    title: 'Restauration',
    desc: 'Buvette et service de restauration pour clients et visiteurs',
  },
  {
    icon: <FaUsers className="text-taleva-red" />,
    title: 'Événements',
    desc: 'Grande salle pour réunions, fêtes ou séminaires',
  },
];

const AboutServices = () => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
    <h3 className="text-3xl font-bold mb-8 text-taleva-indigo">Nos Services</h3>
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
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
);

export default AboutServices;
