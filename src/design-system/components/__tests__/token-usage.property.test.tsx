/**
 * Property-based tests for Component Token Usage
 * 
 * These tests use fast-check to verify that all components in the Component_Library
 * reference Design_Token values rather than hardcoded style values.
 * Each test runs 100 iterations with randomized inputs to ensure comprehensive coverage.
 */

import { describe, test, expect } from 'vitest';
import * as fc from 'fast-check';
import { render } from '@testing-library/react';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Badge } from '../Badge/Badge';
import type { ButtonVariant, ButtonSize } from '../Button/Button.types';
import type { CardVariant } from '../Card/Card.types';
import type { BadgeVariant, BadgeSize } from '../Badge/Badge.types';

/**
 * **Validates: Requirements 2.5**
 * 
 * Property 4: Component Token Usage
 * 
 * For any component in the Component_Library, the component should reference Design_Token
 * values (via CSS custom properties or token constants) rather than hardcoded style values.
 */
describe('Property 4: Component Token Usage', () => {
  /**
   * Helper function to check if a className contains design token references
   * Design tokens are referenced via Tailwind utility classes that map to our token system
   */
  const hasDesignTokenReferences = (className: string): boolean => {
    // Token patterns we expect to see (Tailwind classes that reference our design tokens)
    const tokenPatterns = [
      // Color tokens (navy, royal, cyan palettes)
      /\b(navy|royal|cyan|slate|green|yellow|red|white)-\d{2,3}\b/,
      // Spacing tokens (px, py, gap, etc.)
      /\b(p|m|gap|space)-\d+\b/,
      // Typography tokens (text size, font weight)
      /\btext-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)\b/,
      /\bfont-(light|normal|medium|semibold|bold|extrabold|black)\b/,
      // Border radius tokens
      /\brounded-(sm|md|lg|xl|2xl|full)\b/,
      // Shadow tokens
      /\bshadow-(sm|md|lg|xl|2xl)\b/,
      // Glass effect tokens (backdrop blur, opacity)
      /\bbackdrop-blur-(xl|2xl)\b/,
      /\bbg-white\/\d+\b/,
      /\bborder-white\/\d+\b/,
    ];

    return tokenPatterns.some(pattern => pattern.test(className));
  };

  /**
   * Helper function to check for hardcoded values that should be avoided
   */
  const hasHardcodedValues = (className: string): boolean => {
    // Patterns that indicate hardcoded values (not using design tokens)
    const hardcodedPatterns = [
      // Arbitrary values in square brackets (e.g., [#FF0000], [12px])
      /\[#[0-9A-Fa-f]{3,6}\]/, // Hex colors
      /\[\d+px\]/, // Pixel values
      /\[\d+rem\]/, // Rem values
      /\[\d+em\]/, // Em values
    ];

    return hardcodedPatterns.some(pattern => pattern.test(className));
  };

  test('Button component uses design tokens for all variants', () => {
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
          const className = button.className;

          // Verify component uses design token references
          expect(hasDesignTokenReferences(className)).toBe(true);

          // Verify component does not use hardcoded values
          expect(hasHardcodedValues(className)).toBe(false);

          // Verify specific token usage patterns for Button
          // Color tokens (royal, cyan, slate, white)
          expect(className).toMatch(/(royal|cyan|slate|white)-\d{2,3}/);

          // Spacing tokens (padding)
          expect(className).toMatch(/p[xy]-\d+/);

          // Typography tokens (text size, font weight)
          expect(className).toMatch(/text-(sm|base|lg)/);
          expect(className).toMatch(/font-semibold/);

          // Border radius tokens
          expect(className).toMatch(/rounded-2xl/);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Card component uses design tokens for all variants', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<CardVariant>('glass', 'glassStrong', 'solid'),
        fc.boolean(),
        (variant, hover) => {
          const { container } = render(
            <Card variant={variant} hover={hover}>
              Test Card
            </Card>
          );
          const card = container.firstChild as HTMLElement;
          const className = card.className;

          // Verify component uses design token references
          expect(hasDesignTokenReferences(className)).toBe(true);

          // Verify component does not use hardcoded values
          expect(hasHardcodedValues(className)).toBe(false);

          // Verify specific token usage patterns for Card
          // Glass effect tokens (backdrop blur, opacity)
          if (variant === 'glass' || variant === 'glassStrong') {
            expect(className).toMatch(/backdrop-blur-(xl|2xl)/);
            expect(className).toMatch(/bg-white\/\d+/);
            expect(className).toMatch(/border-white\/\d+/);
          }

          // Color tokens for solid variant
          if (variant === 'solid') {
            expect(className).toMatch(/(navy|slate)-\d{3}/);
          }

          // Border radius tokens
          expect(className).toMatch(/rounded-2xl/);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Badge component uses design tokens for all variants', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<BadgeVariant>('default', 'success', 'warning', 'error', 'info'),
        fc.constantFrom<BadgeSize>('sm', 'md', 'lg'),
        (variant, size) => {
          const { container } = render(
            <Badge variant={variant} size={size}>
              Test Badge
            </Badge>
          );
          const badge = container.firstChild as HTMLElement;
          const className = badge.className;

          // Verify component uses design token references
          expect(hasDesignTokenReferences(className)).toBe(true);

          // Verify component does not use hardcoded values
          expect(hasHardcodedValues(className)).toBe(false);

          // Verify specific token usage patterns for Badge
          // Color tokens (slate, green, yellow, red, cyan)
          expect(className).toMatch(/(slate|green|yellow|red|cyan)-\d{2,3}/);

          // Spacing tokens (padding)
          expect(className).toMatch(/p[xy]-\d+/);

          // Typography tokens (text size, font weight)
          expect(className).toMatch(/text-(xs|sm|base)/);
          expect(className).toMatch(/font-medium/);

          // Border radius tokens
          expect(className).toMatch(/rounded-full/);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('All components consistently use design tokens across renders', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<'Button' | 'Card' | 'Badge'>('Button', 'Card', 'Badge'),
        (componentName) => {
          let container1, container2;

          // Render the same component twice with default props
          if (componentName === 'Button') {
            container1 = render(<Button>Test 1</Button>).container;
            container2 = render(<Button>Test 2</Button>).container;
          } else if (componentName === 'Card') {
            container1 = render(<Card>Test 1</Card>).container;
            container2 = render(<Card>Test 2</Card>).container;
          } else {
            container1 = render(<Badge>Test 1</Badge>).container;
            container2 = render(<Badge>Test 2</Badge>).container;
          }

          const element1 = container1.firstChild as HTMLElement;
          const element2 = container2.firstChild as HTMLElement;

          // Both renders should use design tokens
          expect(hasDesignTokenReferences(element1.className)).toBe(true);
          expect(hasDesignTokenReferences(element2.className)).toBe(true);

          // Both renders should avoid hardcoded values
          expect(hasHardcodedValues(element1.className)).toBe(false);
          expect(hasHardcodedValues(element2.className)).toBe(false);

          // Both renders should have identical className (consistent token usage)
          expect(element1.className).toBe(element2.className);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Component variants use different design token values', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<'Button' | 'Badge'>('Button', 'Badge'),
        (componentName) => {
          let variant1Container, variant2Container;
          let variant1Name, variant2Name;

          // Render two different variants of the same component
          if (componentName === 'Button') {
            variant1Container = render(<Button variant="primary">Test</Button>).container;
            variant2Container = render(<Button variant="secondary">Test</Button>).container;
            variant1Name = 'primary';
            variant2Name = 'secondary';
          } else {
            variant1Container = render(<Badge variant="success">Test</Badge>).container;
            variant2Container = render(<Badge variant="error">Test</Badge>).container;
            variant1Name = 'success';
            variant2Name = 'error';
          }

          const element1 = variant1Container.firstChild as HTMLElement;
          const element2 = variant2Container.firstChild as HTMLElement;

          // Both variants should use design tokens
          expect(hasDesignTokenReferences(element1.className)).toBe(true);
          expect(hasDesignTokenReferences(element2.className)).toBe(true);

          // Both variants should avoid hardcoded values
          expect(hasHardcodedValues(element1.className)).toBe(false);
          expect(hasHardcodedValues(element2.className)).toBe(false);

          // Different variants should have different classNames (different token values)
          expect(element1.className).not.toBe(element2.className);

          // But they should share base token classes (spacing, typography, borders)
          const sharedTokenPatterns = [
            /\brounded-/,
            /\bfont-/,
            /\bp[xy]-/,
          ];

          sharedTokenPatterns.forEach(pattern => {
            const hasPattern1 = pattern.test(element1.className);
            const hasPattern2 = pattern.test(element2.className);
            // Both should have these base token patterns
            expect(hasPattern1).toBe(true);
            expect(hasPattern2).toBe(true);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Component size variants use design token spacing values', () => {
    fc.assert(
      fc.property(
        fc.constantFrom<'Button' | 'Badge'>('Button', 'Badge'),
        fc.constantFrom<ButtonSize | BadgeSize>('sm', 'md', 'lg'),
        (componentName, size) => {
          let container;

          // Render component with specified size
          if (componentName === 'Button') {
            container = render(<Button size={size as ButtonSize}>Test</Button>).container;
          } else {
            container = render(<Badge size={size as BadgeSize}>Test</Badge>).container;
          }

          const element = container.firstChild as HTMLElement;
          const className = element.className;

          // Verify component uses design token spacing
          expect(hasDesignTokenReferences(className)).toBe(true);

          // Verify spacing tokens are used (padding)
          expect(className).toMatch(/p[xy]-\d+/);

          // Verify typography tokens are used (text size)
          expect(className).toMatch(/text-(xs|sm|base|lg)/);

          // Verify no hardcoded spacing values
          expect(hasHardcodedValues(className)).toBe(false);

          // Verify size-specific token patterns
          const sizeTokenMap: Record<string, RegExp> = {
            sm: /text-(xs|sm)/,
            md: /text-(sm|base)/,
            lg: /text-(base|lg)/,
          };

          expect(className).toMatch(sizeTokenMap[size]);
        }
      ),
      { numRuns: 100 }
    );
  });
});
