# Animation System

The animation system provides standardized animation presets using Framer Motion variants. These presets ensure consistent micro-interactions across the application.

## Installation

The animation system uses Framer Motion, which is already installed in this project.

## Available Presets

### fadeIn

Fades in an element from opacity 0 to 1.

```tsx
import { motion } from 'framer-motion';
import { fadeIn } from '@/design-system/animations';

<motion.div variants={fadeIn} initial="hidden" animate="visible">
  Content
</motion.div>
```

### slideInFromTop

Slides in an element from the top with a fade effect.

```tsx
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/design-system/animations';

<motion.div variants={slideInFromTop} initial="hidden" animate="visible">
  Content
</motion.div>
```

### slideInFromBottom

Slides in an element from the bottom with a fade effect.

```tsx
import { motion } from 'framer-motion';
import { slideInFromBottom } from '@/design-system/animations';

<motion.div variants={slideInFromBottom} initial="hidden" animate="visible">
  Content
</motion.div>
```

### slideInFromLeft

Slides in an element from the left with a fade effect.

```tsx
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/design-system/animations';

<motion.div variants={slideInFromLeft} initial="hidden" animate="visible">
  Content
</motion.div>
```

### slideInFromRight

Slides in an element from the right with a fade effect.

```tsx
import { motion } from 'framer-motion';
import { slideInFromRight } from '@/design-system/animations';

<motion.div variants={slideInFromRight} initial="hidden" animate="visible">
  Content
</motion.div>
```

### scaleIn

Scales in an element from 0.9 to 1 with a fade effect.

```tsx
import { motion } from 'framer-motion';
import { scaleIn } from '@/design-system/animations';

<motion.div variants={scaleIn} initial="hidden" animate="visible">
  Content
</motion.div>
```

### staggerContainer

Staggers the animation of child elements. Use this on a parent container to create a sequential animation effect.

```tsx
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/design-system/animations';

<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  <motion.div variants={fadeIn}>Child 1</motion.div>
  <motion.div variants={fadeIn}>Child 2</motion.div>
  <motion.div variants={fadeIn}>Child 3</motion.div>
</motion.div>
```

## Customizing Animations

You can customize the animation timing by passing transition props:

```tsx
<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.5, delay: 0.2 }}
>
  Content
</motion.div>
```

## Transition and Easing Presets

The animation system provides standardized transition durations and easing curves for consistent timing across the application.

### Transition Durations

Use these presets for consistent animation timing:

```tsx
import { motion } from 'framer-motion';
import { fadeIn, transitions } from '@/design-system/animations';

// Fast transition (150ms) - for quick micro-interactions
<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={transitions.fast}
>
  Quick animation
</motion.div>

// Normal transition (300ms) - for standard transitions
<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={transitions.normal}
>
  Standard animation
</motion.div>

// Slow transition (500ms) - for deliberate animations
<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={transitions.slow}
>
  Slow animation
</motion.div>
```

### Easing Curves

Use these presets for consistent easing behavior:

```tsx
import { motion } from 'framer-motion';
import { fadeIn, transitions, easings } from '@/design-system/animations';

// Ease In - starts slow, ends fast (good for exits)
<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={{ ...transitions.normal, ease: easings.easeIn }}
>
  Ease in animation
</motion.div>

// Ease Out - starts fast, ends slow (good for entrances)
<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={{ ...transitions.normal, ease: easings.easeOut }}
>
  Ease out animation
</motion.div>

// Ease In Out - slow start and end (good for continuous motion)
<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={{ ...transitions.normal, ease: easings.easeInOut }}
>
  Ease in-out animation
</motion.div>

// Spring - natural spring physics (good for playful interactions)
<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={easings.spring}
>
  Spring animation
</motion.div>
```

### Combining Transitions and Easings

You can combine duration and easing presets for complete control:

```tsx
import { motion } from 'framer-motion';
import { slideInFromBottom, transitions, easings } from '@/design-system/animations';

<motion.div
  variants={slideInFromBottom}
  initial="hidden"
  animate="visible"
  transition={{ ...transitions.slow, ease: easings.easeOut }}
>
  Slow slide with ease-out
</motion.div>
```

## TypeScript Support

All animation presets are fully typed using Framer Motion's `Variants` type. You can import the types:

```tsx
import type {
  AnimationPreset,
  AnimationPresetName,
  TransitionDuration,
  EasingCurve,
} from '@/design-system/animations';

// Type-safe transition duration
const duration: TransitionDuration = 'fast'; // 'fast' | 'normal' | 'slow'

// Type-safe easing curve
const easing: EasingCurve = 'easeOut'; // 'easeIn' | 'easeOut' | 'easeInOut' | 'spring'
```

## Requirements Validation

This animation system validates the following requirements:

- **Requirement 4.1**: Fade-in animations with configurable duration and delay
- **Requirement 4.2**: Slide-in animations from four directions (top, bottom, left, right)
- **Requirement 4.3**: Scale animations for hover and focus states
- **Requirement 4.5**: Transition presets for common durations (fast: 150ms, normal: 300ms, slow: 500ms)
- **Requirement 4.6**: Easing curve presets (ease-in, ease-out, ease-in-out, spring)
- **Requirement 4.7**: Framer Motion variants for each animation preset
- **Requirement 4.8**: Animation timing uses values from Design Token System
