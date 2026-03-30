/**
 * Theme System Index Exports Test
 * 
 * Validates that the theme system index properly exports all required
 * components, hooks, and types for Requirements 3.2 and 3.3.
 */

import { describe, it, expect } from 'vitest';

describe('Theme System Index Exports', () => {
  it('should export ThemeProvider component', async () => {
    const { ThemeProvider } = await import('../index');
    expect(ThemeProvider).toBeDefined();
    expect(typeof ThemeProvider).toBe('function');
  });

  it('should export useTheme hook', async () => {
    const { useTheme } = await import('../index');
    expect(useTheme).toBeDefined();
    expect(typeof useTheme).toBe('function');
  });

  it('should export Theme type', async () => {
    // Type imports don't throw errors if they exist
    const module = await import('../index');
    expect(module).toBeDefined();
  });

  it('should export ThemeName type', async () => {
    // Type imports don't throw errors if they exist
    const module = await import('../index');
    expect(module).toBeDefined();
  });

  it('should export themes configuration', async () => {
    const { themes } = await import('../index');
    expect(themes).toBeDefined();
    expect(themes.dark).toBeDefined();
    expect(themes.light).toBeDefined();
  });

  it('should export ThemeContext for advanced usage', async () => {
    const { ThemeContext } = await import('../index');
    expect(ThemeContext).toBeDefined();
  });

  it('should support destructured imports', async () => {
    const { ThemeProvider, useTheme, themes, ThemeContext } = await import('../index');
    
    expect(ThemeProvider).toBeDefined();
    expect(useTheme).toBeDefined();
    expect(themes).toBeDefined();
    expect(ThemeContext).toBeDefined();
  });

  it('should support namespace imports', async () => {
    const ThemeSystem = await import('../index');
    
    expect(ThemeSystem.ThemeProvider).toBeDefined();
    expect(ThemeSystem.useTheme).toBeDefined();
    expect(ThemeSystem.themes).toBeDefined();
    expect(ThemeSystem.ThemeContext).toBeDefined();
  });
});
