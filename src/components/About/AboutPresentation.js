// src/components/About/AboutPresentation.js
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './animation';

const AboutPresentation = () => (
  <motion.div
    className="text-left max-w-xl mx-auto md:mx-0"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    {/* Accroche principale */}
    <motion.h3
      className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-taleva-olive to-taleva-red bg-clip-text text-transparent animate-textGradient text-justify"
      custom={0}
      variants={fadeUp}
    >
      Un cadre chaleureux, familial et authentique au cœur de la région de Pangalane
    </motion.h3>

    {/* Paragraphe 1 */}
    <motion.p
      className="text-base md:text-base text-taleva-indigo leading-relaxed mb-4 text-justify"
      custom={1}
      variants={fadeUp}
    >
      Créé en 2014 et ouvert au public en 2019, <strong>l’Hôtel Taleva</strong> est une entreprise familiale qui incarne l’hospitalité malgache dans toute sa richesse. Pensé comme un lieu de convivialité, de repos et de partage, l’hôtel propose une offre complète mêlant hébergement, restauration et organisation d’événements, dans un cadre paisible et fonctionnel.
    </motion.p>

    {/* Paragraphe 2 */}
    <motion.p
      className="text-base md:text-base text-taleva-indigo leading-relaxed text-justify"
      custom={2}
      variants={fadeUp}
    >
      Malgré une ouverture marquée par les défis de la pandémie mondiale, l’équipe dirigeante, animée par une vision claire et des valeurs fortes, a su maintenir le cap. Aujourd’hui, Taleva continue de se développer en misant sur la modernisation, l’innovation et un accueil personnalisé, fidèle à son esprit familial.
    </motion.p>
  </motion.div>
);

export default AboutPresentation;
