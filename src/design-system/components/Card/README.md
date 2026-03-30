# Card Component

A flexible card component with multiple variants and optional hover effects. Uses design tokens for consistent styling across the application. Supports glass morphism effects for modern UI aesthetics.

## Features

- **Three variants**: glass, glassStrong, solid
- **Optional hover effects** with scale and background transitions
- **Glass morphism support** with backdrop blur
- **Accessibility compliant** with proper semantic HTML
- **TypeScript support** with full type definitions
- **Flexible content** - accepts any React children

## Usage

### Basic Card

```tsx
import { Card } from '@/design-system/components/Card';

<Card>
  <p>Card content goes here</p>
</Card>
```

### Variants

```tsx
// Glass (default) - Subtle glass morphism
<Card variant="glass">
  <p>Glass card with light backdrop blur</p>
</Card>

// Glass Strong - Enhanced glass morphism
<Card variant="glassStrong">
  <p>Strong glass card with enhanced backdrop blur</p>
</Card>

// Solid - Opaque background
<Card variant="solid">
  <p>Solid card with opaque background</p>
</Card>
```

### With Hover Effects

```tsx
// Interactive card with hover effects
<Card hover>
  <p>Hover over me to see the effect</p>
</Card>

// Combine variant with hover
<Card variant="glassStrong" hover>
  <p>Interactive strong glass card</p>
</Card>
```

### Custom Styling

```tsx
<Card className="p-6 shadow-lg">
  <h2>Custom Styled Card</h2>
  <p>With additional padding and shadow</p>
</Card>
```

### Complex Content

```tsx
<Card variant="glass" hover className="p-8">
  <h2 className="text-2xl font-bold mb-4">Card Title</h2>
  <p className="text-slate-300 mb-6">
    Card description with multiple elements
  </p>
  <Button>Action</Button>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'glass' \| 'glassStrong' \| 'solid'` | `'glass'` | Visual variant of the card |
| `children` | `React.ReactNode` | - | Card content (required) |
| `hover` | `boolean` | `false` | Enables hover effects (scale and background transition) |
| `className` | `string` | - | Additional CSS classes |

All native HTML div attributes are also supported (onClick, role, aria-*, data-*, etc.).

## Accessibility

- Uses semantic `<div>` element (can be customized with `role` attribute)
- Supports all ARIA attributes for enhanced accessibility
- Hover effects use CSS transforms for smooth performance
- Keyboard navigation supported when interactive
- Can be combined with semantic HTML elements (article, section, etc.)

## Design Tokens Used

The Card component uses the following design tokens:

- **Colors**: `white` (with opacity), `navy-800`, `slate-700`
- **Effects**: `backdrop-blur-xl`, `backdrop-blur-2xl`
- **Border Radius**: `rounded-2xl` (24px)
- **Borders**: `border-white/10`, `border-white/20`, `border-slate-700`
- **Transitions**: `transition-all` for smooth animations

## Variant Details

### Glass Variant
- Background: `bg-white/5` (5% white opacity)
- Backdrop blur: `backdrop-blur-xl`
- Border: `border-white/10` (10% white opacity)
- Use case: Subtle glass morphism for layered content

### Glass Strong Variant
- Background: `bg-white/10` (10% white opacity)
- Backdrop blur: `backdrop-blur-2xl`
- Border: `border-white/20` (20% white opacity)
- Use case: Enhanced glass morphism for prominent content

### Solid Variant
- Background: `bg-navy-800` (opaque)
- Border: `border-slate-700`
- Use case: Traditional card with solid background

## Examples

### Product Card

```tsx
<Card variant="glass" hover className="p-6">
  <img src="/product.jpg" alt="Product" className="w-full rounded-lg mb-4" />
  <h3 className="text-xl font-bold mb-2">Product Name</h3>
  <p className="text-slate-300 mb-4">Product description</p>
  <Button variant="primary">Buy Now</Button>
</Card>
```

### Feature Card

```tsx
<Card variant="glassStrong" className="p-8 text-center">
  <div className="text-4xl mb-4">🚀</div>
  <h3 className="text-2xl font-bold mb-2">Fast Performance</h3>
  <p className="text-slate-300">
    Lightning-fast load times and smooth interactions
  </p>
</Card>
```

### Clickable Card

```tsx
<Card 
  variant="glass" 
  hover 
  onClick={() => navigate('/details')}
  className="p-6 cursor-pointer"
  role="button"
  tabIndex={0}
>
  <h3 className="text-lg font-semibold mb-2">Click me</h3>
  <p className="text-slate-300">Navigate to details page</p>
</Card>
```

### Nested Cards

```tsx
<Card variant="solid" className="p-8">
  <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
  <div className="grid grid-cols-2 gap-4">
    <Card variant="glass" className="p-4">
      <p>Metric 1</p>
    </Card>
    <Card variant="glass" className="p-4">
      <p>Metric 2</p>
    </Card>
  </div>
</Card>
```

## Best Practices

1. **Use glass variants** for modern, layered UI designs
2. **Enable hover effects** for interactive cards (clickable, navigable)
3. **Add padding** via className for proper content spacing
4. **Combine with semantic HTML** (article, section) for better accessibility
5. **Use solid variant** when glass morphism doesn't fit the design context
6. **Test contrast** to ensure text readability on glass backgrounds
