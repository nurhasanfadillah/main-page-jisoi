# Design Document: Design System Upgrade

## Overview

This design document specifies the architecture and implementation approach for upgrading the JISOI website's design system. The current implementation uses Tailwind CSS with custom color tokens (navy, royal, cyan), glass morphism patterns, and Framer Motion animations across 12 components. The upgrade introduces a centralized design token system, enhanced component library, theme switching capabilities, standardized animation presets, and performance optimizations while maintaining backward compatibility.

The design system will be built on top of the existing Tailwind CSS configuration, extending it with CSS custom properties for theme-ability, TypeScript constants for type safety, and a React Context-based theme system. The architecture prioritizes developer experience through strong typing, comprehensive documentation, and gradual migration support.

## Architecture

### System Layers

The design system architecture consists of four layers:

1. **Token Layer**: CSS custom properties and TypeScript constants defining atomic design values (colors, spacing, typography, shadows, borders)
2. **Component Layer**: Reusable React components consuming tokens with variant support and TypeScript interfaces
3. **Theme Layer**: React Context providing theme state management and persistence
4. **Animation Layer**: Framer Motion variants and CSS animation presets consuming timing tokens

### Technology Stack

- **Styling**: Tailwind CSS 3.4+ with CSS custom properties
- **Type System**: TypeScript 5.3+ with strict mode enabled
- **Animation**: Framer Motion 11.3+ for complex animations, CSS transitions for simple interactions
- **State Management**: React Context API for theme state
- **Build System**: Next.js 15+ with built-in CSS optimization
- **Testing**: Vitest for unit tests, React Testing Library for component tests

### File Structure

```
src/
├── design-system/
│   ├── tokens/
│   │   ├── colors.ts          # Color token definitions
│   │   ├── spacing.ts         # Spacing scale
│   │   ├── typography.ts      # Font families, sizes, weights
│   │   ├── shadows.ts         # Shadow elevation tokens
│   │   ├── borders.ts         # Border radius tokens
│   │   ├── effects.ts         # Glass morphism tokens
│   │   └── index.ts           # Token exports
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   └── index.ts
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.types.ts
│   │   │   └── index.ts
│   │   ├── Badge/
│   │   │   ├── Badge.tsx
│   │   │   ├── Badge.types.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── theme/
│   │   ├── ThemeProvider.tsx
│   │   ├── useTheme.ts
│   │   ├── themes.ts          # Theme configurations
│   │   └── index.ts
│   ├── animations/
│   │   ├── presets.ts         # Framer Motion variants
│   │   ├── transitions.ts     # Timing and easing
│   │   └── index.ts
│   └── index.ts
├── app/
│   └── globals.css            # Enhanced with CSS custom properties
└── components/                # Existing components (gradual migration)
```

## Components and Interfaces

### Design Token System

#### Color Tokens

Color tokens are defined as TypeScript constants with corresponding CSS custom properties for theme-ability. Each color palette (navy, royal, cyan) includes shades from 50 to 900.

```typescript
// src/design-system/tokens/colors.ts
export const colors = {
  navy: {
    50: '#E6EBF5',
    100: '#C2D1E8',
    200: '#9AB5D9',
    300: '#7299CA',
    400: '#5483BF',
    500: '#366DB4',
    600: '#2E5FA0',
    700: '#244D88',
    800: '#1A3B70',
    900: '#0A1628',
  },
  royal: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#1E40AF',
  },
  cyan: {
    50: '#ECFEFF',
    100: '#CFFAFE',
    200: '#A5F3FC',
    300: '#67E8F9',
    400: '#22D3EE',
    500: '#06B6D4',
    600: '#0891B2',
    700: '#0E7490',
    800: '#155E75',
    900: '#164E63',
  },
} as const;

export type ColorPalette = keyof typeof colors;
export type ColorShade = keyof typeof colors.navy;
```

#### Spacing Tokens

```typescript
// src/design-system/tokens/spacing.ts
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  base: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
  '5xl': '128px',
} as const;

export type SpacingScale = keyof typeof spacing;
```

#### Typography Tokens

```typescript
// src/design-system/tokens/typography.ts
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
} as const;
```

#### Shadow Tokens

```typescript
// src/design-system/tokens/shadows.ts
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  glow: {
    royal: '0 0 20px rgba(99, 102, 241, 0.3)',
    cyan: '0 0 20px rgba(6, 182, 212, 0.3)',
  },
} as const;
```

#### Border Radius Tokens

```typescript
// src/design-system/tokens/borders.ts
export const borderRadius = {
  sm: '0.375rem',   // 6px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  full: '9999px',
} as const;
```

#### Glass Morphism Effect Tokens

```typescript
// src/design-system/tokens/effects.ts
export const glassEffects = {
  glass: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropBlur: '24px',
    border: 'rgba(255, 255, 255, 0.1)',
  },
  glassStrong: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropBlur: '32px',
    border: 'rgba(255, 255, 255, 0.2)',
  },
} as const;
```

### Component Library

#### Button Component

The Button component supports four variants (primary, secondary, ghost, outline) and three sizes (sm, md, lg).

```typescript
// src/design-system/components/Button/Button.types.ts
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  isFullWidth?: boolean;
}
```

```typescript
// src/design-system/components/Button/Button.tsx
import { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { cn } from '@/lib/utils';

const variantStyles = {
  primary: 'bg-gradient-to-r from-royal-600 to-cyan-600 text-white hover:shadow-xl hover:shadow-royal-500/20',
  secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/15',
  ghost: 'text-slate-300 hover:bg-white/5 hover:text-white',
  outline: 'border border-slate-600 text-white hover:bg-white/5',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, leftIcon, rightIcon, isLoading, isFullWidth, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all',
          'focus:outline-none focus:ring-2 focus:ring-royal-400 focus:ring-offset-2 focus:ring-offset-navy-900',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          isFullWidth && 'w-full',
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin">⏳</span>
        ) : (
          <>
            {leftIcon && <span>{leftIcon}</span>}
            {children}
            {rightIcon && <span>{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

#### Card Component

The Card component supports three variants (glass, glassStrong, solid) for different visual hierarchies.

```typescript
// src/design-system/components/Card/Card.types.ts
export type CardVariant = 'glass' | 'glassStrong' | 'solid';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: React.ReactNode;
  hover?: boolean;
}
```

```typescript
// src/design-system/components/Card/Card.tsx
import { forwardRef } from 'react';
import { CardProps } from './Card.types';
import { cn } from '@/lib/utils';

const variantStyles = {
  glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
  glassStrong: 'bg-white/10 backdrop-blur-2xl border border-white/20',
  solid: 'bg-navy-800 border border-slate-700',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'glass', children, hover = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl transition-all',
          variantStyles[variant],
          hover && 'hover:bg-white/10 hover:scale-[1.02]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
```

#### Badge Component

The Badge component supports five variants (default, success, warning, error, info) and three sizes (sm, md, lg).

```typescript
// src/design-system/components/Badge/Badge.types.ts
export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
}
```

```typescript
// src/design-system/components/Badge/Badge.tsx
import { forwardRef } from 'react';
import { BadgeProps } from './Badge.types';
import { cn } from '@/lib/utils';

const variantStyles = {
  default: 'bg-slate-500/20 text-slate-300 border-slate-500/40',
  success: 'bg-green-500/20 text-green-300 border-green-500/40',
  warning: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
  error: 'bg-red-500/20 text-red-300 border-red-500/40',
  info: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium rounded-full border',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
```

### Theme System

#### Theme Configuration

```typescript
// src/design-system/theme/themes.ts
export interface Theme {
  name: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
  };
}

export const themes = {
  dark: {
    name: 'dark',
    colors: {
      background: '#0A1628',
      foreground: '#F1F5F9',
      primary: '#4F46E5',
      secondary: '#0891B2',
      accent: '#22D3EE',
      muted: '#64748B',
    },
  },
  light: {
    name: 'light',
    colors: {
      background: '#FFFFFF',
      foreground: '#0F172A',
      primary: '#4F46E5',
      secondary: '#0891B2',
      accent: '#22D3EE',
      muted: '#94A3B8',
    },
  },
} as const;

export type ThemeName = keyof typeof themes;
```

#### Theme Provider

```typescript
// src/design-system/theme/ThemeProvider.tsx
'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';
import { themes, ThemeName } from './themes';

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeName;
}

export function ThemeProvider({ children, defaultTheme = 'dark' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Restore saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setThemeState(savedTheme);
    } else {
      // Respect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeState(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply theme to document
    const root = document.documentElement;
    const themeConfig = themes[theme];

    Object.entries(themeConfig.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

#### useTheme Hook

```typescript
// src/design-system/theme/useTheme.ts
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

### Animation System

#### Animation Presets

```typescript
// src/design-system/animations/presets.ts
import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideInFromTop: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

#### Transition Presets

```typescript
// src/design-system/animations/transitions.ts
export const transitions = {
  fast: { duration: 0.15 },
  normal: { duration: 0.3 },
  slow: { duration: 0.5 },
} as const;

export const easings = {
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
} as const;
```

## Data Models

### Token Type Definitions

```typescript
// src/design-system/tokens/types.ts
export interface ColorToken {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface SpacingToken {
  xs: string;
  sm: string;
  md: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
}

export interface TypographyToken {
  fontFamily: {
    sans: string[];
  };
  fontSize: Record<string, string>;
  fontWeight: Record<string, number>;
  lineHeight: Record<string, number>;
}

export interface ShadowToken {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  glow: {
    royal: string;
    cyan: string;
  };
}

export interface BorderRadiusToken {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface GlassEffect {
  background: string;
  backdropBlur: string;
  border: string;
}
```

### CSS Custom Properties

CSS custom properties will be defined in `globals.css` to enable theme switching:

```css
:root {
  /* Color tokens */
  --color-background: #0A1628;
  --color-foreground: #F1F5F9;
  --color-primary: #4F46E5;
  --color-secondary: #0891B2;
  --color-accent: #22D3EE;
  --color-muted: #64748B;

  /* Spacing tokens */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-base: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  --spacing-4xl: 96px;
  --spacing-5xl: 128px;

  /* Typography tokens */
  --font-sans: 'Inter', system-ui, sans-serif;

  /* Shadow tokens */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  /* Border radius tokens */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;

  /* Glass effect tokens */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-blur: 24px;
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-strong-bg: rgba(255, 255, 255, 0.1);
  --glass-strong-blur: 32px;
  --glass-strong-border: rgba(255, 255, 255, 0.2);
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Token System Structure Completeness

*For any* token category (colors, spacing, typography, shadows, borders, effects), the exported token object should contain all required keys and valid values according to its type definition.

**Validates: Requirements 1.1, 1.3, 1.6**

### Property 2: Token Value Propagation

*For any* design token value, when it is updated in the token system, all components consuming that token should reflect the updated value without requiring code changes.

**Validates: Requirements 1.8**

### Property 3: Component Variant Styling

*For any* component with variant support (Button, Card, Badge), specifying a valid variant should apply the corresponding styles defined in the Design_Token_System.

**Validates: Requirements 2.6**

### Property 4: Component Token Usage

*For any* component in the Component_Library, the component should reference Design_Token values (via CSS custom properties or token constants) rather than hardcoded style values.

**Validates: Requirements 2.5**

### Property 5: Theme Switching Updates Tokens

*For any* theme in the theme system, switching to that theme should update all CSS custom properties to match the theme's token values.

**Validates: Requirements 3.4**

### Property 6: Theme Switching Without Reload

*For any* theme switch operation, the visual changes should apply immediately without requiring a page reload.

**Validates: Requirements 3.8**

### Property 7: Theme Persistence Round Trip

*For any* theme selection, saving the theme preference to localStorage and then restoring it on page load should result in the same theme being active.

**Validates: Requirements 3.5, 3.6**

### Property 8: Animation Preset Structure

*For any* animation preset exported by the Animation_Preset system, it should be a valid Framer Motion Variants object containing at least 'hidden' and 'visible' states.

**Validates: Requirements 4.7**

### Property 9: Animation Timing from Tokens

*For any* animation preset, the timing configuration should reference values from the Design_Token_System rather than hardcoded duration values.

**Validates: Requirements 4.8**

### Property 10: Backward Compatible Token Values

*For any* color token (navy, royal, cyan) and shade (50-900), the token value in the new Design_Token_System should match the corresponding value in the current Tailwind configuration.

**Validates: Requirements 8.1**

### Property 11: Compatibility Layer Mapping

*For any* old Tailwind class name in the compatibility layer, it should map to the correct corresponding token value in the new Design_Token_System.

**Validates: Requirements 8.3**

### Property 12: Visual Regression Prevention

*For any* component, the rendered visual output after migration to use Design_Token_System should be identical to the output before migration (pixel-perfect match).

**Validates: Requirements 8.4, 8.7**

### Property 13: API Stability

*For any* existing component, the public API (prop interfaces, prop names, prop types) should remain unchanged after implementing the Design_Token_System.

**Validates: Requirements 8.6**

## Error Handling

### Token System Errors

1. **Invalid Token Access**: When a component attempts to access a non-existent token, the system should log a warning in development mode and fall back to a default value to prevent rendering failures.

2. **Type Mismatches**: When a token value doesn't match its expected type (e.g., passing a string where a number is expected), TypeScript should catch this at compile time. Runtime validation should be minimal to avoid performance overhead.

3. **Missing CSS Custom Properties**: If a CSS custom property is not defined (e.g., theme not loaded), components should fall back to hardcoded token values to ensure graceful degradation.

### Component Library Errors

1. **Invalid Variant**: When an invalid variant is passed to a component, TypeScript should prevent compilation. If a runtime invalid variant is encountered (e.g., from external data), the component should fall back to the default variant and log a warning.

2. **Missing Required Props**: Components should use TypeScript's type system to enforce required props at compile time. Runtime prop validation should be handled by React's built-in prop type checking in development mode.

3. **Children Rendering Errors**: If a component's children fail to render, the error should be caught by React's error boundary and not crash the entire application.

### Theme System Errors

1. **localStorage Unavailable**: If localStorage is not available (e.g., in private browsing mode), the theme system should fall back to in-memory state and respect system preferences without throwing errors.

2. **Invalid Theme Data**: If corrupted theme data is found in localStorage, the system should clear it and fall back to system preferences or the default theme.

3. **Theme Context Missing**: If useTheme is called outside of ThemeProvider, it should throw a descriptive error in development mode to help developers identify the issue.

### Animation System Errors

1. **Framer Motion Load Failure**: If Framer Motion fails to load (e.g., network error), components should fall back to CSS-only animations or render without animations rather than breaking.

2. **Invalid Animation Configuration**: If an animation preset receives invalid configuration (e.g., negative duration), it should use default values and log a warning in development mode.

3. **Performance Issues**: If animations cause performance degradation (e.g., on low-end devices), the system should provide a way to disable animations via a reduced-motion preference.

## Testing Strategy

### Dual Testing Approach

The design system will be validated using both unit tests and property-based tests:

- **Unit tests**: Verify specific examples, edge cases, error conditions, and component rendering
- **Property tests**: Verify universal properties across all inputs using randomized test data

Both testing approaches are complementary and necessary for comprehensive coverage. Unit tests catch concrete bugs and validate specific scenarios, while property tests verify general correctness across a wide range of inputs.

### Unit Testing

Unit tests will focus on:

1. **Component Rendering**: Verify each component variant renders with correct classes and attributes
2. **Theme Switching**: Test specific theme transitions (dark to light, light to dark)
3. **localStorage Integration**: Test theme persistence with mocked localStorage
4. **Error Boundaries**: Test error handling for invalid props and missing context
5. **Accessibility**: Test ARIA attributes, keyboard navigation, and focus management
6. **Edge Cases**: Test empty states, loading states, and boundary conditions

Example unit test structure:

```typescript
describe('Button Component', () => {
  it('renders primary variant with correct styles', () => {
    const { container } = render(<Button variant="primary">Click me</Button>);
    expect(container.firstChild).toHaveClass('bg-gradient-to-r', 'from-royal-600', 'to-cyan-600');
  });

  it('renders with loading state', () => {
    const { getByRole } = render(<Button isLoading>Click me</Button>);
    expect(getByRole('button')).toBeDisabled();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Property-Based Testing

Property-based tests will use **fast-check** (for TypeScript/JavaScript) to generate random test data and verify universal properties. Each property test will run a minimum of 100 iterations to ensure comprehensive coverage.

Property tests will focus on:

1. **Token Structure Validation**: Generate random token categories and verify structure
2. **Component Variant Consistency**: Generate random variants and verify styling
3. **Theme Switching Invariants**: Generate random theme sequences and verify state consistency
4. **Animation Configuration**: Generate random animation parameters and verify valid output
5. **Backward Compatibility**: Generate random color tokens and verify value equality

Each property test must reference its corresponding design document property using a comment tag:

```typescript
/**
 * Feature: design-system-upgrade, Property 1: Token System Structure Completeness
 */
test('token system structure is complete for all categories', () => {
  fc.assert(
    fc.property(
      fc.constantFrom('colors', 'spacing', 'typography', 'shadows', 'borders', 'effects'),
      (category) => {
        const tokens = getTokensByCategory(category);
        expect(tokens).toBeDefined();
        expect(Object.keys(tokens).length).toBeGreaterThan(0);
        // Verify all values are valid (non-null, correct type)
        Object.values(tokens).forEach(value => {
          expect(value).toBeTruthy();
        });
      }
    ),
    { numRuns: 100 }
  );
});

/**
 * Feature: design-system-upgrade, Property 3: Component Variant Styling
 */
test('component variants apply correct styles', () => {
  fc.assert(
    fc.property(
      fc.constantFrom('Button', 'Card', 'Badge'),
      fc.record({
        Button: fc.constantFrom('primary', 'secondary', 'ghost', 'outline'),
        Card: fc.constantFrom('glass', 'glassStrong', 'solid'),
        Badge: fc.constantFrom('default', 'success', 'warning', 'error', 'info'),
      }),
      (componentName, variants) => {
        const variant = variants[componentName];
        const Component = getComponent(componentName);
        const { container } = render(<Component variant={variant}>Test</Component>);
        
        // Verify variant-specific classes are applied
        const variantStyles = getVariantStyles(componentName, variant);
        variantStyles.forEach(className => {
          expect(container.firstChild).toHaveClass(className);
        });
      }
    ),
    { numRuns: 100 }
  );
});

/**
 * Feature: design-system-upgrade, Property 7: Theme Persistence Round Trip
 */
test('theme persistence round trip maintains theme selection', () => {
  fc.assert(
    fc.property(
      fc.constantFrom('dark', 'light'),
      (themeName) => {
        // Save theme
        const themeSystem = new ThemeSystem();
        themeSystem.setTheme(themeName);
        
        // Simulate page reload by creating new instance
        const restoredThemeSystem = new ThemeSystem();
        
        // Verify theme is restored
        expect(restoredThemeSystem.getTheme()).toBe(themeName);
      }
    ),
    { numRuns: 100 }
  );
});

/**
 * Feature: design-system-upgrade, Property 10: Backward Compatible Token Values
 */
test('new token values match current Tailwind config', () => {
  fc.assert(
    fc.property(
      fc.constantFrom('navy', 'royal', 'cyan'),
      fc.constantFrom('50', '100', '200', '300', '400', '500', '600', '700', '800', '900'),
      (palette, shade) => {
        const newTokenValue = colors[palette][shade];
        const currentTailwindValue = getCurrentTailwindColor(palette, shade);
        expect(newTokenValue).toBe(currentTailwindValue);
      }
    ),
    { numRuns: 100 }
  );
});
```

### Testing Tools and Configuration

- **Test Framework**: Vitest 1.0+ (fast, ESM-native, TypeScript support)
- **Component Testing**: React Testing Library (user-centric testing)
- **Property Testing**: fast-check 3.0+ (property-based testing for TypeScript)
- **Visual Regression**: Playwright with screenshot comparison (for Property 12)
- **Coverage Target**: 80% code coverage minimum, 100% for critical paths

### Test Organization

```
src/
├── design-system/
│   ├── tokens/
│   │   ├── __tests__/
│   │   │   ├── colors.test.ts
│   │   │   ├── colors.property.test.ts
│   │   │   └── ...
│   ├── components/
│   │   ├── Button/
│   │   │   ├── __tests__/
│   │   │   │   ├── Button.test.tsx
│   │   │   │   └── Button.property.test.tsx
│   ├── theme/
│   │   ├── __tests__/
│   │   │   ├── ThemeProvider.test.tsx
│   │   │   └── theme.property.test.tsx
│   └── animations/
│       ├── __tests__/
│       │   ├── presets.test.ts
│       │   └── presets.property.test.ts
```

### Continuous Integration

All tests will run on every pull request and commit to main branch:

1. **Unit Tests**: Run all unit tests with coverage reporting
2. **Property Tests**: Run all property tests with 100 iterations minimum
3. **Visual Regression**: Run visual regression tests on component changes
4. **Type Checking**: Run TypeScript compiler in strict mode
5. **Linting**: Run ESLint with accessibility rules enabled

### Performance Testing

Performance benchmarks will be established for:

1. **CSS Bundle Size**: Measure before/after bundle size (target: 30% reduction)
2. **Component Render Time**: Measure average render time for each component
3. **Theme Switch Time**: Measure time to switch themes (target: <100ms)
4. **Animation Frame Rate**: Ensure animations maintain 60fps

### Migration Testing

During the migration phase:

1. **Snapshot Tests**: Create snapshots of all existing components before migration
2. **Visual Regression**: Compare rendered output before/after migration
3. **Integration Tests**: Verify existing component interactions still work
4. **Accessibility Tests**: Ensure WCAG compliance is maintained

