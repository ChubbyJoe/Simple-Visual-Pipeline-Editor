// llmNode.js

import { NodeShell } from './NodeShell';

export const LLMNode = ({ id }) => {
  return (
    <NodeShell
      id={id}
      title="LLM"
      leftHandles={[
        { id: `${id}-system`, key: 'system', top: '35%' },
        { id: `${id}-prompt`, key: 'prompt', top: '65%' },
      ]}
      rightHandles={[{ id: `${id}-response`, key: 'response', top: '50%' }]}
    >
      <div style={{ fontSize: 12, opacity: 0.85 }}>Large Language Model</div>
    </NodeShell>
  );
}
