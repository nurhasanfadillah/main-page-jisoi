/**
 * Card Component Unit Tests
 * 
 * Tests for the Card component covering variants, hover effects, and accessibility.
 * 
 * **Validates: Requirements 2.2, 2.5**
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card Component', () => {
  describe('Rendering', () => {
    it('renders with children content', () => {
      render(<Card data-testid="card">Card content</Card>);
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders with default variant (glass)', () => {
      render(<Card data-testid="card">Glass card</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-white/5', 'backdrop-blur-xl', 'border-white/10');
    });

    it('renders without hover effects by default', () => {
      render(<Card data-testid="card">No hover</Card>);
      const card = screen.getByTestId('card');
      expect(card).not.toHaveClass('hover:bg-white/10', 'hover:scale-[1.02]');
    });
  });

  describe('Variants', () => {
    it('renders glass variant correctly', () => {
      render(<Card variant="glass" data-testid="card">Glass</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-white/5', 'backdrop-blur-xl', 'border', 'border-white/10');
    });

    it('renders glassStrong variant correctly', () => {
      render(<Card variant="glassStrong" data-testid="card">Strong Glass</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-white/10', 'backdrop-blur-2xl', 'border', 'border-white/20');
    });

    it('renders solid variant correctly', () => {
      render(<Card variant="solid" data-testid="card">Solid</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-navy-800', 'border', 'border-slate-700');
    });
  });

  describe('Hover Effects', () => {
    it('applies hover effects when hover prop is true', () => {
      render(<Card hover data-testid="card">Hoverable</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('hover:bg-white/10', 'hover:scale-[1.02]');
    });

    it('does not apply hover effects when hover prop is false', () => {
      render(<Card hover={false} data-testid="card">Not hoverable</Card>);
      const card = screen.getByTestId('card');
      expect(card).not.toHaveClass('hover:bg-white/10', 'hover:scale-[1.02]');
    });

    it('applies hover effects with glass variant', () => {
      render(<Card variant="glass" hover data-testid="card">Glass with hover</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-white/5', 'hover:bg-white/10', 'hover:scale-[1.02]');
    });

    it('applies hover effects with glassStrong variant', () => {
      render(<Card variant="glassStrong" hover data-testid="card">Strong glass with hover</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-white/10', 'hover:bg-white/10', 'hover:scale-[1.02]');
    });

    it('applies hover effects with solid variant', () => {
      render(<Card variant="solid" hover data-testid="card">Solid with hover</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('bg-navy-800', 'hover:bg-white/10', 'hover:scale-[1.02]');
    });
  });

  describe('Base Styles', () => {
    it('applies rounded corners', () => {
      render(<Card data-testid="card">Rounded</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('rounded-2xl');
    });

    it('applies transition effects', () => {
      render(<Card data-testid="card">Transition</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('transition-all');
    });
  });

  describe('Accessibility', () => {
    it('forwards ref correctly', () => {
      const ref = vi.fn();
      render(<Card ref={ref}>Ref Card</Card>);
      expect(ref).toHaveBeenCalled();
    });

    it('passes through native div attributes', () => {
      const handleClick = vi.fn();
      render(
        <Card onClick={handleClick} role="article" aria-label="Card content" data-testid="card">
          Accessible Card
        </Card>
      );
      const card = screen.getByTestId('card');
      expect(card).toHaveAttribute('role', 'article');
      expect(card).toHaveAttribute('aria-label', 'Card content');
    });

    it('handles click events correctly', () => {
      const handleClick = vi.fn();
      render(<Card onClick={handleClick} data-testid="card">Clickable</Card>);
      const card = screen.getByTestId('card');
      card.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Custom ClassName', () => {
    it('merges custom className with default classes', () => {
      render(<Card className="custom-class" data-testid="card">Custom</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('custom-class');
      expect(card).toHaveClass('rounded-2xl'); // Still has base classes
    });

    it('preserves custom className with variant', () => {
      render(<Card variant="solid" className="p-8" data-testid="card">Custom padding</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('p-8', 'bg-navy-800');
    });
  });

  describe('Edge Cases', () => {
    it('renders with complex children', () => {
      render(
        <Card>
          <h2>Title</h2>
          <p>Description</p>
          <button>Action</button>
        </Card>
      );
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });

    it('renders with all props combined', () => {
      const handleClick = vi.fn();
      render(
        <Card
          variant="glassStrong"
          hover
          onClick={handleClick}
          className="custom-class p-6"
          data-testid="complex-card"
        >
          Complex Card
        </Card>
      );
      const card = screen.getByTestId('complex-card');
      expect(card).toHaveClass(
        'bg-white/10',
        'backdrop-blur-2xl',
        'hover:bg-white/10',
        'hover:scale-[1.02]',
        'custom-class',
        'p-6'
      );
      card.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders empty card', () => {
      render(<Card data-testid="empty-card"></Card>);
      const card = screen.getByTestId('empty-card');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('rounded-2xl');
    });

    it('handles nested cards', () => {
      render(
        <Card variant="solid" data-testid="outer">
          <Card variant="glass" data-testid="inner">
            Nested content
          </Card>
        </Card>
      );
      const outer = screen.getByTestId('outer');
      const inner = screen.getByTestId('inner');
      expect(outer).toHaveClass('bg-navy-800');
      expect(inner).toHaveClass('bg-white/5');
    });
  });

  describe('Design Token Usage', () => {
    it('uses design tokens for glass variant', () => {
      render(<Card variant="glass" data-testid="card">Token test</Card>);
      const card = screen.getByTestId('card');
      // Validates that design tokens are applied (bg-white/5, backdrop-blur-xl, border-white/10)
      expect(card).toHaveClass('bg-white/5', 'backdrop-blur-xl', 'border-white/10');
    });

    it('uses design tokens for glassStrong variant', () => {
      render(<Card variant="glassStrong" data-testid="card">Token test</Card>);
      const card = screen.getByTestId('card');
      // Validates that design tokens are applied (bg-white/10, backdrop-blur-2xl, border-white/20)
      expect(card).toHaveClass('bg-white/10', 'backdrop-blur-2xl', 'border-white/20');
    });

    it('uses design tokens for solid variant', () => {
      render(<Card variant="solid" data-testid="card">Token test</Card>);
      const card = screen.getByTestId('card');
      // Validates that design tokens are applied (bg-navy-800, border-slate-700)
      expect(card).toHaveClass('bg-navy-800', 'border-slate-700');
    });
  });
});
