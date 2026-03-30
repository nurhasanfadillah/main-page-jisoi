import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { act } from 'react';
import * as fc from 'fast-check';
import { ThemeProvider, useTheme } from '../index';
import { themes, ThemeName } from '../themes';

/**
 * Property-based tests for ThemeProvider
 * 
 * **Validates: Requirements 3.4**
 */

function ThemeTestComponent() {
  const { setTheme } = useTheme();
  return <div data-testid="theme-component">{setTheme.toString()}</div>;
}

describe('ThemeProvider Property Tests', () => {
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

  /**
   * Property 5: Theme Switching Updates Tokens
   * **Validates: Requirements 3.4**
   * 
   * For any theme in the theme system, switching to that theme updates
   * all CSS custom properties to match the theme's token values.
   */
  it('should update all CSS custom properties when switching to any theme', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...(Object.keys(themes) as ThemeName[])),
        async (themeName) => {
          const { unmount } = render(
            <ThemeProvider defaultTheme="dark">
              <ThemeTestComponent />
            </ThemeProvider>
          );

          await waitFor(() => {
            expect(document.querySelector('[data-testid="theme-component"]')).toBeInTheDocument();
          });

          // Get the setTheme function
          let setThemeFunc: ((theme: ThemeName) => void) | null = null;
          
          function ThemeCapture() {
            const { setTheme } = useTheme();
            setThemeFunc = setTheme;
            return null;
          }

          const { unmount: unmountCapture } = render(
            <ThemeProvider defaultTheme="dark">
              <ThemeCapture />
            </ThemeProvider>
          );

          await waitFor(() => {
            expect(setThemeFunc).not.toBeNull();
          });

          // Switch to the theme
          act(() => {
            setThemeFunc!(themeName);
          });

          // Wait for theme to be applied
          await waitFor(() => {
            const root = document.documentElement;
            const themeConfig = themes[themeName];

            // Verify all color tokens are updated
            Object.entries(themeConfig.colors).forEach(([key, expectedValue]) => {
              const actualValue = root.style.getPropertyValue(`--color-${key}`);
              expect(actualValue).toBe(expectedValue);
            });
          });

          unmount();
          unmountCapture();
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 6: Theme Switching Without Reload
   * **Validates: Requirements 3.8**
   * 
   * For any theme switch operation, the visual changes apply immediately
   * without requiring a page reload.
   */
  it('should apply theme changes immediately without page reload', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...(Object.keys(themes) as ThemeName[])),
        fc.constantFrom(...(Object.keys(themes) as ThemeName[])),
        async (initialTheme, targetTheme) => {
          // Clear localStorage and set up system preference for this iteration
          localStorageMock = {};
          
          // Mock system preference to match initial theme
          Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation((query: string) => ({
              matches: query === `(prefers-color-scheme: ${initialTheme})`,
              media: query,
              onchange: null,
              addListener: vi.fn(),
              removeListener: vi.fn(),
              addEventListener: vi.fn(),
              removeEventListener: vi.fn(),
              dispatchEvent: vi.fn(),
            })),
          });
          
          function ThemeCapture() {
            const { setTheme, theme } = useTheme();
            return (
              <div>
                <div data-testid="current-theme">{theme}</div>
                <button data-testid="switch-theme" onClick={() => setTheme(targetTheme)}>
                  Switch
                </button>
              </div>
            );
          }

          const { container, unmount } = render(
            <ThemeProvider defaultTheme={initialTheme}>
              <ThemeCapture />
            </ThemeProvider>
          );

          try {
            // Wait for initial theme to be applied
            await waitFor(() => {
              const themeElement = container.querySelector('[data-testid="current-theme"]');
              expect(themeElement).toBeInTheDocument();
              expect(themeElement?.textContent).toBe(initialTheme);
            });

            // Capture CSS properties before switch
            const root = document.documentElement;
            const beforeSwitch = Object.entries(themes[initialTheme].colors).map(([key]) => ({
              key,
              value: root.style.getPropertyValue(`--color-${key}`),
            }));

            // Record the time before switch
            const startTime = performance.now();

            // Switch to target theme
            const switchButton = container.querySelector('[data-testid="switch-theme"]') as HTMLButtonElement;
            act(() => {
              switchButton.click();
            });

            // Verify changes applied immediately without reload
            await waitFor(() => {
              // Verify theme state updated in the DOM
              const themeElement = container.querySelector('[data-testid="current-theme"]');
              expect(themeElement?.textContent).toBe(targetTheme);

              // Verify CSS properties updated immediately
              const themeConfig = themes[targetTheme];
              Object.entries(themeConfig.colors).forEach(([key, expectedValue]) => {
                const actualValue = root.style.getPropertyValue(`--color-${key}`);
                expect(actualValue).toBe(expectedValue);
              });

              // If themes are different, verify at least one CSS property changed
              if (initialTheme !== targetTheme) {
                const afterSwitch = Object.entries(themes[targetTheme].colors).map(([key]) => ({
                  key,
                  value: root.style.getPropertyValue(`--color-${key}`),
                }));

                const hasChanges = beforeSwitch.some((before, index) => {
                  const after = afterSwitch[index];
                  return before.value !== after.value;
                });

                expect(hasChanges).toBe(true);
              }
            });

            // Verify the change happened quickly (within 1 second)
            // A page reload would take much longer
            const endTime = performance.now();
            const duration = endTime - startTime;
            expect(duration).toBeLessThan(1000);

            // Verify the component is still mounted (no reload occurred)
            expect(container.querySelector('[data-testid="current-theme"]')).toBeInTheDocument();
          } finally {
            // Cleanup
            unmount();
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 7: Theme Persistence Round Trip
   * **Validates: Requirements 3.5, 3.6**
   * 
   * For any theme selection, saving the theme preference to localStorage
   * and then restoring it on page load results in the same theme being active.
   */
  it('should persist theme to localStorage and restore it on page load', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...(Object.keys(themes) as ThemeName[])),
        async (selectedTheme) => {
          // Clear localStorage before test
          localStorageMock = {};

          // Mock system preference (should be overridden by saved theme)
          const oppositeTheme = selectedTheme === 'dark' ? 'light' : 'dark';
          Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation((query: string) => ({
              matches: query === `(prefers-color-scheme: ${oppositeTheme})`,
              media: query,
              onchange: null,
              addListener: vi.fn(),
              removeListener: vi.fn(),
              addEventListener: vi.fn(),
              removeEventListener: vi.fn(),
              dispatchEvent: vi.fn(),
            })),
          });

          // Step 1: Set theme and save to localStorage
          function ThemeSelector() {
            const { setTheme, theme } = useTheme();
            return (
              <div>
                <div data-testid="current-theme">{theme}</div>
                <button data-testid="set-theme" onClick={() => setTheme(selectedTheme)}>
                  Set Theme
                </button>
              </div>
            );
          }

          const { container: container1, unmount: unmount1 } = render(
            <ThemeProvider defaultTheme={oppositeTheme}>
              <ThemeSelector />
            </ThemeProvider>
          );

          try {
            // Wait for initial mount
            await waitFor(() => {
              expect(container1.querySelector('[data-testid="current-theme"]')).toBeInTheDocument();
            }, { timeout: 3000 });

            // Set the theme
            const setButton = container1.querySelector('[data-testid="set-theme"]') as HTMLButtonElement;
            act(() => {
              setButton.click();
            });

            // Wait for theme to be applied and saved
            await waitFor(() => {
              const themeElement = container1.querySelector('[data-testid="current-theme"]');
              expect(themeElement?.textContent).toBe(selectedTheme);
              // Verify it was saved to localStorage
              expect(localStorageMock['theme']).toBe(selectedTheme);
            }, { timeout: 3000 });

            // Unmount the first provider (simulating page unload)
            act(() => {
              unmount1();
            });

            // Small delay to ensure cleanup
            await new Promise(resolve => setTimeout(resolve, 50));

            // Step 2: Create a new ThemeProvider instance (simulating page reload)
            // This should restore the theme from localStorage
            function ThemeDisplay() {
              const { theme } = useTheme();
              return <div data-testid="restored-theme">{theme}</div>;
            }

            const { container: container2, unmount: unmount2 } = render(
              <ThemeProvider defaultTheme={oppositeTheme}>
                <ThemeDisplay />
              </ThemeProvider>
            );

            try {
              // Wait for the restored theme to be applied
              await waitFor(() => {
                const restoredElement = container2.querySelector('[data-testid="restored-theme"]');
                expect(restoredElement).toBeInTheDocument();
                // Verify the theme was restored from localStorage
                expect(restoredElement?.textContent).toBe(selectedTheme);
              }, { timeout: 3000 });

              // Verify CSS custom properties match the restored theme
              await waitFor(() => {
                const root = document.documentElement;
                const themeConfig = themes[selectedTheme];
                Object.entries(themeConfig.colors).forEach(([key, expectedValue]) => {
                  const actualValue = root.style.getPropertyValue(`--color-${key}`);
                  expect(actualValue).toBe(expectedValue);
                });
              }, { timeout: 3000 });

              // Cleanup
              act(() => {
                unmount2();
              });
            } catch (error) {
              act(() => {
                unmount2();
              });
              throw error;
            }
          } catch (error) {
            act(() => {
              unmount1();
            });
            throw error;
          }
        }
      ),
      { numRuns: 100 }
    );
  }, 30000);
});
