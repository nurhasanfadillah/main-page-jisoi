/**
 * Button component type definitions
 * 
 * Defines TypeScript interfaces and types for the Button component,
 * including variants, sizes, and props.
 * 
 * @module design-system/components/Button
 */

import { ButtonHTMLAttributes } from 'react';

/**
 * Available button visual variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

/**
 * Available button size options
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button component props
 * Extends native HTML button attributes with design system specific props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Size of the button
   * @default 'md'
   */
  size?: ButtonSize;
  
  /**
   * Button content
   */
  children: React.ReactNode;
  
  /**
   * Optional icon to display on the left side of the button text
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Optional icon to display on the right side of the button text
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Whether the button is in a loading state
   * When true, displays a spinner and disables the button
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Whether the button should take up the full width of its container
   * @default false
   */
  isFullWidth?: boolean;
}
