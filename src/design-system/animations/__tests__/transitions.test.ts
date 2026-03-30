import { describe, it, expect } from 'vitest';
import { transitions, easings } from '../transitions';

describe('Transition Presets', () => {
  describe('transitions', () => {
    it('should have fast, normal, and slow duration presets', () => {
      expect(transitions).toHaveProperty('fast');
      expect(transitions).toHaveProperty('normal');
      expect(transitions).toHaveProperty('slow');
    });

    it('should have correct duration values', () => {
      expect(transitions.fast).toEqual({ duration: 0.15 });
      expect(transitions.normal).toEqual({ duration: 0.3 });
      expect(transitions.slow).toEqual({ duration: 0.5 });
    });

    it('should have durations in ascending order', () => {
      expect(transitions.fast.duration).toBeLessThan(transitions.normal.duration);
      expect(transitions.normal.duration).toBeLessThan(transitions.slow.duration);
    });

    it('should use design token values (in seconds)', () => {
      // Verify durations are in seconds (Framer Motion format)
      expect(transitions.fast.duration).toBe(0.15); // 150ms
      expect(transitions.normal.duration).toBe(0.3); // 300ms
      expect(transitions.slow.duration).toBe(0.5); // 500ms
    });
  });

  describe('easings', () => {
    it('should have easeIn, easeOut, easeInOut, and spring presets', () => {
      expect(easings).toHaveProperty('easeIn');
      expect(easings).toHaveProperty('easeOut');
      expect(easings).toHaveProperty('easeInOut');
      expect(easings).toHaveProperty('spring');
    });

    it('should have correct easeIn curve', () => {
      expect(easings.easeIn).toEqual([0.4, 0, 1, 1]);
    });

    it('should have correct easeOut curve', () => {
      expect(easings.easeOut).toEqual([0, 0, 0.2, 1]);
    });

    it('should have correct easeInOut curve', () => {
      expect(easings.easeInOut).toEqual([0.4, 0, 0.2, 1]);
    });

    it('should have correct spring configuration', () => {
      expect(easings.spring).toEqual({
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    });

    it('should have cubic-bezier curves as arrays', () => {
      expect(Array.isArray(easings.easeIn)).toBe(true);
      expect(Array.isArray(easings.easeOut)).toBe(true);
      expect(Array.isArray(easings.easeInOut)).toBe(true);
    });

    it('should have spring as object with type, stiffness, and damping', () => {
      expect(typeof easings.spring).toBe('object');
      expect(easings.spring).toHaveProperty('type', 'spring');
      expect(easings.spring).toHaveProperty('stiffness');
      expect(easings.spring).toHaveProperty('damping');
    });
  });

  describe('Type safety', () => {
    it('should export transitions as const', () => {
      // This test verifies the const assertion works at runtime
      const transitionKeys = Object.keys(transitions) as Array<keyof typeof transitions>;
      expect(transitionKeys).toEqual(['fast', 'normal', 'slow']);
    });

    it('should export easings as const', () => {
      // This test verifies the const assertion works at runtime
      const easingKeys = Object.keys(easings) as Array<keyof typeof easings>;
      expect(easingKeys).toEqual(['easeIn', 'easeOut', 'easeInOut', 'spring']);
    });
  });
});
