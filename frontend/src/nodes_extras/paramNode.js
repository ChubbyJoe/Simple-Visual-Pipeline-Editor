// paramNode.js
import { useState } from 'react';
import { NodeShell } from '../nodes/NodeShell';

export const ParamNode = ({ id, data }) => {
  const [keyName, setKeyName] = useState(data?.key || 'param');
  const [value, setValue] = useState(data?.value || '');

  return (
    <NodeShell id={id} title="Param" rightHandles={[{ id: `${id}-value`, key: 'value', top: '50%' }]}> 
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ display: 'grid', gap: 4, fontSize: 12 }}>
          <span style={{ opacity: 0.75 }}>Key</span>
          <input
            value={keyName}
            onChange={(e) => setKeyName(e.target.value)}
            style={{ background: '#0B1220', color: '#E2E8F0', border: '1px solid #253041', borderRadius: 6, padding: '6px 8px' }}
          />
        </label>
        <label style={{ display: 'grid', gap: 4, fontSize: 12 }}>
          <span style={{ opacity: 0.75 }}>Value</span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ background: '#0B1220', color: '#E2E8F0', border: '1px solid #253041', borderRadius: 6, padding: '6px 8px' }}
          />
        </label>
      </div>
    </NodeShell>
  );
};


