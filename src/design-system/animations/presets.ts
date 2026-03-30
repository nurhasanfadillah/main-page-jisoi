import { Variants } from 'framer-motion';

/**
 * Animation preset for fading in elements
 * @example
 * <motion.div variants={fadeIn} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Animation preset for sliding in from the top
 * @example
 * <motion.div variants={slideInFromTop} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const slideInFromTop: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Animation preset for sliding in from the bottom
 * @example
 * <motion.div variants={slideInFromBottom} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Animation preset for sliding in from the left
 * @example
 * <motion.div variants={slideInFromLeft} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

/**
 * Animation preset for sliding in from the right
 * @example
 * <motion.div variants={slideInFromRight} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

/**
 * Animation preset for scaling in elements
 * @example
 * <motion.div variants={scaleIn} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

/**
 * Animation preset for staggering child animations
 * Use this on a parent container to stagger the animation of its children
 * @example
 * <motion.div variants={staggerContainer} initial="hidden" animate="visible">
 *   <motion.div variants={fadeIn}>Child 1</motion.div>
 *   <motion.div variants={fadeIn}>Child 2</motion.div>
 * </motion.div>
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
