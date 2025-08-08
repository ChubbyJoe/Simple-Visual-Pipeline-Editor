// outputNode.js

import { useState } from 'react';
import { NodeShell } from './NodeShell';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <NodeShell
      id={id}
      title="Output"
      leftHandles={[{ id: `${id}-value`, key: 'value', top: '50%' }]}
    >
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ display: 'grid', gap: 4, fontSize: 12 }}>
          <span style={{ opacity: 0.75 }}>Name</span>
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={{
              background: '#0B1220',
              color: '#E2E8F0',
              border: '1px solid #253041',
              borderRadius: 6,
              padding: '6px 8px',
            }}
          />
        </label>
        <label style={{ display: 'grid', gap: 4, fontSize: 12 }}>
          <span style={{ opacity: 0.75 }}>Type</span>
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            style={{
              background: '#0B1220',
              color: '#E2E8F0',
              border: '1px solid #253041',
              borderRadius: 6,
              padding: '6px 8px',
            }}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </NodeShell>
  );
}
