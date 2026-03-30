# Button Component

A flexible button component with multiple variants, sizes, and states. Uses design tokens for consistent styling across the application.

## Features

- **Four variants**: primary, secondary, ghost, outline
- **Three sizes**: sm, md, lg
- **Loading state** with spinner
- **Icon support** (left and right)
- **Full width option**
- **Accessibility compliant** with proper ARIA attributes
- **TypeScript support** with full type definitions

## Usage

### Basic Button

```tsx
import { Button } from '@/design-system/components/Button';

<Button>Click me</Button>
```

### Variants

```tsx
// Primary (default)
<Button variant="primary">Primary</Button>

// Secondary
<Button variant="secondary">Secondary</Button>

// Ghost
<Button variant="ghost">Ghost</Button>

// Outline
<Button variant="outline">Outline</Button>
```

### Sizes

```tsx
// Small
<Button size="sm">Small</Button>

// Medium (default)
<Button size="md">Medium</Button>

// Large
<Button size="lg">Large</Button>
```

### With Icons

```tsx
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Left icon
<Button leftIcon={<ArrowLeft />}>Back</Button>

// Right icon
<Button rightIcon={<ArrowRight />}>Next</Button>

// Both icons
<Button leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>
  Both
</Button>
```

### Loading State

```tsx
<Button isLoading>Processing...</Button>
```

### Full Width

```tsx
<Button isFullWidth>Full Width Button</Button>
```

### Disabled

```tsx
<Button disabled>Disabled</Button>
```

### Custom Styling

```tsx
<Button className="custom-class">Custom Styled</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'outline'` | `'primary'` | Visual variant of the button |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the button |
| `children` | `React.ReactNode` | - | Button content (required) |
| `leftIcon` | `React.ReactNode` | - | Icon to display on the left |
| `rightIcon` | `React.ReactNode` | - | Icon to display on the right |
| `isLoading` | `boolean` | `false` | Shows loading spinner and disables button |
| `isFullWidth` | `boolean` | `false` | Makes button take full width of container |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | - | Additional CSS classes |

All native HTML button attributes are also supported (onClick, type, aria-*, etc.).

## Accessibility

- Uses semantic `<button>` element
- Supports keyboard navigation
- Includes focus ring for keyboard users
- Loading state uses `aria-busy` attribute
- Icons are marked with `aria-hidden` to avoid screen reader duplication
- Disabled state properly communicated to assistive technologies

## Design Tokens Used

The Button component uses the following design tokens:

- **Colors**: `royal-600`, `cyan-600`, `royal-500`, `royal-400`, `navy-900`, `slate-300`, `slate-600`
- **Spacing**: Padding values from spacing scale
- **Typography**: Font sizes (sm, base, lg) and font weight (semibold)
- **Border Radius**: `rounded-2xl` (24px)
- **Shadows**: `shadow-xl` for hover states

## Examples

### Form Submit Button

```tsx
<Button type="submit" variant="primary" size="lg" isFullWidth>
  Submit Form
</Button>
```

### Navigation Button

```tsx
<Button variant="ghost" leftIcon={<ArrowLeft />} onClick={() => router.back()}>
  Go Back
</Button>
```

### Async Action Button

```tsx
const [loading, setLoading] = useState(false);

const handleSave = async () => {
  setLoading(true);
  await saveData();
  setLoading(false);
};

<Button isLoading={loading} onClick={handleSave}>
  Save Changes
</Button>
```
