/**
 * Spacing token definitions for the design system
 * 
 * These spacing tokens define a consistent scale from 4px to 128px.
 * Used for margins, padding, gaps, and other layout spacing.
 * 
 * @module design-system/tokens/spacing
 */

/**
 * Spacing scale tokens
 * Provides a consistent spacing system based on a 4px base unit
 */
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  base: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
  '5xl': '128px',
} as const;

/**
 * Type representing available spacing scale values
 */
export type SpacingScale = keyof typeof spacing;
