/**
 * Card component type definitions
 * 
 * Defines TypeScript interfaces and types for the Card component,
 * including variants and props.
 * 
 * @module design-system/components/Card
 */

import { HTMLAttributes } from 'react';

/**
 * Available card visual variants
 */
export type CardVariant = 'glass' | 'glassStrong' | 'solid';

/**
 * Card component props
 * Extends native HTML div attributes with design system specific props
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant of the card
   * @default 'glass'
   */
  variant?: CardVariant;
  
  /**
   * Card content
   */
  children?: React.ReactNode;
  
  /**
   * Whether the card should have hover effects
   * When true, applies scale and background transitions on hover
   * @default false
   */
  hover?: boolean;
}
