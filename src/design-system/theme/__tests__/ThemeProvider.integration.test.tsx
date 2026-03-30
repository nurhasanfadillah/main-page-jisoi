import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import { ThemeProvider, useTheme } from '../index';

/**
 * Integration tests for ThemeProvider
 * 
 * **Validates: Requirements 3.2, 3.4, 3.5, 3.6, 3.7, 3.8**
 */

function ThemeDisplay() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div data-testid="theme-name">{theme}</div>
      <div data-testid="bg-color" style={{ backgroundColor: 'var(--color-background)' }}>
        Background
      </div>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} data-testid="toggle">
        Toggle Theme
      </button>
    </div>
  );
}

describe('ThemeProvider Integration Tests', () => {
  let localStorageMock: { [key: string]: string };

  beforeEach(() => {
    localStorageMock = {};
    global.localStorage = {
      getItem: vi.fn((key: string) => localStorageMock[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        localStorageMock[key] = value;
      }),
      removeItem: vi.fn(),
      clear: vi.fn(),
      length: 0,
      key: vi.fn(),
    } as Storage;

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it('should provide React Context for theme state (Requirement 3.2)', async () => {
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('theme-name')).toBeInTheDocument();
    });
  });

  it('should update all design token values when theme is switched (Requirement 3.4)', async () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeDisplay />
      </ThemeProvider>
    );

    await waitFor(() => {
      const root = document.documentElement;
      expect(root.style.getPropertyValue('--color-background')).toBe('#0A1628');
      expect(root.style.getPropertyValue('--color-foreground')).toBe('#F1F5F9');
    });

    act(() => {
      screen.getByTestId('toggle').click();
    });

    await waitFor(() => {
      const root = document.documentElement;
      expect(root.style.getPropertyValue('--color-background')).toBe('#FFFFFF');
      expect(root.style.getPropertyValue('--color-foreground')).toBe('#0F172A');
    });
  });

  it('should persist theme preference in localStorage (Requirement 3.5)', async () => {
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('theme-name')).toBeInTheDocument();
    });

    act(() => {
      screen.getByTestId('toggle').click();
    });

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith('theme', expect.any(String));
    });
  });

  it('should restore saved theme preference from localStorage on page load (Requirement 3.6)', async () => {
    localStorageMock['theme'] = 'light';

    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeDisplay />
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('theme-name')).toHaveTextContent('light');
    });
  });

  it('should respect system preference when no saved preference exists (Requirement 3.7)', async () => {
    // Mock prefers-color-scheme: light
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === '(prefers-color-scheme: light)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('theme-name')).toHaveTextContent('light');
    });
  });

  it('should apply theme changes without page reload using CSS custom properties (Requirement 3.8)', async () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeDisplay />
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('theme-name')).toHaveTextContent('dark');
    });

    const initialBgColor = document.documentElement.style.getPropertyValue('--color-background');
    expect(initialBgColor).toBe('#0A1628');

    // Toggle theme
    act(() => {
      screen.getByTestId('toggle').click();
    });

    await waitFor(() => {
      expect(screen.getByTestId('theme-name')).toHaveTextContent('light');
      const newBgColor = document.documentElement.style.getPropertyValue('--color-background');
      expect(newBgColor).toBe('#FFFFFF');
      expect(newBgColor).not.toBe(initialBgColor);
    });

    // Verify no page reload occurred (component still mounted)
    expect(screen.getByTestId('theme-name')).toBeInTheDocument();
  });

  it('should support at least two themes (dark and light) (Requirement 3.1)', async () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeDisplay />
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('theme-name')).toHaveTextContent('dark');
    });

    act(() => {
      screen.getByTestId('toggle').click();
    });

    await waitFor(() => {
      expect(screen.getByTestId('theme-name')).toHaveTextContent('light');
    });

    act(() => {
      screen.getByTestId('toggle').click();
    });

    await waitFor(() => {
      expect(screen.getByTestId('theme-name')).toHaveTextContent('dark');
    });
  });
});
