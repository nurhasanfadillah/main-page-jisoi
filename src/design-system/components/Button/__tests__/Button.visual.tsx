/**
 * Button Component Visual Examples
 * 
 * This file provides visual examples of all Button variants, sizes, and states.
 * Can be used for manual testing and visual regression testing.
 */

import { Button } from '../Button';

export function ButtonExamples() {
  return (
    <div className="p-8 space-y-8 bg-navy-900">
      {/* Variants */}
      <section>
        <h2 className="text-white text-2xl mb-4">Variants</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-white text-2xl mb-4">Sizes</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h2 className="text-white text-2xl mb-4">With Icons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button leftIcon={<span>←</span>}>Back</Button>
          <Button rightIcon={<span>→</span>}>Next</Button>
          <Button leftIcon={<span>✓</span>} rightIcon={<span>→</span>}>
            Save & Continue
          </Button>
        </div>
      </section>

      {/* Loading State */}
      <section>
        <h2 className="text-white text-2xl mb-4">Loading State</h2>
        <div className="flex gap-4 flex-wrap">
          <Button isLoading variant="primary">
            Loading
          </Button>
          <Button isLoading variant="secondary">
            Loading
          </Button>
          <Button isLoading variant="ghost">
            Loading
          </Button>
          <Button isLoading variant="outline">
            Loading
          </Button>
        </div>
      </section>

      {/* Disabled State */}
      <section>
        <h2 className="text-white text-2xl mb-4">Disabled State</h2>
        <div className="flex gap-4 flex-wrap">
          <Button disabled variant="primary">
            Disabled
          </Button>
          <Button disabled variant="secondary">
            Disabled
          </Button>
          <Button disabled variant="ghost">
            Disabled
          </Button>
          <Button disabled variant="outline">
            Disabled
          </Button>
        </div>
      </section>

      {/* Full Width */}
      <section>
        <h2 className="text-white text-2xl mb-4">Full Width</h2>
        <Button isFullWidth variant="primary">
          Full Width Button
        </Button>
      </section>

      {/* Combined Examples */}
      <section>
        <h2 className="text-white text-2xl mb-4">Combined Examples</h2>
        <div className="space-y-4">
          <Button variant="primary" size="lg" leftIcon={<span>✓</span>} isFullWidth>
            Large Primary with Icon
          </Button>
          <Button variant="secondary" size="sm" rightIcon={<span>→</span>}>
            Small Secondary with Right Icon
          </Button>
          <Button variant="outline" size="md" leftIcon={<span>⚙</span>}>
            Settings
          </Button>
        </div>
      </section>
    </div>
  );
}
