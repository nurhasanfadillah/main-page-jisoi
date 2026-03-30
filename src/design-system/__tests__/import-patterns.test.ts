/**
 * Import Patterns Test
 * 
 * Demonstrates and validates various import patterns for the design system.
 * This ensures requirement 2.8 (backward compatibility) is met.
 */

import { describe, it, expect } from 'vitest';

describe('Design System Import Patterns', () => {
  it('should support importing all exports from main entry point', async () => {
    const DesignSystem = await import('../index');
    
    // Components should be available
    expect(DesignSystem.Button).toBeDefined();
    expect(DesignSystem.Badge).toBeDefined();
    expect(DesignSystem.Card).toBeDefined();
    
    // Tokens should be available
    expect(DesignSystem.colors).toBeDefined();
    expect(DesignSystem.spacing).toBeDefined();
  });

  it('should support importing specific components', async () => {
    const { Button, Badge, Card } = await import('../index');
    
    expect(Button).toBeDefined();
    expect(Badge).toBeDefined();
    expect(Card).toBeDefined();
  });

  it('should support importing from components index', async () => {
    const { Button, Badge, Card } = await import('../components');
    
    expect(Button).toBeDefined();
    expect(Badge).toBeDefined();
    expect(Card).toBeDefined();
  });

  it('should support importing from individual component folders', async () => {
    const { Button } = await import('../components/Button');
    const { Badge } = await import('../components/Badge');
    const { Card } = await import('../components/Card');
    
    expect(Button).toBeDefined();
    expect(Badge).toBeDefined();
    expect(Card).toBeDefined();
  });

  it('should support importing types', async () => {
    const types = await import('../index');
    
    // Type imports should not throw errors
    expect(types).toBeDefined();
  });
});
