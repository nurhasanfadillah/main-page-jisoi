/**
 * Badge component type definitions
 * 
 * Defines TypeScript interfaces and types for the Badge component,
 * including variants, sizes, and props.
 * 
 * @module design-system/components/Badge
 */

import { HTMLAttributes } from 'react';

/**
 * Available badge visual variants
 */
export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

/**
 * Available badge size options
 */
export type BadgeSize = 'sm' | 'md' | 'lg';

/**
 * Badge component props
 * Extends native HTML span attributes with design system specific props
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual variant of the badge
   * @default 'default'
   */
  variant?: BadgeVariant;
  
  /**
   * Size of the badge
   * @default 'md'
   */
  size?: BadgeSize;
  
  /**
   * Badge content
   */
  children: React.ReactNode;
}
