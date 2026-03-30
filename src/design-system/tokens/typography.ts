/**
 * Typography token definitions for the design system
 * 
 * These typography tokens define font families, sizes, weights, and line heights.
 * Used for consistent text styling across all components.
 * 
 * @module design-system/tokens/typography
 */

/**
 * Typography token collection
 * Includes font families, sizes, weights, and line heights
 */
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
} as const;

/**
 * Type representing available font size values
 */
export type FontSize = keyof typeof typography.fontSize;

/**
 * Type representing available font weight values
 */
export type FontWeight = keyof typeof typography.fontWeight;

/**
 * Type representing available line height values
 */
export type LineHeight = keyof typeof typography.lineHeight;
