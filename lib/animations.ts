import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardHover: Variants = {
  hover: {
    y: -2,
    borderColor: "var(--accent)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const overlayVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
