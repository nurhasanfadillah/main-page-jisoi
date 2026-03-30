/**
 * Button Component
 * 
 * A flexible button component with multiple variants, sizes, and states.
 * Uses design tokens for consistent styling across the application.
 * 
 * @module design-system/components/Button
 */

import { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { cn } from '@/lib/utils';

/**
 * Variant-specific styles using design tokens
 * Maps button variants to their corresponding Tailwind classes
 */
const variantStyles = {
  primary: 'bg-gradient-to-r from-royal-600 to-cyan-600 text-white hover:shadow-xl hover:shadow-royal-500/20 border-0',
  secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/15',
  ghost: 'text-slate-300 hover:bg-white/5 hover:text-white border-0',
  outline: 'border border-slate-600 text-white hover:bg-white/5 bg-transparent',
};

/**
 * Size-specific styles using design tokens
 * Maps button sizes to their corresponding padding and text size classes
 */
const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

/**
 * Button component with support for variants, sizes, icons, and loading states
 * 
 * @example
 * ```tsx
 * // Primary button
 * <Button variant="primary">Click me</Button>
 * 
 * // Button with icon
 * <Button leftIcon={<Icon />}>Save</Button>
 * 
 * // Loading button
 * <Button isLoading>Processing...</Button>
 * 
 * // Full width button
 * <Button isFullWidth>Submit</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      leftIcon,
      rightIcon,
      isLoading = false,
      isFullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all',
          // Focus styles for accessibility
          'focus:outline-none focus:ring-2 focus:ring-royal-400 focus:ring-offset-2 focus:ring-offset-navy-900',
          // Disabled styles
          'disabled:opacity-50 disabled:cursor-not-allowed',
          // Variant styles
          variantStyles[variant],
          // Size styles
          sizeStyles[size],
          // Full width option
          isFullWidth && 'w-full',
          // Custom className
          className
        )}
        disabled={isLoading || disabled}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="animate-spin inline-block" aria-hidden="true">
              ⏳
            </span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
            {children}
            {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
