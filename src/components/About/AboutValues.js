// src/components/About/AboutValues.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaMapMarkerAlt, FaCogs, FaLightbulb } from 'react-icons/fa';
import { fadeUp } from './animation';

const values = [
  { icon: <FaUsers className="text-purple-600" />, label: 'Convivialité' },
  { icon: <FaMapMarkerAlt className="text-red-600" />, label: 'Authenticité' },
  { icon: <FaCogs className="text-gray-700" />, label: 'Adaptabilité' },
  { icon: <FaLightbulb className="text-yellow-500" />, label: 'Innovation' },
];

const AboutValues = () => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
    <h3 className="text-3xl font-bold mb-8 text-taleva-indigo">Nos Valeurs</h3>
    <div className="grid md:grid-cols-2 gap-8">
      {values.map((valeur, index) => (
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
);

export default AboutValues;
