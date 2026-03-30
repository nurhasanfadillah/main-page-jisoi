/**
 * Border radius token definitions for the design system
 * 
 * These border radius tokens define consistent corner rounding values.
 * Used for buttons, cards, inputs, and other UI elements.
 * 
 * @module design-system/tokens/borders
 */

/**
 * Border radius token collection
 * Provides a scale from small (6px) to full (pill shape)
 */
export const borderRadius = {
  sm: '0.375rem',   // 6px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

/**
 * Type representing available border radius values
 */
export type BorderRadiusScale = keyof typeof borderRadius;
