/**
 * Glass morphism effect token definitions for the design system
 * 
 * These effect tokens define glass morphism configurations.
 * Used for creating frosted glass visual effects with backdrop blur.
 * 
 * @module design-system/tokens/effects
 */

/**
 * Glass morphism effect configurations
 * Includes standard glass and strong glass variants
 */
export const glassEffects = {
  glass: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropBlur: '24px',
    border: 'rgba(255, 255, 255, 0.1)',
  },
  glassStrong: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropBlur: '32px',
    border: 'rgba(255, 255, 255, 0.2)',
  },
} as const;

/**
 * Type representing available glass effect variants
 */
export type GlassEffectVariant = keyof typeof glassEffects;
