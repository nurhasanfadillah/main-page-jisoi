/**
 * Animation System
 * 
 * Provides standardized animation presets using Framer Motion variants.
 * These presets ensure consistent micro-interactions across the application.
 * 
 * @module animations
 */

export {
  fadeIn,
  slideInFromTop,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  scaleIn,
  staggerContainer,
} from './presets';

export { transitions, easings } from './transitions';

export type { AnimationPreset, AnimationPresetName } from './types';
export type { TransitionDuration, EasingCurve } from './transitions';
