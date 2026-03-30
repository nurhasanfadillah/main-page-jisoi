/**
 * Property-based tests for Button component
 * 
 * These tests use fast-check to verify universal properties across all Button variants.
 * Each test runs 100 iterations with randomized inputs to ensure comprehensive coverage.
 */

import { describe, test, expect } from 'vitest';
import * as fc from 'fast-check';
import { render } from '@testing-library/react';
import { Button } from '../Button';
import type { ButtonVariant, ButtonSize } from '../Button.types';

/**
 * **Validates: Requirements 2.6**
 * 
 * Property 3: Component Variant Styling
 * 
 * For any component with variant support (Button, Card, Badge), specifying a valid variant
 * should apply the corresponding styles defined in the Design_Token_System.
 */
describe('Property 3: Component Variant Styling', () => {
  test('Button variant applies correct styles from Design_Token_System', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<ButtonVariant>('primary', 'secondary', 'ghost', 'outline'),
        (variant) => {
          const { container } = render(<Button variant={variant}>Test Button</Button>);
          const button = container.firstChild as HTMLElement;
          
          // Verify button element exists
          expect(button).toBeDefined();
          expect(button.tagName).toBe('BUTTON');
          
          // Define expected classes for each variant based on Design_Token_System
          const variantClassMap: Record<ButtonVariant, string[]> = {
            primary: ['bg-gradient-to-r', 'from-royal-600', 'to-cyan-600', 'text-white'],
            secondary: ['bg-white/10', 'text-white', 'border', 'border-white/20'],
            ghost: ['text-slate-300', 'hover:bg-white/5', 'hover:text-white'],
            outline: ['border', 'border-slate-600', 'text-white', 'hover:bg-white/5', 'bg-transparent'],
          };
          
          // Verify that the variant-specific classes are applied
          const expectedClasses = variantClassMap[variant];
          expectedClasses.forEach(className => {
            expect(button).toHaveClass(className);
          });
          
          // Verify base classes are always present regardless of variant
          expect(button).toHaveClass('inline-flex', 'items-center', 'justify-center');
          expect(button).toHaveClass('font-semibold', 'rounded-2xl', 'transition-all');
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Button variant styling is consistent across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<ButtonVariant>('primary', 'secondary', 'ghost', 'outline'),
        (variant) => {
          // Render the same variant twice
          const { container: container1 } = render(<Button variant={variant}>Test 1</Button>);
          const { container: container2 } = render(<Button variant={variant}>Test 2</Button>);
          
          const button1 = container1.firstChild as HTMLElement;
          const button2 = container2.firstChild as HTMLElement;
          
          // Both buttons should have the same className (consistent styling)
          expect(button1.className).toBe(button2.className);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Button variant and size combinations apply correct styles', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<ButtonVariant>('primary', 'secondary', 'ghost', 'outline'),
        fc.constantFrom<ButtonSize>('sm', 'md', 'lg'),
        (variant, size) => {
          const { container } = render(
            <Button variant={variant} size={size}>
              Test Button
            </Button>
          );
          const button = container.firstChild as HTMLElement;
          
          // Define expected size classes
          const sizeClassMap: Record<ButtonSize, string[]> = {
            sm: ['px-4', 'py-2', 'text-sm'],
            md: ['px-6', 'py-3', 'text-base'],
            lg: ['px-8', 'py-4', 'text-lg'],
          };
          
          // Verify size classes are applied
          const expectedSizeClasses = sizeClassMap[size];
          expectedSizeClasses.forEach(className => {
            expect(button).toHaveClass(className);
          });
          
          // Define expected variant classes
          const variantClassMap: Record<ButtonVariant, string[]> = {
            primary: ['bg-gradient-to-r', 'from-royal-600', 'to-cyan-600'],
            secondary: ['bg-white/10', 'border-white/20'],
            ghost: ['text-slate-300', 'hover:bg-white/5'],
            outline: ['border-slate-600', 'bg-transparent'],
          };
          
          // Verify variant classes are applied
          const expectedVariantClasses = variantClassMap[variant];
          expectedVariantClasses.forEach(className => {
            expect(button).toHaveClass(className);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Button variant does not affect non-styling props', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<ButtonVariant>('primary', 'secondary', 'ghost', 'outline'),
        fc.boolean(),
        fc.boolean(),
        (variant, isLoading, isFullWidth) => {
          const { container } = render(
            <Button variant={variant} isLoading={isLoading} isFullWidth={isFullWidth}>
              Test Button
            </Button>
          );
          const button = container.firstChild as HTMLElement;
          
          // Verify loading state is correctly applied regardless of variant
          if (isLoading) {
            expect(button).toHaveAttribute('aria-busy', 'true');
            expect(button).toBeDisabled();
          }
          
          // Verify full width is correctly applied regardless of variant
          if (isFullWidth) {
            expect(button).toHaveClass('w-full');
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Button variant styles do not conflict with disabled state', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<ButtonVariant>('primary', 'secondary', 'ghost', 'outline'),
        (variant) => {
          const { container } = render(
            <Button variant={variant} disabled>
              Disabled Button
            </Button>
          );
          const button = container.firstChild as HTMLElement;
          
          // Verify disabled state is applied
          expect(button).toBeDisabled();
          expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed');
          
          // Verify variant classes are still present
          const variantClassMap: Record<ButtonVariant, string[]> = {
            primary: ['from-royal-600', 'to-cyan-600'],
            secondary: ['bg-white/10'],
            ghost: ['text-slate-300'],
            outline: ['border-slate-600'],
          };
          
          const expectedClasses = variantClassMap[variant];
          expectedClasses.forEach(className => {
            expect(button).toHaveClass(className);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
