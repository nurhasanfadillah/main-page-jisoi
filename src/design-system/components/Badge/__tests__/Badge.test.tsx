/**
 * Badge Component Unit Tests
 * 
 * Tests for the Badge component covering variants, sizes, and basic functionality.
 * 
 * **Validates: Requirements 2.3, 2.7**
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders with children', () => {
      render(<Badge>Test Badge</Badge>);
      expect(screen.getByText('Test Badge')).toBeInTheDocument();
    });

    it('renders as a span element', () => {
      render(<Badge>Test</Badge>);
      const badge = screen.getByText('Test');
      expect(badge.tagName).toBe('SPAN');
    });
  });

  describe('Variants', () => {
    it('renders default variant', () => {
      render(<Badge variant="default">Default</Badge>);
      const badge = screen.getByText('Default');
      expect(badge).toHaveClass('bg-slate-500/20', 'text-slate-300', 'border-slate-500/40');
    });

    it('renders success variant', () => {
      render(<Badge variant="success">Success</Badge>);
      const badge = screen.getByText('Success');
      expect(badge).toHaveClass('bg-green-500/20', 'text-green-300', 'border-green-500/40');
    });

    it('renders warning variant', () => {
      render(<Badge variant="warning">Warning</Badge>);
      const badge = screen.getByText('Warning');
      expect(badge).toHaveClass('bg-yellow-500/20', 'text-yellow-300', 'border-yellow-500/40');
    });

    it('renders error variant', () => {
      render(<Badge variant="error">Error</Badge>);
      const badge = screen.getByText('Error');
      expect(badge).toHaveClass('bg-red-500/20', 'text-red-300', 'border-red-500/40');
    });

    it('renders info variant', () => {
      render(<Badge variant="info">Info</Badge>);
      const badge = screen.getByText('Info');
      expect(badge).toHaveClass('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
    });

    it('uses default variant when not specified', () => {
      render(<Badge>No Variant</Badge>);
      const badge = screen.getByText('No Variant');
      expect(badge).toHaveClass('bg-slate-500/20', 'text-slate-300', 'border-slate-500/40');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Badge size="sm">Small</Badge>);
      const badge = screen.getByText('Small');
      expect(badge).toHaveClass('px-2', 'py-0.5', 'text-xs');
    });

    it('renders medium size', () => {
      render(<Badge size="md">Medium</Badge>);
      const badge = screen.getByText('Medium');
      expect(badge).toHaveClass('px-3', 'py-1', 'text-sm');
    });

    it('renders large size', () => {
      render(<Badge size="lg">Large</Badge>);
      const badge = screen.getByText('Large');
      expect(badge).toHaveClass('px-4', 'py-1.5', 'text-base');
    });

    it('uses medium size when not specified', () => {
      render(<Badge>No Size</Badge>);
      const badge = screen.getByText('No Size');
      expect(badge).toHaveClass('px-3', 'py-1', 'text-sm');
    });
  });

  describe('Base Styles', () => {
    it('applies base styles', () => {
      render(<Badge>Base Styles</Badge>);
      const badge = screen.getByText('Base Styles');
      expect(badge).toHaveClass('inline-flex', 'items-center', 'font-medium', 'rounded-full', 'border');
    });
  });

  describe('Custom Props', () => {
    it('accepts custom className', () => {
      render(<Badge className="custom-class">Custom</Badge>);
      const badge = screen.getByText('Custom');
      expect(badge).toHaveClass('custom-class');
    });

    it('forwards additional props', () => {
      render(<Badge data-testid="custom-badge">Props</Badge>);
      expect(screen.getByTestId('custom-badge')).toBeInTheDocument();
    });

    it('supports onClick handler', () => {
      let clicked = false;
      render(<Badge onClick={() => { clicked = true; }}>Clickable</Badge>);
      const badge = screen.getByText('Clickable');
      badge.click();
      expect(clicked).toBe(true);
    });
  });

  describe('Combined Props', () => {
    it('combines variant and size correctly', () => {
      render(<Badge variant="success" size="lg">Large Success</Badge>);
      const badge = screen.getByText('Large Success');
      expect(badge).toHaveClass('bg-green-500/20', 'text-green-300', 'border-green-500/40');
      expect(badge).toHaveClass('px-4', 'py-1.5', 'text-base');
    });

    it('combines all props correctly', () => {
      render(
        <Badge variant="error" size="sm" className="extra-class" data-testid="combo">
          Combo
        </Badge>
      );
      const badge = screen.getByTestId('combo');
      expect(badge).toHaveClass('bg-red-500/20', 'text-red-300', 'border-red-500/40');
      expect(badge).toHaveClass('px-2', 'py-0.5', 'text-xs');
      expect(badge).toHaveClass('extra-class');
    });
  });

  describe('Accessibility', () => {
    it('forwards ref correctly', () => {
      const ref = vi.fn();
      render(<Badge ref={ref}>Ref Badge</Badge>);
      expect(ref).toHaveBeenCalled();
    });

    it('passes through native span attributes', () => {
      render(
        <Badge role="status" aria-label="Status badge" title="Badge title">
          Status
        </Badge>
      );
      const badge = screen.getByText('Status');
      expect(badge).toHaveAttribute('role', 'status');
      expect(badge).toHaveAttribute('aria-label', 'Status badge');
      expect(badge).toHaveAttribute('title', 'Badge title');
    });

    it('supports aria-live for dynamic content', () => {
      render(<Badge aria-live="polite">Live Update</Badge>);
      const badge = screen.getByText('Live Update');
      expect(badge).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Content Rendering', () => {
    it('renders text content', () => {
      render(<Badge>Simple Text</Badge>);
      expect(screen.getByText('Simple Text')).toBeInTheDocument();
    });

    it('renders numeric content', () => {
      render(<Badge>{42}</Badge>);
      expect(screen.getByText('42')).toBeInTheDocument();
    });

    it('renders with icon and text', () => {
      render(
        <Badge>
          <span data-testid="icon">✓</span>
          <span>Success</span>
        </Badge>
      );
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Success')).toBeInTheDocument();
    });

    it('renders complex nested content', () => {
      render(
        <Badge>
          <div data-testid="complex">
            <span>Count: </span>
            <strong>5</strong>
          </div>
        </Badge>
      );
      expect(screen.getByTestId('complex')).toBeInTheDocument();
      expect(screen.getByText('Count:')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('renders with single character', () => {
      render(<Badge>A</Badge>);
      expect(screen.getByText('A')).toBeInTheDocument();
    });

    it('renders with long text content', () => {
      const longText = 'This is a very long badge text that might wrap';
      render(<Badge>{longText}</Badge>);
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('renders with zero as content', () => {
      render(<Badge>{0}</Badge>);
      expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('renders with empty string (edge case)', () => {
      render(<Badge>{''}</Badge>);
      const badge = screen.getByText('', { selector: 'span' });
      expect(badge).toBeInTheDocument();
    });

    it('maintains styles with all variants and sizes combined', () => {
      const variants: Array<'default' | 'success' | 'warning' | 'error' | 'info'> = [
        'default', 'success', 'warning', 'error', 'info'
      ];
      const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

      variants.forEach(variant => {
        sizes.forEach(size => {
          const { container } = render(
            <Badge variant={variant} size={size}>
              {variant}-{size}
            </Badge>
          );
          const badge = container.querySelector('span');
          expect(badge).toHaveClass('inline-flex', 'items-center', 'font-medium', 'rounded-full', 'border');
        });
      });
    });
  });
});
