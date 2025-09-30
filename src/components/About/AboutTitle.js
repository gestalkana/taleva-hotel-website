// src/components/About/AboutTitle.js
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './animation';

const AboutTitle = () => (
  <motion.h2
    className="text-4xl font-bold text-center mb-16 text-taleva-indigo"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }} 
    variants={fadeUp}
  >
    À propos de l’Hôtel Taleva
  </motion.h2>
);

export default AboutTitle;
