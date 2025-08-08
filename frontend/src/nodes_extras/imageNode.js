// imageNode.js
import { useState } from 'react';
import { NodeShell } from '../nodes/NodeShell';

export const ImageNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://placekitten.com/200/200');

  return (
    <NodeShell id={id} title="Image" rightHandles={[{ id: `${id}-image`, key: 'image', top: '50%' }]}> 
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ display: 'grid', gap: 4, fontSize: 12 }}>
          <span style={{ opacity: 0.75 }}>URL</span>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
            style={{ background: '#0B1220', color: '#E2E8F0', border: '1px solid #253041', borderRadius: 6, padding: '6px 8px' }}
          />
        </label>
        <div style={{ fontSize: 11, opacity: 0.8 }}>Outputs an image handle</div>
      </div>
    </NodeShell>
  );
};


