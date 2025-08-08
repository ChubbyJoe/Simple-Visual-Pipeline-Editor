// NodeShell.js
// A simple base component to standardize node layout, styles, and handles

import { Handle, Position } from 'reactflow';

export const NodeShell = ({
  id,
  title,
  children,
  leftHandles = [],
  rightHandles = [],
  width = 220,
  minHeight = 90,
}) => {
  return (
    <div
      style={{
        width,
        minHeight,
        border: '1px solid #253041',
        borderRadius: 10,
        background: '#0F172A',
        color: '#E2E8F0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '8px 12px',
          background: '#111827',
          borderBottom: '1px solid #253041',
          fontWeight: 600,
          fontSize: 13,
          letterSpacing: 0.3,
        }}
      >
        {title}
      </div>

      <div style={{ padding: 12 }}>{children}</div>

      {/* Left handles */}
      {leftHandles.map((h) => (
        <Handle
          key={h.id}
          type="target"
          position={Position.Left}
          id={h.id || `${id}-l-${h.key}`}
          style={{ top: h.top, background: '#60A5FA', border: '1px solid #1E3A8A' }}
        />
      ))}

      {/* Right handles */}
      {rightHandles.map((h) => (
        <Handle
          key={h.id}
          type="source"
          position={Position.Right}
          id={h.id || `${id}-r-${h.key}`}
          style={{ top: h.top, background: '#34D399', border: '1px solid #065F46' }}
        />
      ))}
    </div>
  );
};


