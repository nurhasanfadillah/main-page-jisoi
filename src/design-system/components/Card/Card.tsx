/**
 * Card Component
 * 
 * A flexible card component with multiple variants and optional hover effects.
 * Uses design tokens for consistent styling across the application.
 * Supports glass morphism effects for modern UI aesthetics.
 * 
 * @module design-system/components/Card
 */

import { forwardRef } from 'react';
import { CardProps } from './Card.types';
import { cn } from '@/lib/utils';

/**
 * Variant-specific styles using design tokens
 * Maps card variants to their corresponding Tailwind classes
 * 
 * - glass: Subtle glass morphism with light backdrop blur
 * - glassStrong: Enhanced glass morphism with stronger backdrop blur
 * - solid: Opaque card with solid background
 */
const variantStyles = {
  glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
  glassStrong: 'bg-white/10 backdrop-blur-2xl border border-white/20',
  solid: 'bg-navy-800 border border-slate-700',
};

/**
 * Card component with support for variants and hover effects
 * 
 * @example
 * ```tsx
 * // Glass card (default)
 * <Card>Content</Card>
 * 
 * // Strong glass card with hover effect
 * <Card variant="glassStrong" hover>
 *   Interactive content
 * </Card>
 * 
 * // Solid card
 * <Card variant="solid">
 *   Opaque content
 * </Card>
 * ```
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'glass',
      children,
      hover = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-2xl transition-all',
          // Variant styles
          variantStyles[variant],
          // Hover effects
          hover && 'hover:bg-white/10 hover:scale-[1.02]',
          // Custom className
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
