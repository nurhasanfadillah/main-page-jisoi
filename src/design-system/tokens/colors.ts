/**
 * Color token definitions for the design system
 * 
 * These color tokens define the navy, royal, and cyan palettes with shades from 50 to 900.
 * Values are synchronized with the Tailwind configuration for backward compatibility.
 * 
 * @module design-system/tokens/colors
 */

/**
 * Navy color palette - Primary brand color
 * Used for backgrounds, text, and UI elements requiring a professional, trustworthy appearance
 */
export const navy = {
  50: '#E6EBF5',
  100: '#C2D1E8',
  200: '#9AB5D9',
  300: '#7299CA',
  400: '#5483BF',
  500: '#366DB4',
  600: '#2E5FA0',
  700: '#244D88',
  800: '#1A3B70',
  900: '#0A1628',
} as const;

/**
 * Royal color palette - Secondary brand color
 * Used for interactive elements, CTAs, and accent highlights
 */
export const royal = {
  50: '#EEF2FF',
  100: '#E0E7FF',
  200: '#C7D2FE',
  300: '#A5B4FC',
  400: '#818CF8',
  500: '#6366F1',
  600: '#4F46E5',
  700: '#4338CA',
  800: '#3730A3',
  900: '#1E40AF',
} as const;

/**
 * Cyan color palette - Tertiary brand color
 * Used for informational elements, links, and complementary accents
 */
export const cyan = {
  50: '#ECFEFF',
  100: '#CFFAFE',
  200: '#A5F3FC',
  300: '#67E8F9',
  400: '#22D3EE',
  500: '#06B6D4',
  600: '#0891B2',
  700: '#0E7490',
  800: '#155E75',
  900: '#164E63',
} as const;

/**
 * Complete color token collection
 * Exports all color palettes in a single object for convenient access
 */
export const colors = {
  navy,
  royal,
  cyan,
} as const;

/**
 * Type representing available color palettes
 */
export type ColorPalette = keyof typeof colors;

/**
 * Type representing available color shades (50-900)
 */
export type ColorShade = keyof typeof navy;
