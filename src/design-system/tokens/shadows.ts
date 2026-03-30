/**
 * Shadow token definitions for the design system
 * 
 * These shadow tokens define elevation levels and glow effects.
 * Used for creating depth and visual hierarchy in the UI.
 * 
 * @module design-system/tokens/shadows
 */

/**
 * Shadow token collection
 * Includes elevation levels (sm to 2xl) and glow effects for royal and cyan colors
 */
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  glow: {
    royal: '0 0 20px rgba(99, 102, 241, 0.3)',
    cyan: '0 0 20px rgba(6, 182, 212, 0.3)',
  },
} as const;

/**
 * Type representing available shadow elevation levels
 */
export type ShadowLevel = Exclude<keyof typeof shadows, 'glow'>;

/**
 * Type representing available glow effect colors
 */
export type GlowColor = keyof typeof shadows.glow;
