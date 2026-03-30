# Design System Tokens

This directory contains the design token definitions for the JISOI design system.

## Structure

- `colors.ts` - Color palette tokens (navy, royal, cyan with shades 50-900)
- `spacing.ts` - Spacing scale tokens (4px to 128px)
- `typography.ts` - Font families, sizes, weights, and line heights
- `shadows.ts` - Shadow elevation tokens and glow effects
- `borders.ts` - Border radius tokens
- `effects.ts` - Glass morphism effect tokens
- `index.ts` - Main export file for all tokens

## Usage

```typescript
import { colors, spacing, typography } from '@/design-system/tokens';

// Access color tokens
const primaryColor = colors.royal[600];

// Access spacing tokens
const padding = spacing.lg;

// Access typography tokens
const fontSize = typography.fontSize.xl;
```

## TypeScript Configuration

All token files are compiled with TypeScript strict mode enabled to ensure type safety.
Token values are defined as `const` assertions to provide literal type inference.

## Design Principles

1. **Immutability**: All tokens are exported as `const` to prevent accidental modification
2. **Type Safety**: TypeScript types are exported alongside token values
3. **Consistency**: Token values match the existing Tailwind configuration for backward compatibility
4. **Scalability**: Token structure supports easy addition of new values and categories
