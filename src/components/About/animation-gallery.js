// animation-gallery.js
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: 'spring',
      stiffness: 120,
      damping: 18,
    }
  }),
};

export const slidePage = {
  initial: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.95,
    filter: 'blur(4px)',
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      x: { type: 'spring', stiffness: 100, damping: 20 },
      opacity: { duration: 0.4, ease: 'easeOut' },
      scale: { duration: 0.4, ease: 'easeOut' },
      filter: { duration: 0.4, ease: 'easeOut' },
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.95,
    filter: 'blur(4px)',
    transition: {
      x: { type: 'spring', stiffness: 100, damping: 20 },
      opacity: { duration: 0.3, ease: 'easeIn' },
      scale: { duration: 0.3, ease: 'easeIn' },
      filter: { duration: 0.3, ease: 'easeIn' },
    },
  }),
};
