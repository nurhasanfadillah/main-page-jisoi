# Badge Component

A flexible badge component with multiple variants and sizes. Uses design tokens for consistent styling across the application.

## Features

- **Five variants**: default, success, warning, error, info
- **Three sizes**: sm, md, lg
- **Accessibility compliant** with semantic HTML
- **TypeScript support** with full type definitions

## Usage

### Basic Badge

```tsx
import { Badge } from '@/design-system/components/Badge';

<Badge>Default</Badge>
```

### Variants

```tsx
// Default
<Badge variant="default">Default</Badge>

// Success
<Badge variant="success">Success</Badge>

// Warning
<Badge variant="warning">Warning</Badge>

// Error
<Badge variant="error">Error</Badge>

// Info
<Badge variant="info">Info</Badge>
```

### Sizes

```tsx
// Small
<Badge size="sm">Small</Badge>

// Medium (default)
<Badge size="md">Medium</Badge>

// Large
<Badge size="lg">Large</Badge>
```

### Combined Examples

```tsx
// Large success badge
<Badge variant="success" size="lg">Completed</Badge>

// Small error badge
<Badge variant="error" size="sm">Failed</Badge>

// Medium info badge
<Badge variant="info" size="md">New</Badge>
```

### Custom Styling

```tsx
<Badge className="custom-class">Custom Styled</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Visual variant of the badge |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the badge |
| `children` | `React.ReactNode` | - | Badge content (required) |
| `className` | `string` | - | Additional CSS classes |

All native HTML span attributes are also supported (onClick, aria-*, etc.).

## Accessibility

- Uses semantic `<span>` element
- Supports all ARIA attributes for enhanced accessibility
- Color is not the only indicator (text content provides context)
- Proper contrast ratios for text readability

## Design Tokens Used

The Badge component uses the following design tokens:

- **Colors**: `slate-500`, `green-500`, `yellow-500`, `red-500`, `cyan-500` with opacity variants
- **Spacing**: Padding values from spacing scale (px-2 to px-4, py-0.5 to py-1.5)
- **Typography**: Font sizes (xs, sm, base) and font weight (medium)
- **Border Radius**: `rounded-full` for pill shape
- **Borders**: Semi-transparent borders matching variant colors

## Examples

### Status Indicators

```tsx
<Badge variant="success">Active</Badge>
<Badge variant="error">Inactive</Badge>
<Badge variant="warning">Pending</Badge>
```

### Notification Counts

```tsx
<Badge variant="error" size="sm">3</Badge>
<Badge variant="info" size="sm">12</Badge>
```

### Category Tags

```tsx
<Badge variant="info">Technology</Badge>
<Badge variant="default">Design</Badge>
<Badge variant="success">Featured</Badge>
```

### With Icons

```tsx
<Badge variant="success">
  ✓ Verified
</Badge>

<Badge variant="warning">
  ⚠ Alert
</Badge>
```
