/**
 * Badge Component Visual Examples
 * 
 * This file provides visual examples of all Badge variants and sizes.
 * Can be used for manual testing and visual regression testing.
 */

import { Badge } from '../Badge';

export function BadgeExamples() {
  return (
    <div className="p-8 space-y-8 bg-navy-900">
      {/* Variants */}
      <section>
        <h2 className="text-white text-2xl mb-4">Variants</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <Badge variant="default">Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-white text-2xl mb-4">Sizes</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </section>

      {/* All Combinations */}
      <section>
        <h2 className="text-white text-2xl mb-4">All Combinations</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-white text-lg mb-2">Small</h3>
            <div className="flex gap-4 flex-wrap">
              <Badge variant="default" size="sm">Default</Badge>
              <Badge variant="success" size="sm">Success</Badge>
              <Badge variant="warning" size="sm">Warning</Badge>
              <Badge variant="error" size="sm">Error</Badge>
              <Badge variant="info" size="sm">Info</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg mb-2">Medium</h3>
            <div className="flex gap-4 flex-wrap">
              <Badge variant="default" size="md">Default</Badge>
              <Badge variant="success" size="md">Success</Badge>
              <Badge variant="warning" size="md">Warning</Badge>
              <Badge variant="error" size="md">Error</Badge>
              <Badge variant="info" size="md">Info</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg mb-2">Large</h3>
            <div className="flex gap-4 flex-wrap">
              <Badge variant="default" size="lg">Default</Badge>
              <Badge variant="success" size="lg">Success</Badge>
              <Badge variant="warning" size="lg">Warning</Badge>
              <Badge variant="error" size="lg">Error</Badge>
              <Badge variant="info" size="lg">Info</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <h2 className="text-white text-2xl mb-4">Use Cases</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-white text-lg mb-2">Status Indicators</h3>
            <div className="flex gap-4 flex-wrap">
              <Badge variant="success">Active</Badge>
              <Badge variant="error">Inactive</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="info">Processing</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg mb-2">Notification Counts</h3>
            <div className="flex gap-4 flex-wrap">
              <Badge variant="error" size="sm">3</Badge>
              <Badge variant="info" size="sm">12</Badge>
              <Badge variant="success" size="sm">99+</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg mb-2">Category Tags</h3>
            <div className="flex gap-4 flex-wrap">
              <Badge variant="info">Technology</Badge>
              <Badge variant="default">Design</Badge>
              <Badge variant="success">Featured</Badge>
              <Badge variant="warning">New</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg mb-2">With Icons</h3>
            <div className="flex gap-4 flex-wrap">
              <Badge variant="success">✓ Verified</Badge>
              <Badge variant="warning">⚠ Alert</Badge>
              <Badge variant="error">✕ Failed</Badge>
              <Badge variant="info">ℹ Info</Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
