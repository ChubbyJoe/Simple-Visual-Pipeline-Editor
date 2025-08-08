// mathNode.js
import { useState } from 'react';
import { NodeShell } from '../nodes/NodeShell';

export const MathNode = ({ id, data }) => {
  const [expression, setExpression] = useState(data?.expr || 'a + b');

  return (
    <NodeShell
      id={id}
      title="Math"
      leftHandles={[
        { id: `${id}-a`, key: 'a', top: '35%' },
        { id: `${id}-b`, key: 'b', top: '65%' },
      ]}
      rightHandles={[{ id: `${id}-result`, key: 'result', top: '50%' }]}
    >
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ display: 'grid', gap: 4, fontSize: 12 }}>
          <span style={{ opacity: 0.75 }}>Expression</span>
          <input
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="e.g., a + b"
            style={{ background: '#0B1220', color: '#E2E8F0', border: '1px solid #253041', borderRadius: 6, padding: '6px 8px' }}
          />
        </label>
      </div>
    </NodeShell>
  );
};


