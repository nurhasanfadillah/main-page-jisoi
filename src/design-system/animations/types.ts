import { Variants } from 'framer-motion';

/**
 * Type definition for animation presets
 * All animation presets must have at least 'hidden' and 'visible' states
 */
export type AnimationPreset = Variants & {
  hidden: Record<string, any>;
  visible: Record<string, any>;
};

/**
 * Available animation preset names
 */
export type AnimationPresetName =
  | 'fadeIn'
  | 'slideInFromTop'
  | 'slideInFromBottom'
  | 'slideInFromLeft'
  | 'slideInFromRight'
  | 'scaleIn'
  | 'staggerContainer';
