import { describe, it, expect } from 'vitest';
import {
  fadeIn,
  slideInFromTop,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  scaleIn,
  staggerContainer,
  transitions,
  easings,
} from '../index';
import type {
  AnimationPreset,
  AnimationPresetName,
  TransitionDuration,
  EasingCurve,
} from '../index';

describe('Animation System Index Exports', () => {
  describe('Preset Exports', () => {
    it('should export all animation presets', () => {
      expect(fadeIn).toBeDefined();
      expect(slideInFromTop).toBeDefined();
      expect(slideInFromBottom).toBeDefined();
      expect(slideInFromLeft).toBeDefined();
      expect(slideInFromRight).toBeDefined();
      expect(scaleIn).toBeDefined();
      expect(staggerContainer).toBeDefined();
    });

    it('should export valid Framer Motion variants', () => {
      const presets = [
        fadeIn,
        slideInFromTop,
        slideInFromBottom,
        slideInFromLeft,
        slideInFromRight,
        scaleIn,
        staggerContainer,
      ];

      presets.forEach((preset) => {
        expect(preset).toHaveProperty('hidden');
        expect(preset).toHaveProperty('visible');
      });
    });
  });

  describe('Transition Exports', () => {
    it('should export transitions object', () => {
      expect(transitions).toBeDefined();
      expect(transitions).toHaveProperty('fast');
      expect(transitions).toHaveProperty('normal');
      expect(transitions).toHaveProperty('slow');
    });

    it('should have correct duration values', () => {
      expect(transitions.fast.duration).toBe(0.15);
      expect(transitions.normal.duration).toBe(0.3);
      expect(transitions.slow.duration).toBe(0.5);
    });
  });

  describe('Easing Exports', () => {
    it('should export easings object', () => {
      expect(easings).toBeDefined();
      expect(easings).toHaveProperty('easeIn');
      expect(easings).toHaveProperty('easeOut');
      expect(easings).toHaveProperty('easeInOut');
      expect(easings).toHaveProperty('spring');
    });

    it('should have correct easing configurations', () => {
      expect(easings.easeIn).toEqual([0.4, 0, 1, 1]);
      expect(easings.easeOut).toEqual([0, 0, 0.2, 1]);
      expect(easings.easeInOut).toEqual([0.4, 0, 0.2, 1]);
      expect(easings.spring).toEqual({ type: 'spring', stiffness: 300, damping: 30 });
    });
  });

  describe('Type Exports', () => {
    it('should allow AnimationPreset type usage', () => {
      const preset: AnimationPreset = fadeIn;
      expect(preset).toHaveProperty('hidden');
      expect(preset).toHaveProperty('visible');
    });

    it('should allow AnimationPresetName type usage', () => {
      const presetNames: AnimationPresetName[] = [
        'fadeIn',
        'slideInFromTop',
        'slideInFromBottom',
        'slideInFromLeft',
        'slideInFromRight',
        'scaleIn',
        'staggerContainer',
      ];
      expect(presetNames).toHaveLength(7);
    });

    it('should allow TransitionDuration type usage', () => {
      const durations: TransitionDuration[] = ['fast', 'normal', 'slow'];
      durations.forEach((duration) => {
        expect(transitions[duration]).toBeDefined();
      });
    });

    it('should allow EasingCurve type usage', () => {
      const curves: EasingCurve[] = ['easeIn', 'easeOut', 'easeInOut', 'spring'];
      curves.forEach((curve) => {
        expect(easings[curve]).toBeDefined();
      });
    });
  });
});
