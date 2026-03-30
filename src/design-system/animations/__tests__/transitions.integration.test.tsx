import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { motion } from 'framer-motion';
import { fadeIn, transitions, easings } from '../index';

describe('Transitions Integration', () => {
  it('should work with animation presets', () => {
    const { container } = render(
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={transitions.fast}
      >
        Test Content
      </motion.div>
    );

    expect(container.firstChild).toBeTruthy();
  });

  it('should combine transitions and easings', () => {
    const { container } = render(
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ ...transitions.normal, ease: easings.easeOut }}
      >
        Test Content
      </motion.div>
    );

    expect(container.firstChild).toBeTruthy();
  });

  it('should work with spring easing', () => {
    const { container } = render(
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={easings.spring}
      >
        Test Content
      </motion.div>
    );

    expect(container.firstChild).toBeTruthy();
  });

  it('should allow custom duration with preset easing', () => {
    const { container } = render(
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: easings.easeInOut }}
      >
        Test Content
      </motion.div>
    );

    expect(container.firstChild).toBeTruthy();
  });
});
