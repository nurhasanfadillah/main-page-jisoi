/**
 * Badge Component
 * 
 * A flexible badge component with multiple variants and sizes.
 * Uses design tokens for consistent styling across the application.
 * 
 * @module design-system/components/Badge
 */

import { forwardRef } from 'react';
import { BadgeProps } from './Badge.types';
import { cn } from '@/lib/utils';

/**
 * Variant-specific styles using design tokens
 * Maps badge variants to their corresponding Tailwind classes
 */
const variantStyles = {
  default: 'bg-slate-500/20 text-slate-300 border-slate-500/40',
  success: 'bg-green-500/20 text-green-300 border-green-500/40',
  warning: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
  error: 'bg-red-500/20 text-red-300 border-red-500/40',
  info: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
};

/**
 * Size-specific styles using design tokens
 * Maps badge sizes to their corresponding padding and text size classes
 */
const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

/**
 * Badge component with support for variants and sizes
 * 
 * @example
 * ```tsx
 * // Default badge
 * <Badge>Default</Badge>
 * 
 * // Success badge
 * <Badge variant="success">Success</Badge>
 * 
 * // Large warning badge
 * <Badge variant="warning" size="lg">Warning</Badge>
 * 
 * // Small error badge
 * <Badge variant="error" size="sm">Error</Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center font-medium rounded-full border',
          // Variant styles
          variantStyles[variant],
          // Size styles
          sizeStyles[size],
          // Custom className
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
