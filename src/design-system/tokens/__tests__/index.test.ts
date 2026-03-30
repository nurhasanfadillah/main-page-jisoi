/**
 * Unit tests for design system token exports
 * 
 * These tests verify that all tokens can be imported from the main index file.
 */

import { describe, it, expect } from 'vitest';
import {
  colors,
  navy,
  royal,
  cyan,
  spacing,
  typography,
  shadows,
  borderRadius,
  glassEffects,
} from '../index';

describe('Token Index Exports', () => {
  it('should export color tokens', () => {
    expect(colors).toBeDefined();
    expect(navy).toBeDefined();
    expect(royal).toBeDefined();
    expect(cyan).toBeDefined();
    expect(colors.navy).toBe(navy);
    expect(colors.royal).toBe(royal);
    expect(colors.cyan).toBe(cyan);
  });

  it('should export spacing tokens', () => {
    expect(spacing).toBeDefined();
    expect(spacing.xs).toBe('4px');
    expect(spacing['5xl']).toBe('128px');
  });

  it('should export typography tokens', () => {
    expect(typography).toBeDefined();
    expect(typography.fontFamily).toBeDefined();
    expect(typography.fontSize).toBeDefined();
    expect(typography.fontWeight).toBeDefined();
    expect(typography.lineHeight).toBeDefined();
  });

  it('should export shadow tokens', () => {
    expect(shadows).toBeDefined();
    expect(shadows.sm).toBeDefined();
    expect(shadows.glow).toBeDefined();
  });

  it('should export border radius tokens', () => {
    expect(borderRadius).toBeDefined();
    expect(borderRadius.sm).toBe('0.375rem');
    expect(borderRadius.full).toBe('9999px');
  });

  it('should export glass effect tokens', () => {
    expect(glassEffects).toBeDefined();
    expect(glassEffects.glass).toBeDefined();
    expect(glassEffects.glassStrong).toBeDefined();
  });
});
