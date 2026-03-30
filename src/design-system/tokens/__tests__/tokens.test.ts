/**
 * Unit tests for design system tokens
 * 
 * These tests verify that all token categories are properly defined
 * and can be imported correctly.
 */

import { describe, it, expect } from 'vitest';
import { spacing } from '../spacing';
import { typography } from '../typography';
import { shadows } from '../shadows';
import { borderRadius } from '../borders';
import { glassEffects } from '../effects';

describe('Spacing Tokens', () => {
  it('should export all spacing scale values', () => {
    expect(spacing.xs).toBe('4px');
    expect(spacing.sm).toBe('8px');
    expect(spacing.md).toBe('12px');
    expect(spacing.base).toBe('16px');
    expect(spacing.lg).toBe('24px');
    expect(spacing.xl).toBe('32px');
    expect(spacing['2xl']).toBe('48px');
    expect(spacing['3xl']).toBe('64px');
    expect(spacing['4xl']).toBe('96px');
    expect(spacing['5xl']).toBe('128px');
  });

  it('should have all required spacing keys', () => {
    const keys = Object.keys(spacing);
    expect(keys).toContain('xs');
    expect(keys).toContain('sm');
    expect(keys).toContain('md');
    expect(keys).toContain('base');
    expect(keys).toContain('lg');
    expect(keys).toContain('xl');
    expect(keys).toContain('2xl');
    expect(keys).toContain('3xl');
    expect(keys).toContain('4xl');
    expect(keys).toContain('5xl');
  });
});

describe('Typography Tokens', () => {
  it('should export font family', () => {
    expect(typography.fontFamily.sans).toEqual(['Inter', 'system-ui', 'sans-serif']);
  });

  it('should export font sizes', () => {
    expect(typography.fontSize.xs).toBe('0.75rem');
    expect(typography.fontSize.sm).toBe('0.875rem');
    expect(typography.fontSize.base).toBe('1rem');
    expect(typography.fontSize.lg).toBe('1.125rem');
    expect(typography.fontSize.xl).toBe('1.25rem');
    expect(typography.fontSize['2xl']).toBe('1.5rem');
    expect(typography.fontSize['7xl']).toBe('4.5rem');
  });

  it('should export font weights', () => {
    expect(typography.fontWeight.light).toBe(300);
    expect(typography.fontWeight.normal).toBe(400);
    expect(typography.fontWeight.medium).toBe(500);
    expect(typography.fontWeight.semibold).toBe(600);
    expect(typography.fontWeight.bold).toBe(700);
    expect(typography.fontWeight.extrabold).toBe(800);
    expect(typography.fontWeight.black).toBe(900);
  });

  it('should export line heights', () => {
    expect(typography.lineHeight.tight).toBe(1.25);
    expect(typography.lineHeight.snug).toBe(1.375);
    expect(typography.lineHeight.normal).toBe(1.5);
    expect(typography.lineHeight.relaxed).toBe(1.625);
    expect(typography.lineHeight.loose).toBe(2);
  });
});

describe('Shadow Tokens', () => {
  it('should export elevation levels', () => {
    expect(shadows.sm).toBe('0 1px 2px 0 rgb(0 0 0 / 0.05)');
    expect(shadows.md).toBe('0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)');
    expect(shadows.lg).toBe('0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)');
    expect(shadows.xl).toBe('0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)');
    expect(shadows['2xl']).toBe('0 25px 50px -12px rgb(0 0 0 / 0.25)');
  });

  it('should export glow effects', () => {
    expect(shadows.glow.royal).toBe('0 0 20px rgba(99, 102, 241, 0.3)');
    expect(shadows.glow.cyan).toBe('0 0 20px rgba(6, 182, 212, 0.3)');
  });
});

describe('Border Radius Tokens', () => {
  it('should export all border radius values', () => {
    expect(borderRadius.sm).toBe('0.375rem');
    expect(borderRadius.md).toBe('0.5rem');
    expect(borderRadius.lg).toBe('0.75rem');
    expect(borderRadius.xl).toBe('1rem');
    expect(borderRadius['2xl']).toBe('1.5rem');
    expect(borderRadius.full).toBe('9999px');
  });
});

describe('Glass Effect Tokens', () => {
  it('should export glass effect', () => {
    expect(glassEffects.glass.background).toBe('rgba(255, 255, 255, 0.05)');
    expect(glassEffects.glass.backdropBlur).toBe('24px');
    expect(glassEffects.glass.border).toBe('rgba(255, 255, 255, 0.1)');
  });

  it('should export strong glass effect', () => {
    expect(glassEffects.glassStrong.background).toBe('rgba(255, 255, 255, 0.1)');
    expect(glassEffects.glassStrong.backdropBlur).toBe('32px');
    expect(glassEffects.glassStrong.border).toBe('rgba(255, 255, 255, 0.2)');
  });
});
