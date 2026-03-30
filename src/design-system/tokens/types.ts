/**
 * Type definitions for design system tokens
 * 
 * These types provide TypeScript type safety for all token categories.
 * Each token category has a corresponding interface that defines its structure.
 * 
 * @module design-system/tokens/types
 */

/**
 * Color token structure with shades from 50 to 900
 */
export interface ColorToken {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

/**
 * Spacing token structure with predefined scale
 */
export interface SpacingToken {
  xs: string;
  sm: string;
  md: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
}

/**
 * Typography token structure
 */
export interface TypographyToken {
  fontFamily: {
    sans: string[];
  };
  fontSize: Record<string, string>;
  fontWeight: Record<string, number>;
  lineHeight: Record<string, number>;
}

/**
 * Shadow token structure with elevation levels and glow effects
 */
export interface ShadowToken {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  glow: {
    royal: string;
    cyan: string;
  };
}

/**
 * Border radius token structure
 */
export interface BorderRadiusToken {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

/**
 * Glass morphism effect configuration
 */
export interface GlassEffect {
  background: string;
  backdropBlur: string;
  border: string;
}
