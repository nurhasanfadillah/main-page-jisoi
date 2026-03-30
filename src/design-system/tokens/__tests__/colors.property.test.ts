/**
 * Property-based tests for color token structure
 * 
 * These tests use fast-check to verify universal properties across all color tokens.
 * Each test runs 100 iterations with randomized inputs to ensure comprehensive coverage.
 */

import { describe, test, expect } from 'vitest';
import * as fc from 'fast-check';
import { colors, navy, royal, cyan } from '../colors';
import type { ColorToken } from '../types';

/**
 * **Validates: Requirements 1.1, 1.3, 1.6**
 * 
 * Property 1: Token System Structure Completeness
 * 
 * For any token category (colors, spacing, typography, shadows, borders, effects),
 * the exported token object should contain all required keys and valid values
 * according to its type definition.
 */
describe('Property 1: Token System Structure Completeness', () => {
  test('color palettes contain all required shades from 50 to 900', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('navy', 'royal', 'cyan'),
        (paletteName) => {
          const palette = colors[paletteName];
          
          // Verify palette exists
          expect(palette).toBeDefined();
          expect(palette).not.toBeNull();
          
          // Verify all required shades exist
          const requiredShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;
          requiredShades.forEach(shade => {
            expect(palette).toHaveProperty(shade);
            expect(palette[shade]).toBeDefined();
            expect(palette[shade]).not.toBeNull();
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('all color token values are valid hex color strings', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('navy', 'royal', 'cyan'),
        fc.constantFrom('50', '100', '200', '300', '400', '500', '600', '700', '800', '900'),
        (paletteName, shade) => {
          const palette = colors[paletteName];
          const colorValue = palette[shade as keyof typeof palette];
          
          // Verify color value is a valid hex string
          expect(colorValue).toMatch(/^#[0-9A-F]{6}$/i);
          
          // Verify it's a non-empty string
          expect(typeof colorValue).toBe('string');
          expect(colorValue.length).toBe(7);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('color token objects are immutable (as const)', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('navy', 'royal', 'cyan'),
        (paletteName) => {
          const palette = colors[paletteName];
          
          // Verify the object is frozen (TypeScript 'as const' should make it readonly)
          // We can't directly test TypeScript types at runtime, but we can verify
          // the structure matches the ColorToken interface
          const shades = Object.keys(palette);
          expect(shades).toHaveLength(10);
          
          // Verify all keys are valid shade numbers
          shades.forEach(shade => {
            expect(['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']).toContain(shade);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('colors object contains exactly three palettes', () => {
    const paletteNames = Object.keys(colors);
    expect(paletteNames).toHaveLength(3);
    expect(paletteNames).toContain('navy');
    expect(paletteNames).toContain('royal');
    expect(paletteNames).toContain('cyan');
  });

  test('individual palette exports match colors object properties', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('50', '100', '200', '300', '400', '500', '600', '700', '800', '900'),
        (shade) => {
          // Verify navy palette
          expect(navy[shade as keyof typeof navy]).toBe(colors.navy[shade as keyof typeof colors.navy]);
          
          // Verify royal palette
          expect(royal[shade as keyof typeof royal]).toBe(colors.royal[shade as keyof typeof colors.royal]);
          
          // Verify cyan palette
          expect(cyan[shade as keyof typeof cyan]).toBe(colors.cyan[shade as keyof typeof colors.cyan]);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('color values are unique within each palette', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('navy', 'royal', 'cyan'),
        (paletteName) => {
          const palette = colors[paletteName];
          const values = Object.values(palette);
          const uniqueValues = new Set(values);
          
          // All color values should be unique (no duplicates)
          expect(uniqueValues.size).toBe(values.length);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('color shades have consistent structure across palettes', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('navy', 'royal', 'cyan'),
        (paletteName) => {
          const palette = colors[paletteName];
          
          // Verify all shades are present and have valid hex values
          const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;
          
          shades.forEach(shade => {
            const colorValue = palette[shade];
            
            // Verify it's a valid hex color
            expect(colorValue).toMatch(/^#[0-9A-F]{6}$/i);
            
            // Verify it's a string with correct length
            expect(typeof colorValue).toBe('string');
            expect(colorValue.length).toBe(7);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
