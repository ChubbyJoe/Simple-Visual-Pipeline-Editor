// textNode.js

import { useMemo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeShell } from './NodeShell';

const extractVariables = (text) => {
  // Match {{ variableName }} with JS identifier rules
  const regex = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;
  const found = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    found.add(match[1]);
  }
  return Array.from(found);
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const variables = useMemo(() => extractVariables(currText), [currText]);

  // Auto-sizing: calculate rows based on line breaks and length
  const lines = currText.split('\n');
  const longestLine = Math.max(...lines.map((l) => l.length), 1);
  const rows = Math.min(Math.max(lines.length, 2), 12);
  const cols = Math.min(Math.max(Math.ceil(longestLine * 0.8), 24), 60);

  return (
    <div style={{ position: 'relative' }}>
      {/* Dynamic left handles for variables */}
      {variables.map((v, idx) => (
        <Handle
          key={`${id}-var-${v}`}
          type="target"
          position={Position.Left}
          id={`${id}-var-${v}`}
          style={{ top: `${20 + idx * 18}px`, background: '#FBBF24', border: '1px solid #92400E' }}
        />
      ))}

      <NodeShell
        id={id}
        title="Text"
        rightHandles={[{ id: `${id}-output`, key: 'output', top: '50%' }]}
        width={Math.max(220, cols * 7)}
        minHeight={Math.max(90, rows * 22 + 70)}
      >
        <label style={{ display: 'grid', gap: 6, fontSize: 12 }}>
          <span style={{ opacity: 0.75 }}>Text</span>
          <textarea
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            rows={rows}
            style={{
              resize: 'none',
              width: '100%',
              background: '#0B1220',
              color: '#E2E8F0',
              border: '1px solid #253041',
              borderRadius: 6,
              padding: '8px 10px',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              lineHeight: 1.4,
            }}
          />
          {variables.length > 0 && (
            <div style={{ fontSize: 11, opacity: 0.8 }}>
              Variables: {variables.join(', ')}
            </div>
          )}
        </label>
      </NodeShell>
    </div>
  );
}
