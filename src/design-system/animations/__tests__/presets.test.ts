import { describe, it, expect } from 'vitest';
import {
  fadeIn,
  slideInFromTop,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  scaleIn,
  staggerContainer,
} from '../presets';

describe('Animation Presets', () => {
  describe('fadeIn', () => {
    it('should have hidden and visible states', () => {
      expect(fadeIn).toHaveProperty('hidden');
      expect(fadeIn).toHaveProperty('visible');
    });

    it('should fade from opacity 0 to 1', () => {
      expect(fadeIn.hidden).toEqual({ opacity: 0 });
      expect(fadeIn.visible).toEqual({ opacity: 1 });
    });
  });

  describe('slideInFromTop', () => {
    it('should have hidden and visible states', () => {
      expect(slideInFromTop).toHaveProperty('hidden');
      expect(slideInFromTop).toHaveProperty('visible');
    });

    it('should slide from top with opacity', () => {
      expect(slideInFromTop.hidden).toEqual({ opacity: 0, y: -30 });
      expect(slideInFromTop.visible).toEqual({ opacity: 1, y: 0 });
    });
  });

  describe('slideInFromBottom', () => {
    it('should have hidden and visible states', () => {
      expect(slideInFromBottom).toHaveProperty('hidden');
      expect(slideInFromBottom).toHaveProperty('visible');
    });

    it('should slide from bottom with opacity', () => {
      expect(slideInFromBottom.hidden).toEqual({ opacity: 0, y: 30 });
      expect(slideInFromBottom.visible).toEqual({ opacity: 1, y: 0 });
    });
  });

  describe('slideInFromLeft', () => {
    it('should have hidden and visible states', () => {
      expect(slideInFromLeft).toHaveProperty('hidden');
      expect(slideInFromLeft).toHaveProperty('visible');
    });

    it('should slide from left with opacity', () => {
      expect(slideInFromLeft.hidden).toEqual({ opacity: 0, x: -30 });
      expect(slideInFromLeft.visible).toEqual({ opacity: 1, x: 0 });
    });
  });

  describe('slideInFromRight', () => {
    it('should have hidden and visible states', () => {
      expect(slideInFromRight).toHaveProperty('hidden');
      expect(slideInFromRight).toHaveProperty('visible');
    });

    it('should slide from right with opacity', () => {
      expect(slideInFromRight.hidden).toEqual({ opacity: 0, x: 30 });
      expect(slideInFromRight.visible).toEqual({ opacity: 1, x: 0 });
    });
  });

  describe('scaleIn', () => {
    it('should have hidden and visible states', () => {
      expect(scaleIn).toHaveProperty('hidden');
      expect(scaleIn).toHaveProperty('visible');
    });

    it('should scale from 0.9 to 1 with opacity', () => {
      expect(scaleIn.hidden).toEqual({ opacity: 0, scale: 0.9 });
      expect(scaleIn.visible).toEqual({ opacity: 1, scale: 1 });
    });
  });

  describe('staggerContainer', () => {
    it('should have hidden and visible states', () => {
      expect(staggerContainer).toHaveProperty('hidden');
      expect(staggerContainer).toHaveProperty('visible');
    });

    it('should have stagger transition configuration', () => {
      expect(staggerContainer.hidden).toEqual({ opacity: 0 });
      expect(staggerContainer.visible).toHaveProperty('opacity', 1);
      expect(staggerContainer.visible).toHaveProperty('transition');
      expect((staggerContainer.visible as any).transition).toHaveProperty('staggerChildren', 0.1);
    });
  });

  describe('All presets', () => {
    const allPresets = [
      { name: 'fadeIn', preset: fadeIn },
      { name: 'slideInFromTop', preset: slideInFromTop },
      { name: 'slideInFromBottom', preset: slideInFromBottom },
      { name: 'slideInFromLeft', preset: slideInFromLeft },
      { name: 'slideInFromRight', preset: slideInFromRight },
      { name: 'scaleIn', preset: scaleIn },
      { name: 'staggerContainer', preset: staggerContainer },
    ];

    it('should all be valid Framer Motion Variants objects', () => {
      allPresets.forEach(({ name, preset }) => {
        expect(preset, `${name} should be an object`).toBeTypeOf('object');
        expect(preset, `${name} should have hidden state`).toHaveProperty('hidden');
        expect(preset, `${name} should have visible state`).toHaveProperty('visible');
      });
    });
  });
});
