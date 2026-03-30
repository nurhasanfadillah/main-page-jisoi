import { describe, it, expect } from 'vitest';
import { themes, type Theme, type ThemeName } from '../themes';

describe('Theme Configuration', () => {
  it('should export dark and light themes', () => {
    expect(themes.dark).toBeDefined();
    expect(themes.light).toBeDefined();
  });

  it('should have correct structure for dark theme', () => {
    expect(themes.dark.name).toBe('dark');
    expect(themes.dark.colors).toBeDefined();
    expect(themes.dark.colors.background).toBe('#0A1628');
    expect(themes.dark.colors.foreground).toBe('#F1F5F9');
    expect(themes.dark.colors.primary).toBe('#4F46E5');
    expect(themes.dark.colors.secondary).toBe('#0891B2');
    expect(themes.dark.colors.accent).toBe('#22D3EE');
    expect(themes.dark.colors.muted).toBe('#64748B');
  });

  it('should have correct structure for light theme', () => {
    expect(themes.light.name).toBe('light');
    expect(themes.light.colors).toBeDefined();
    expect(themes.light.colors.background).toBe('#FFFFFF');
    expect(themes.light.colors.foreground).toBe('#0F172A');
    expect(themes.light.colors.primary).toBe('#4F46E5');
    expect(themes.light.colors.secondary).toBe('#0891B2');
    expect(themes.light.colors.accent).toBe('#22D3EE');
    expect(themes.light.colors.muted).toBe('#94A3B8');
  });

  it('should have all required color properties', () => {
    const requiredColors = ['background', 'foreground', 'primary', 'secondary', 'accent', 'muted'];
    
    requiredColors.forEach(color => {
      expect(themes.dark.colors).toHaveProperty(color);
      expect(themes.light.colors).toHaveProperty(color);
    });
  });

  it('should have valid hex color values', () => {
    const hexColorRegex = /^#[0-9A-F]{6}$/i;
    
    Object.values(themes.dark.colors).forEach(color => {
      expect(color).toMatch(hexColorRegex);
    });
    
    Object.values(themes.light.colors).forEach(color => {
      expect(color).toMatch(hexColorRegex);
    });
  });

  it('should support ThemeName type', () => {
    const darkTheme: ThemeName = 'dark';
    const lightTheme: ThemeName = 'light';
    
    expect(themes[darkTheme]).toBeDefined();
    expect(themes[lightTheme]).toBeDefined();
  });

  it('should support Theme interface', () => {
    const darkTheme: Theme = themes.dark;
    const lightTheme: Theme = themes.light;
    
    expect(darkTheme.name).toBe('dark');
    expect(lightTheme.name).toBe('light');
  });
});
