import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const slideUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 }
};

export const scaleIn: Variants = {
  initial: { scale: 0.8 },
  animate: { scale: 1 },
  exit: { scale: 0.8 }
};

export const pieceHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.2,
    rotateY: [-10, 10],
    transition: {
      rotateY: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1
      }
    }
  }
};