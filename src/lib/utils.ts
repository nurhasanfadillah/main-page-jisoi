/**
 * Utility functions for the application
 */

/**
 * Merges class names, filtering out falsy values
 * @param classes - Class names to merge
 * @returns Merged class name string
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
