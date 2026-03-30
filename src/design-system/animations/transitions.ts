/**
 * Transition and easing presets for the animation system
 * 
 * Provides standardized timing configurations for animations.
 * These presets ensure consistent animation durations and easing curves
 * across the application.
 * 
 * @module design-system/animations/transitions
 */

/**
 * Duration presets for animations
 * 
 * - fast: 150ms - Quick micro-interactions (hover states, tooltips)
 * - normal: 300ms - Standard transitions (modals, dropdowns)
 * - slow: 500ms - Deliberate animations (page transitions, complex reveals)
 */
export const transitions = {
  fast: { duration: 0.15 },
  normal: { duration: 0.3 },
  slow: { duration: 0.5 },
} as const;

/**
 * Easing curve presets for animations
 * 
 * - easeIn: Starts slow, ends fast - Good for exits
 * - easeOut: Starts fast, ends slow - Good for entrances
 * - easeInOut: Slow start and end - Good for continuous motion
 * - spring: Natural spring physics - Good for playful interactions
 */
export const easings = {
  easeIn: [0.4, 0, 1, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeInOut: [0.4, 0, 0.2, 1] as const,
  spring: { type: 'spring' as const, stiffness: 300, damping: 30 },
} as const;

/**
 * Type representing available transition duration presets
 */
export type TransitionDuration = keyof typeof transitions;

/**
 * Type representing available easing curve presets
 */
export type EasingCurve = keyof typeof easings;
