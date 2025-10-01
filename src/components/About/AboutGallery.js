import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './animation-gallery';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../../assets/images/photo-1.jpg';
import img2 from '../../assets/images/photo-2.jpg';
import img3 from '../../assets/images/photo-3.jpg';
import img4 from '../../assets/images/hero-background.jpg';
import img5 from '../../assets/images/photo-5.jpg';
import img6 from '../../assets/images/photo-6.jpg';
import img7 from '../../assets/images/photo-7.png';
import img8 from '../../assets/images/photo-8.jpg';
import img9 from '../../assets/images/photo-9.jpg';
import img10 from '../../assets/images/photo-4.jpg';

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const IMAGES_PER_PAGE = 4;
const AUTO_PLAY_DELAY = 15000;

const AboutGallery = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const intervalRef = useRef(null);

  const startIndex = page * IMAGES_PER_PAGE;

  const paginatedImages = [];
  for (let i = 0; i < IMAGES_PER_PAGE; i++) {
    const index = (startIndex + i) % galleryImages.length;
    paginatedImages.push(galleryImages[index]);
  }

  const goToNextPage = useCallback(() => {
    setPage(prev => (prev + 1) % totalPages);
  }, [totalPages]);

  const goToPrevPage = () => {
    setPage(prev => (prev - 1 + totalPages) % totalPages);
  };

  const resetAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goToNextPage, AUTO_PLAY_DELAY);
  };

  useEffect(() => {
    intervalRef.current = setInterval(goToNextPage, AUTO_PLAY_DELAY);
    return () => clearInterval(intervalRef.current);
  }, [goToNextPage]);

  const handleManualNavigation = (direction) => {
    if (direction === 'next') goToNextPage();
    if (direction === 'prev') goToPrevPage();
    resetAutoPlay();
  };

  return (
    <div className="md:w-1/2 mt-10 md:mt-0">
      <motion.div
        className="grid grid-cols-2 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {paginatedImages.map((src, i) => (
          <motion.div
            key={`${page}-${i}`}
            className="overflow-hidden rounded-xl shadow-md group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={src}
              alt={`Galerie ${startIndex + i + 1}`} // ✅ plus de "image"
              className="w-full h-48 object-cover block group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={() => handleManualNavigation('prev')}
          aria-label="Image précédente"
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => handleManualNavigation('next')}
          aria-label="Image suivante"
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AboutGallery;
