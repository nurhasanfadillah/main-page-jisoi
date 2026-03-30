/**
 * Design System Index Exports Test
 * 
 * Validates that all components and tokens are properly exported
 * from the main design system entry point.
 */

import { describe, it, expect } from 'vitest';
import * as DesignSystem from '../index';

describe('Design System Exports', () => {
  it('should export all components', () => {
    expect(DesignSystem.Button).toBeDefined();
    expect(DesignSystem.Badge).toBeDefined();
    expect(DesignSystem.Card).toBeDefined();
  });

  it('should export all token categories', () => {
    expect(DesignSystem.colors).toBeDefined();
    expect(DesignSystem.spacing).toBeDefined();
    expect(DesignSystem.typography).toBeDefined();
    expect(DesignSystem.shadows).toBeDefined();
    expect(DesignSystem.borderRadius).toBeDefined();
    expect(DesignSystem.glassEffects).toBeDefined();
  });

  it('should export color palettes', () => {
    expect(DesignSystem.navy).toBeDefined();
    expect(DesignSystem.royal).toBeDefined();
    expect(DesignSystem.cyan).toBeDefined();
  });
});
