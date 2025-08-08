// loggerNode.js
import { NodeShell } from '../nodes/NodeShell';

export const LoggerNode = ({ id }) => {
  return (
    <NodeShell
      id={id}
      title="Logger"
      leftHandles={[{ id: `${id}-in`, key: 'in', top: '50%' }]}
      rightHandles={[{ id: `${id}-out`, key: 'out', top: '50%' }]}
    >
      <div style={{ fontSize: 12, opacity: 0.85 }}>Pass-through node for debugging</div>
    </NodeShell>
  );
};


