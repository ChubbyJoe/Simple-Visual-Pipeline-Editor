// delayNode.js
import { useState } from 'react';
import { NodeShell } from '../nodes/NodeShell';

export const DelayNode = ({ id, data }) => {
  const [ms, setMs] = useState(data?.ms || 1000);

  return (
    <NodeShell
      id={id}
      title="Delay"
      leftHandles={[{ id: `${id}-in`, key: 'in', top: '50%' }]}
      rightHandles={[{ id: `${id}-out`, key: 'out', top: '50%' }]}
    >
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ display: 'grid', gap: 4, fontSize: 12 }}>
          <span style={{ opacity: 0.75 }}>Milliseconds</span>
          <input
            type="number"
            value={ms}
            onChange={(e) => setMs(Number(e.target.value))}
            style={{ background: '#0B1220', color: '#E2E8F0', border: '1px solid #253041', borderRadius: 6, padding: '6px 8px' }}
          />
        </label>
      </div>
    </NodeShell>
  );
};


